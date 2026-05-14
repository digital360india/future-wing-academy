"use client";

import { useEffect, useState } from "react";
import { quizQuestions } from "@/data/quizQuestions";

export default function QuizClient() {
  // STUDENT DETAILS
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");

  // QUIZ STATES
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [submitted, setSubmitted] = useState(false);
  const [resultData, setResultData] = useState(null);

  // NEW STATES
  const [quizStarted, setQuizStarted] = useState(false);
  const [tabWarning, setTabWarning] = useState("");

  // TIMER
  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  // TAB CHANGE DETECTION
  useEffect(() => {
    if (!quizStarted || submitted) return;

    const autoSubmitQuiz = async () => {
      // Prevent multiple submissions
      if (submitted) return;

      alert(
        "Tab switch or minimize detected!\nQuiz will be submitted automatically.",
      );

      await handleSubmit(true);
    };

    // Detect tab change
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        autoSubmitQuiz();
      }
    };

    // Detect window minimize or app switch
    const handleBlur = () => {
      autoSubmitQuiz();
    };

    // Detect Alt+Tab and Windows key
    const handleKeyDown = (e) => {
      if (
        e.key === "Meta" || // Windows key / Command key
        e.altKey || // ALT key
        (e.ctrlKey && e.key === "Tab")
      ) {
        autoSubmitQuiz();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    window.addEventListener("blur", handleBlur);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("blur", handleBlur);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [quizStarted, submitted]);
  // FORMAT TIMER
  const formatTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;

    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // SELECT ANSWER
  const handleAnswer = (id, option) => {
    if (!quizStarted) {
      setQuizStarted(true);
    }

    setAnswers({
      ...answers,
      [id]: option,
    });
  };

  // CALCULATE RESULT
  const calculateResult = () => {
    let correct = 0;

    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correct++;
      }
    });

    const totalQuestions = quizQuestions.length;

    const wrong = totalQuestions - correct;

    const percentage = ((correct / totalQuestions) * 100).toFixed(1);

    const result = percentage >= 40 ? "PASS" : "FAIL";

    return {
      correct,
      wrong,
      totalQuestions,
      percentage,
      result,
    };
  };

  // SUBMIT QUIZ
  const handleSubmit = async (autoSubmitted = false) => {
    // STOP MULTIPLE SUBMISSIONS
    if (submitted) return;

    // REQUIRED FIELD CHECK
    if (!studentName || !studentEmail || !studentPhone) {
      alert("Please fill all student details");
      return;
    }

    // IMMEDIATELY LOCK SUBMISSION
    setSubmitted(true);

    const resultInfo = calculateResult();

    setResultData(resultInfo);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxjxoxJl-TLof7q16qP2XhcEnCrUyOG1CqUXt9AaLEPJNz6kslnbi34E0qx84TAoEUO/exec",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: studentName,
            email: studentEmail,
            phone: studentPhone,

            score: resultInfo.correct,

            totalQuestions: resultInfo.totalQuestions,

            percentage: resultInfo.percentage,

            result: resultInfo.result,

            autoSubmitted,

            submittedAt: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          }),

          mode: "no-cors",
        },
      );

      console.log(
        autoSubmitted
          ? "Auto Submitted Successfully"
          : "Quiz Submitted Successfully",
      );
    } catch (error) {
      console.error("Submission error:", error);

      alert("Failed to submit quiz. Please try again.");
    }
  };
  // RESULT SCREEN
  if (submitted && resultData) {
    return (
      <div className="min-h-screen bg-[#f3f6fb] flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* TOP HEADER */}
          <div className="bg-[#0B1220] px-6 py-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-4">
              ✈️
            </div>

            <h1 className="text-3xl font-bold text-white">Quiz Result</h1>

            <p className="text-gray-300 mt-2">Aviation Assessment Report</p>
          </div>

          {/* RESULT CONTENT */}
          <div className="p-6 sm:p-10">
            {tabWarning && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-center font-semibold">
                {tabWarning}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 border rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">Student Name</p>

                <h3 className="font-semibold text-gray-900">{studentName}</h3>
              </div>

              <div className="bg-gray-50 border rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">Email Address</p>

                <h3 className="font-semibold text-gray-900 break-all">
                  {studentEmail}
                </h3>
              </div>

              <div className="bg-gray-50 border rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>

                <h3 className="font-semibold text-gray-900">{studentPhone}</h3>
              </div>

              <div className="bg-gray-50 border rounded-2xl p-5">
                <p className="text-sm text-gray-500 mb-1">Final Result</p>

                <h3
                  className={`font-bold text-xl ${
                    resultData.result === "PASS"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {resultData.result}
                </h3>
              </div>
            </div>

            {/* SCORE CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-500">Correct</p>

                <h2 className="text-2xl font-bold text-blue-600 mt-1">
                  {resultData.correct}
                </h2>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-500">Wrong</p>

                <h2 className="text-2xl font-bold text-red-600 mt-1">
                  {resultData.wrong}
                </h2>
              </div>

              <div className="bg-gray-50 border rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-500">Total</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  {resultData.totalQuestions}
                </h2>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-500">Percentage</p>

                <h2 className="text-2xl font-bold text-green-600 mt-1">
                  {resultData.percentage}%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // QUIZ PAGE
  return (
    <div className="min-h-screen bg-[#f3f6fb]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
              ✈️
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Aviation Quiz
              </h1>

              <p className="text-sm text-gray-500">Online Assessment Test</p>
            </div>
          </div>

          {/* TIMER */}
          <div className="bg-red-50 border border-red-100 px-5 py-3 rounded-xl">
            <p className="text-xs text-red-500 font-medium">Time Remaining</p>

            <h2 className="text-xl font-bold text-red-600">⏱ {formatTime()}</h2>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* WARNING MESSAGE */}
        <div className="mb-6 bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-2xl text-center font-medium">
          ⚠️ Do not switch tabs or minimize the browser during the quiz. If tab
          change is detected, quiz will be submitted automatically.
        </div>

        {/* STUDENT DETAILS */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5 sm:p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Student Details
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* NAME */}
            <div>
              <label className="text-sm font-medium text-gray-600 block mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-600 block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium text-gray-600 block mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* QUESTIONS */}
        <div className="space-y-6">
          {quizQuestions.map((q, index) => (
            <div
              key={q.id}
              className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm"
            >
              {/* QUESTION */}
              <div className="flex items-start gap-4 mb-6">
                <div className="min-w-[45px] h-[45px] rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h2 className="text-lg font-semibold text-gray-900 leading-relaxed">
                  {q.question}
                </h2>
              </div>

              {/* OPTIONS */}
              <div className="space-y-3">
                {q.options.map((option, i) => (
                  <label
                    key={i}
                    className={`flex items-center gap-4 border rounded-2xl p-4 cursor-pointer transition-all duration-200 ${
                      answers[q.id] === option
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      checked={answers[q.id] === option}
                      onChange={() => handleAnswer(q.id, option)}
                      className="w-5 h-5 accent-blue-600"
                    />

                    <span className="text-gray-800 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={() => handleSubmit(false)}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}
