"use client";

import Image from "next/image";

const steps = [
  "Check Your Eligibility",
  "Complete Your Medical Certifications",
  "Find the Right CPL Ground School",
  "Select a Flying School",
  "Clear Your Ground School Subjects",
  "Complete Your Flight Training Hours",
  "Get Licensed to Communicate",
  "Clear the CPL Skill Test",
  "Apply for Your Commercial Pilot License",
  "Start Your Career as a Pilot",
  "Bonus Tips for the Journey Ahead",
];

export default function BecomePilotPage() {
  return (
    <main className="w-full bg-[#f5f3ee] min-h-screen font-serif">
      {/* ── HERO BANNER ── */}
      <div className="relative bg-[#173158] overflow-hidden">
        {/* decorative diagonal stripe */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="uppercase tracking-[0.25em] text-[#c9a84c] text-xs md:text-[16px] font-serif mb-4">
            Your complete guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-4xl">
            Becoming a Pilot
            <br />
            <span className="text-[#c9a84c]">After 12th Grade</span>
          </h1>
          <div className="mt-6 w-16 h-[3px] bg-[#c9a84c]" />
          <p className="mt-6 text-base md:text-lg leading-8 text-white max-w-3xl font-serif">
            Have you always looked up at the sky and imagined yourself in the
            cockpit? You're not alone — and the good news is, that dream is
            completely achievable. Whether you just finished your 12th exams or
            you're still planning ahead, this guide covers everything you need
            to know about building a career as a professional pilot. From
            eligibility and medical checks to flight training and landing your
            first airline job, we've laid it all out in a clear, step-by-step
            format.
          </p>
        </div>
      </div>

      {/* ── TABLE OF CONTENTS + IMAGE ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* TOC Card */}
          <div className="bg-white border border-[#d6cfc4] shadow-sm">
            <div className="bg-[#173158] px-8 py-5">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide font-serif">
                Table of Contents
              </h2>
            </div>
            <div className="px-8 py-6 space-y-0 font-serif">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-[#ece7de] last:border-0 group cursor-pointer"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#173158] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
                    {i + 1 <= 10 ? i + 1 : "★"}
                  </span>
                  <span className="text-[#2c2c2c] text-[16px] md:text-[15px] group-hover:text-[#c9a84c] transition-colors duration-200">
                    {i < 10 ? `Step ${i + 1}: ${step}` : step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#c9a84c] z-0" />
            <div className="relative z-10">
              <Image
                src="/becomepilot.png"
                alt="Pilot Banner"
                width={560}
                height={620}
                className="w-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 space-y-0 font-serif">
        {/* Step 1 */}
        <StepSection number={1} title="Check Your Eligibility">
          <p className="text-[#444] leading-8">
            Before anything else, confirm that you meet the basic requirements.
            Here's what you'll need:
          </p>
          <InfoBlock label="Age">
            You must be at least <strong>17 years old</strong> to begin pilot
            training. If you're younger, use that time wisely — prepare yourself
            academically and physically.
          </InfoBlock>
          <InfoBlock label="Education">
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                A pass in 12th standard with{" "}
                <strong>Physics and Mathematics</strong> is essential.
              </li>
              <li>
                If you didn't study these subjects in school, you can still
                complete them through the{" "}
                <strong>National Institute of Open Schooling (NIOS)</strong>.
              </li>
              <li>
                Aim for a minimum of <strong>50% marks</strong>, though many
                airlines prefer 60% or above.
              </li>
            </ul>
          </InfoBlock>
          <InfoBlock label="Language">
            English proficiency is non-negotiable. It's the universal language
            of aviation, used by pilots and air traffic controllers worldwide.
          </InfoBlock>
        </StepSection>

        {/* Step 2 */}
        <StepSection number={2} title="Complete Your Medical Certifications">
          <p className="text-[#444] leading-8">
            Just as aircraft undergo routine maintenance checks before every
            flight, pilots must also demonstrate that they are physically fit to
            fly. There are two medical certificates you'll need:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <MedCard title="Class 2 Medical Certificate">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Your entry-level fitness clearance before training begins.
                </li>
                <li>
                  Obtained through doctors certified by the{" "}
                  <strong>DGCA (Directorate General of Civil Aviation)</strong>.
                </li>
                <li>
                  Upon completion, you'll receive a certificate called{" "}
                  <strong>CA-35</strong>.
                </li>
              </ul>
            </MedCard>
            <MedCard title="Class 1 Medical Certificate">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  A more thorough examination — strongly recommended before you
                  begin flight training.
                </li>
                <li>
                  A <strong>mandatory requirement</strong> for obtaining your
                  Commercial Pilot License.
                </li>
                <li>Conducted only at select locations in India.</li>
              </ul>
            </MedCard>
          </div>
        </StepSection>

        {/* Step 3 */}
        <StepSection
          number={3}
          title="Find the Right CPL Ground School in India"
        >
          <p className="text-[#444] leading-8">
            Research and shortlist institutes offering CPL ground classes in
            India, then enrol with the one that best suits your needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {[
              [
                "Air Navigation",
                "How pilots determine position and plan routes",
              ],
              [
                "Aviation Meteorology",
                "Interpreting and responding to weather conditions",
              ],
              ["Air Regulations", "The rules and laws governing aviation"],
              [
                "Aircraft Technical Knowledge",
                "Understanding how aircraft are built and how they fly",
              ],
              ["Technical General", "Broad technical systems knowledge"],
              [
                "Technical Specific",
                "Focused study on a specific aircraft category",
              ],
              [
                "Radio Telephony Restricted (RTR)",
                "Communication between pilots, ATC, and ground stations",
              ],
            ].map(([subject, desc]) => (
              <div
                key={subject}
                className="bg-white border border-[#d6cfc4] p-4 flex gap-3 items-start"
              >
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#c9a84c]" />
                <div>
                  <p className="font-bold text-[#173158] text-[16px] font-serif">
                    {subject}
                  </p>
                  <p className="text-[#666] text-[16px] mt-0.5 font-serif">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#444] leading-8 mt-4">
            None of this should intimidate you. All of it will be covered
            thoroughly in a proper ground school program.
          </p>
          <div className="mt-6 border-l-4 border-[#c9a84c] bg-[#fdf8ec] px-6 py-4">
            <p className="text-[#7a5c1e] font-serif text-[16px] leading-7">
              <span className="font-bold">Important:</span> Be aware that no CPL
              ground school in India is officially "DGCA approved" or
              "Government approved."
            </p>
          </div>
        </StepSection>

        {/* Step 4 */}
        <StepSection number={4} title="Select a Flying School">
          <p className="text-[#444] leading-8">
            Choosing a flying school deserves just as much thought as choosing a
            college. The right environment can make a significant difference in
            the quality of your training. Here's what to evaluate:
          </p>
          <div className="mt-4 space-y-3">
            {[
              [
                "Training quality",
                "Speak to current students, not just the admissions team.",
              ],
              [
                "Aircraft fleet",
                "A diverse and well-maintained fleet gives you broader exposure and better preparation.",
              ],
              [
                "Aircraft condition",
                "Pay close attention to the overall maintenance and airworthiness of their planes.",
              ],
              [
                "Student-to-instructor ratio",
                "Fewer students per instructor generally means more personalised attention.",
              ],
              [
                "Weather and geography",
                "The school's location matters — consistent flying weather means fewer training disruptions.",
              ],
              [
                "Cost versus quality",
                "Pilot training is a significant financial investment. Compare options carefully, weighing cost against the overall quality of the program.",
              ],
            ].map(([label, desc]) => (
              <div
                key={label}
                className="flex gap-4 bg-white border border-[#e2dbd0] p-4 items-start"
              >
                <span className="mt-1 w-2 h-2 flex-shrink-0 rounded-full bg-[#173158]" />
                <p className="text-[#333] font-serif text-[16px] leading-7">
                  <strong className="text-[#173158]">{label}:</strong> {desc}
                </p>
              </div>
            ))}
          </div>
        </StepSection>

        {/* Step 5 */}
        <StepSection number={5} title="Clear Your Ground School Subjects">
          <p className="text-[#444] leading-8">
            Before a single flight, you need to build a strong theoretical
            foundation. Ground school covers the following subjects:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-[#333] font-serif">
            {[
              "Air Regulations",
              "Aviation Meteorology",
              "Technical General (Aircraft, Systems and Engines)",
              "Technical Specific (focused on a particular aircraft category)",
              "Air Navigation",
              "Radio Telephony (pilot-to-ATC communication protocols)",
            ].map((s) => (
              <li key={s}>
                <strong>{s}</strong>
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-[#173158] text-white px-6 py-5">
            <p className="font-bold font-serif text-[#c9a84c] mb-2">
              Clear the DGCA Theory Exams:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[16px] font-serif text-[#b0bac8] leading-7">
              <li>These exams are held multiple times throughout the year.</li>
              <li>
                The format is multiple-choice, similar to board examinations.
              </li>
              <li>
                Study with genuine understanding, not just to score marks. In
                aviation, the reasoning behind your answers matters far more
                than getting them right by chance. These exams assess whether
                you're truly ready to operate safely in the air.
              </li>
            </ul>
          </div>
        </StepSection>

        {/* Step 6 */}
        <StepSection number={6} title="Complete Your Flight Training Hours">
          <p className="text-[#444] leading-8">
            This is where things get real — you'll finally be in the cockpit,
            logging actual flying hours. The DGCA mandates a minimum of{" "}
            <strong>200 hours of total flight time</strong> to qualify for a{" "}
            <strong>Commercial Pilot License (CPL).</strong>
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [
                "100 hrs",
                "Pilot-in-Command (PIC)",
                "A minimum of 100 hours as the sole pilot in command.",
              ],
              [
                "50 hrs",
                "Cross-Country Flying",
                "At least 50 hours of cross-country flight time as PIC, including one 300 NM flight with two separate airports.",
              ],
              [
                "5 hrs",
                "Night Flying",
                "Minimum 5 hours of night flight as PIC, with at least 10 takeoffs and 10 landings after dark.",
              ],
              [
                "20 hrs",
                "Instrument Flying",
                "At least 20 hours of flying under instrument conditions.",
              ],
              [
                "20 hrs",
                "Simulator Training",
                "A minimum of 20 hours in an approved flight simulator.",
              ],
            ].map(([hrs, title, desc]) => (
              <div
                key={title}
                className="bg-white border border-[#d6cfc4] p-5 flex flex-col"
              >
                <span className="text-3xl font-bold text-[#c9a84c] font-serif">
                  {hrs}
                </span>
                <span className="font-bold text-[#173158] text-[16px] mt-1 font-serif">
                  {title}
                </span>
                <p className="text-[#666] text-[16px] mt-2 font-serif leading-6">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </StepSection>

        {/* Step 7 */}
        <StepSection number={7} title="Get Licensed to Communicate">
          <p className="text-[#444] leading-8">
            Pilots communicate through highly standardised radio procedures.
            It's a language of its own, and you'll need to prove you've mastered
            it.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-[#333] font-serif leading-8">
            <li>
              Pass the <strong>Radio Telephony Restricted (RTR)</strong>{" "}
              examination.
            </li>
            <li>
              Then clear the DGCA-administered exam to obtain your{" "}
              <strong>Flight Radio Telephone Operator's License (FRTOL)</strong>
              .
            </li>
          </ul>
          <p className="text-[#444] leading-8 mt-3">
            These licenses confirm that you can communicate accurately and
            professionally while operating an aircraft — an ability that is
            critical to flight safety.
          </p>
        </StepSection>

        {/* Step 8 */}
        <StepSection number={8} title="Clear the CPL Skill Test">
          <p className="text-[#444] leading-8">
            Now it's time to demonstrate everything you've learned in the air. A
            DGCA-approved flight examiner will accompany you on a test flight to
            assess your flying ability across a range of scenarios — including
            standard operations, navigation, and emergency handling procedures.
            Think of it as the equivalent of a driving test, but at 10,000 feet.
          </p>
        </StepSection>

        {/* Step 9 */}
        <StepSection number={9} title="Apply for Your Commercial Pilot License">
          <p className="text-[#444] leading-8">
            You've done the hard work. Now it's time to make it official. Here's
            what you'll need to submit to the DGCA:
          </p>
          <ul className="mt-4 space-y-2 font-serif">
            {[
              "Completed application form",
              "Class 1 Medical Certificate",
              "Proof of passing all required DGCA theory examinations",
              "Your pilot logbook showing all accumulated flight hours",
              "Skill test reports from your examiners",
              "Your FRTOL",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#333] text-[16px] leading-7"
              >
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#444] leading-8 mt-4">
            Submit the complete set of documents to the DGCA and allow time for
            processing. Once approved, you'll receive your Commercial Pilot
            License — the credential that opens the door to a professional
            flying career.
          </p>
        </StepSection>

        {/* Step 10 */}
        <StepSection number={10} title="Start Your Career as a Pilot">
          <p className="text-[#444] leading-8">
            With your CPL in hand, you're ready to enter the job market. Here's
            how to approach it:
          </p>
          <ul className="mt-4 space-y-2 font-serif">
            {[
              "Monitor job listings across domestic and international airlines regularly.",
              "Prepare thoroughly for airline entrance exams and interviews — each carrier runs its own selection process.",
              "If selected, you'll likely undergo Type Rating training, which qualifies you to fly the specific aircraft model operated by that airline.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#333] text-[16px] leading-7"
              >
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {item}
              </li>
            ))}
          </ul>
        </StepSection>

        {/* BONUS */}
        <section className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold font-serif text-lg">
              ★
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#173158]">
              Bonus Tips for the Journey Ahead
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              [
                "Start saving early",
                "Pilot training is one of the most expensive professional programs you can undertake. Financial planning from the outset makes a real difference.",
              ],
              [
                "Explore loan options",
                "Many banks offer education loans tailored for aviation training if you need financial support.",
              ],
              [
                "Learn with depth, not shortcuts",
                "Some institutes focus on helping students pass exams rather than building genuine understanding. Your career depends on your real competence, not your exam score.",
              ],
              [
                "Prioritise your health",
                "Pilots are required to pass regular medical examinations throughout their careers. Staying physically fit is part of the job.",
              ],
              [
                "Stay current",
                "Aviation evolves quickly. Keep up with industry developments, regulatory changes, and new technologies.",
              ],
              [
                "Build your network",
                "Connections with fellow pilots, instructors, and aviation professionals can open doors and offer guidance at every stage of your career.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white border border-[#d6cfc4] p-6 hover:border-[#c9a84c] hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-[3px] bg-[#c9a84c] mb-4" />
                <p className="font-bold text-[#173158] text-[16px] font-serif mb-2">
                  {title}
                </p>
                <p className="text-[#666] text-[16px] font-serif leading-6">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function StepSection({ number, title, children }) {
  return (
    <section className="py-10 border-b border-[#d6cfc4] last:border-0 font-serif">
      <div className="flex items-start gap-5 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-[#173158] flex items-center justify-center">
          <span className="text-white font-bold font-serif text-lg">
            {number}
          </span>
        </div>
        <h2 className="text-2xl  font-bold text-[#173158] leading-tight">
          Step {number}: {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-17 space-y-4 text-[16px] leading-8 text-[#333]">
        {children}
      </div>
    </section>
  );
}

function InfoBlock({ label, children }) {
  return (
    <div className="bg-white border border-[#d6cfc4] p-5 mt-3">
      <p className="font-bold text-[#173158] font-serif text-[16px] uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="text-[#444] font-serif text-[16px] leading-7">
        {children}
      </div>
    </div>
  );
}

function MedCard({ title, children }) {
  return (
    <div className="border border-[#d6cfc4] bg-white p-6 font-serif">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-[#c9a84c]" />
        <h3 className="font-bold text-[#173158] font-serif">{title}</h3>
      </div>
      <div className="text-[#555] font-serif text-[16px] leading-7">
        {children}
      </div>
    </div>
  );
}
