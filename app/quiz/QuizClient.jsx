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

  // FORMAT TIMER
  const formatTime = () => {
    const min = Math.floor(timeLeft / 60);

    const sec = timeLeft % 60;

    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // SELECT ANSWER
  const handleAnswer = (id, option) => {
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
// SUBMIT QUIZ
const handleSubmit = async () => {
  if (submitted) return;

  if (!studentName || !studentEmail || !studentPhone) {
    alert("Please fill all student details");
    return;
  }

  const resultInfo = calculateResult();

  setSubmitted(true);
  setResultData(resultInfo);

  try {
    const response = await fetch(
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
          submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
        mode: "no-cors"   // ← This helps bypass CORS during development
      }
    );

    // Note: With no-cors, you won't get response data, but it should still submit
    console.log("Quiz submitted successfully!");

  } catch (error) {
    console.error("Submission error:", error);
    alert("Failed to submit quiz. Please check your internet and try again.");
  }
};
  // RESULT SCREEN
  if (submitted && resultData) {
    return (
      <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-8">Quiz Result</h1>

          <div className="space-y-4 text-lg">
            <p>
              <span className="font-bold">Student Name:</span> {studentName}
            </p>

            <p>
              <span className="font-bold">Email:</span> {studentEmail}
            </p>

            <p>
              <span className="font-bold">Phone:</span> {studentPhone}
            </p>

            <p>
              <span className="font-bold">Correct Answers:</span>{" "}
              {resultData.correct}
            </p>

            <p>
              <span className="font-bold">Wrong Answers:</span>{" "}
              {resultData.wrong}
            </p>

            <p>
              <span className="font-bold">Score:</span> {resultData.correct}/
              {resultData.totalQuestions}
            </p>

            <p>
              <span className="font-bold">Percentage:</span>{" "}
              {resultData.percentage}%
            </p>

            <p
              className={`text-3xl font-bold ${
                resultData.result === "PASS" ? "text-green-600" : "text-red-600"
              }`}
            >
              {resultData.result}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // QUIZ PAGE
  return (
    <div className="min-h-screen bg-[#f4f7fb] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Aviation Quiz</h1>

          <div className="bg-red-100 text-red-600 px-6 py-3 rounded-xl font-bold text-lg">
            Time Left: {formatTime()}
          </div>
        </div>

        {/* STUDENT DETAILS */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* NAME */}
          <input
            type="text"
            placeholder="Enter Your Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full border p-4 rounded-xl outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Your Email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            className="w-full border p-4 rounded-xl outline-none"
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
            className="w-full border p-4 rounded-xl outline-none"
          />
        </div>

        {/* QUESTIONS */}
        <div className="space-y-8">
          {quizQuestions.map((q, index) => (
            <div key={q.id} className="border rounded-2xl p-5">
              <h2 className="font-bold text-lg mb-4">
                {index + 1}. {q.question}
              </h2>

              <div className="space-y-3">
                {q.options.map((option, i) => (
                  <label
                    key={i}
                    className={`flex items-center gap-3 border p-4 rounded-xl cursor-pointer transition ${
                      answers[q.id] === option
                        ? "bg-blue-50 border-blue-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      checked={answers[q.id] === option}
                      onChange={() => handleAnswer(q.id, option)}
                    />

                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}
