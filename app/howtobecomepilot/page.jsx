"use client";

import Image from "next/image";

export default function BecomePilotPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <h1 className="text-[28px] md:text-[36px] font-bold text-[#4a4a4a] leading-tight">
          Your Complete Guide to Becoming a Pilot After 12th Grade
        </h1>

        <p className="mt-5 text-[15px] leading-8 text-[#444] max-w-6xl">
          Have you always looked up at the sky and imagined yourself in the
          cockpit? You're not alone and the good news is, that dream is
          completely achievable. Whether you just finished your 12th exams or
          you're still planning ahead, this guide covers everything you need to
          know about building a career as a professional pilot. From eligibility
          and medical checks to flight training and landing your first airline
          job, we&apos;ve laid it all out in a clear, step-by-step format so you
          know exactly what to expect. Let&apos;s get started.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-14 items-start">
          <div className="bg-[#dfeaf1] p-8 md:p-6">
            <h2 className="text-[36px] font-normal text-[#4c4c4c] mb-8">
              Table of content
            </h2>

            <div className="space-y-2 text-[17px] text-[#222]">
              <p>Step 1: Check Your Eligibility</p>
              <p>Step 2: Complete Your Medical Certifications</p>
              <p>Step 3: Find the Right CPL Ground School</p>
              <p>Step 4: Select a Flying School</p>
              <p>Step 5: Clear Your Ground School Subjects</p>
              <p>Step 6: Complete Your Flight Training Hours</p>
              <p>Step 7: Get Licensed to Communicate</p>
              <p>Step 8: Clear the CPL Skill Test</p>
              <p>Step 9: Apply for Your Commercial Pilot License</p>
              <p>Step 10: Start Your Career as a Pilot</p>
              <p>Bonus Tips for the Journey Ahead</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/becomepilot.png"
              alt="Pilot Banner"
              width={450}
              height={520}
              className="w-full max-w-112.5  shadow-lg"
            />
          </div>
        </div>

        <section className="mt-6">
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">
            Step 1: Check Your Eligibility
          </h2>

          <div className="space-y-2 text-[16px] leading-8 text-[#222]">
            <p>
              Before anything else, confirm that you meet the basic
              requirements. Here's what you'll need:
            </p>

            <div>
              <p className="font-bold">Age:</p>
              <p>
                You must be at least 17 years old to begin pilot training. If
                you're younger, use that time wisely prepare yourself
                academically and physically.
              </p>
            </div>

            <div>
              <p className="font-bold">Education:</p>

              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  A pass in 12th standard with Physics and Mathematics is
                  essential.
                </li>

                <li>
                  If you didn't study these subjects in school, you can still
                  complete them through the{" "}
                  <b>National Institute of Open Schooling (NIOS)</b>.
                </li>

                <li>
                  Aim for a minimum of 50% marks, though many airlines prefer
                  60% or above.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold">Language:</p>

              <p>
                English proficiency is non-negotiable. It's the universal
                language of aviation, used by pilots and air traffic controllers
                worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-8">
            Step 2: Complete Your Medical Certifications
          </h2>

          <div className="space-y-2 text-[16px] leading-8 text-[#222]">
            <p>
              Just as aircraft undergo routine maintenance checks before every
              flight, pilots must also demonstrate that they are physically fit
              to fly. There are two medical certificates you'll need:
            </p>

            <div>
              <h3 className="font-bold text-[20px] mb-3">
                Class 2 Medical Certificate:
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  This is the starting point — consider it your entry-level
                  fitness clearance before training begins.
                </li>

                <li>
                  It can be obtained through doctors certified by the{" "}
                  <b>DGCA (Directorate General of Civil Aviation)</b>.
                </li>

                <li>
                  Upon completion, you'll receive a certificate called CA-35.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[20px] mb-3">
                Class 1 Medical Certificate:
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  This is a more thorough examination and is strongly
                  recommended before you begin flight training.
                </li>

                <li>
                  It is also a mandatory requirement for obtaining your
                  Commercial Pilot License.
                </li>

                <li>
                  This examination is only conducted at select locations in
                  India.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">
            Step 3: Find the Right CPL Ground School in India
          </h2>

          <div className="space-y-2 text-[16px] leading-8 text-[#222]">
            <p>
              Research and shortlist institutes offering CPL ground classes in
              India, then enrol with the one that best suits your needs.
            </p>

            <div className="space-y-2">
              <p>
                <b>Air Navigation</b> – how pilots determine position and plan
                routes
              </p>

              <p>
                <b>Aviation Meteorology</b> – interpreting and responding to
                weather conditions
              </p>

              <p>
                <b>Air Regulations</b> – the rules and laws governing aviation
              </p>

              <p>
                <b>Aircraft Technical Knowledge</b> – understanding how aircraft
                are built and how they fly
              </p>

              <p>
                <b>Technical General</b>
              </p>

              <p>
                <b>Technical Specific</b>
              </p>

              <p>
                <b>Radio Telephony Restricted (RTR)</b> – the communication
                system used between pilots, air traffic control, and ground
                stations
              </p>
            </div>
            <p>
              None of this should intimidate you. All of it will be covered
              thoroughly in a proper ground school program.
            </p>

            {/* INFO BOX */}
            <div className="mt-10 border border-sky-300 bg-sky-50 p-5 rounded-sm">
              <p className="text-sky-700 leading-7">
                <span className="font-bold">Important:</span> Be aware that no
                CPL ground school in India is officially "DGCA approved" or
                "Government approved."
              </p>
            </div>
          </div>
        </section>

        {/* STEP 4 */}
        <section className="mt-8">
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">
            Step 4: Select a Flying School
          </h2>

          <div className="space-y-2 text-[16px] leading-8 text-[#222]">
            <p>
              Choosing a flying school deserves just as much thought as choosing
              a college. The right environment can make a significant difference
              in the quality of your training. Here's what to evaluate:
            </p>

            <div className="space-y-2">
              <p>
                <b>Training quality:</b> Speak to current students, not just the
                admissions team.
              </p>

              <p>
                <b>Aircraft fleet: </b> A diverse and well-maintained fleet
                gives you broader exposure and better preparation.
              </p>

              <p>
                <b>Aircraft condition:</b> Pay close attention to the overall
                maintenance and airworthiness of their planes.
              </p>

              <p>
                <b>Student-to-instructor ratio:</b> Fewer students per
                instructor generally means more personalised attention.
              </p>

              <p>
                <b>Weather and geography:</b> The school's location matters —
                consistent flying weather means fewer training disruptions.
              </p>

              <p>
                <b>Cost versus quality:</b> Pilot training is a significant
                financial investment. Compare options carefully, weighing cost
                against the overall quality of the program
              </p>
            </div>
          </div>
        </section>
        {/* STEP 5 */}
        <section className="mt-10">
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">
            Step 5: Clear Your Ground School Subjects
          </h2>

          <div className="space-y-2 text-[16px] leading-8 text-[#222]">
            <p>
              Before a single flight, you need to build a strong theoretical
              foundation. Ground school covers the following subjects:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b>Air Regulations</b>
              </li>

              <li>
                <b>Aviation Meteorology</b>
              </li>

              <li>
                <b>Technical General (Aircraft, Systems and Engines)</b>
              </li>

              <li>
                <b>
                  Technical Specific (focused on a particular aircraft category)
                </b>
              </li>

              <li>
                <b>Air Navigation</b>
              </li>

              <li>
                <b>Radio Telephony (pilot-to-ATC communication protocols)</b>
              </li>
            </ul>

            <div className="pt-4">
              <p className="font-bold">Clear the DGCA Theory Exams:</p>

              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  These exams are held multiple times throughout the year.
                </li>

                <li>
                  The format is multiple-choice, similar to board examinations.
                </li>

                <li>
                  Study with genuine understanding, not just to score marks. In
                  aviation, the reasoning
                </li>

                <li>
                  behind your answers matters far more than getting them right
                  by chance. These exams
                </li>

                <li>
                  assess whether you&apos;re truly ready to operate safely in the
                  air.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">
            Step 6: Complete Your Flight Training Hours
          </h2>

          <div className="space-y-2 text-[16px] leading-8 text-[#222]">
            <p>
              This is where things get real — you&apos;ll finally be in the cockpit,
              logging actual flying hours. The DGCA mandates a minimum of 200
              hours of total flight time to qualify for a{" "}
              <b>Commercial Pilot License (CPL).</b> Here&apos;s the breakdown:
            </p>

            <div className="space-y-1 pt-2">
              <p>
                <b>Pilot-in-Command (PIC):</b> A minimum of 100 hours as the
                sole pilot in command
              </p>

              <p>
                <b>Cross-Country Flying:</b> At least 50 hours of cross-country
                flight time as PIC, which must include one flight covering at
                least 300 nautical miles with landings at two separate airports.
              </p>

              <p>
                <b>Night Flying:</b> A minimum of 5 hours of night flight time
                as PIC, including at least 10 takeoffs and 10 landings after
                dark.
              </p>

              <p>
                <b>Instrument Flying:</b> At least 20 hours of flying under
                instrument conditions.
              </p>

              <p>
                <b>Simulator Training:</b> A minimum of 20 hours in an approved
                flight simulator.
              </p>
            </div>
          </div>
        </section>
        <div className="space-y-12">
        
        <div>
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3 mt-4">Step 7: Get Licensed to Communicate</h2>
          <p className="text-gray-700 mb-6">
            Pilots communicate through highly standardised radio procedures. It's a language of its own, 
            and you'll need to prove you've mastered it.
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>Pass the Radio Telephony Restricted (RTR) examination.</li>
            <li>Then clear the DGCA-administered exam to obtain your Flight Radio Telephone Operator's License (FRTOL).</li>
          </ul>
          
          <p className="text-gray-700">
            These licenses confirm that you can communicate accurately and professionally while operating an 
            aircraft — an ability that is critical to flight safety.
          </p>
        </div>

        <div>
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3 mt-2">Step 8: Clear the CPL Skill Test</h2>
          <p className="text-gray-700">
            Now it's time to demonstrate everything you've learned in the air. A DGCA-approved flight examiner 
            will accompany you on a test flight to assess your flying ability across a range of scenarios — 
            including standard operations, navigation, and emergency handling procedures. Think of it as the 
            equivalent of a driving test, but at 10,000 feet.
          </p>
        </div>

        <div>
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">Step 9: Apply for Your Commercial Pilot License</h2>
          <p className="text-gray-700 mb-6">
            You've done the hard work. Now it's time to make it official. Here's what you'll need to submit to the DGCA:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>Completed application form</li>
            <li>Class 1 Medical Certificate</li>
            <li>Proof of passing all required DGCA theory examinations</li>
            <li>Your pilot logbook showing all accumulated flight hours</li>
            <li>Skill test reports from your examiners</li>
            <li>Your FRTOL</li>
          </ul>
          
          <p className="text-gray-700">
            Submit the complete set of documents to the DGCA and allow time for processing. Once approved, 
            you'll receive your Commercial Pilot License — the credential that opens the door to a professional 
            flying career.
          </p>
        </div>

        <div>
          <h2 className="text-[34px] font-normal text-[#4a4a4a] mb-3">Step 10: Start Your Career as a Pilot</h2>
          <p className="text-gray-700 mb-6">
            With your CPL in hand, you're ready to enter the job market. Here's how to approach it:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Monitor job listings across domestic and international airlines regularly.</li>
            <li>Prepare thoroughly for airline entrance exams and interviews — each carrier runs its own selection process.</li>
            <li>If selected, you'll likely undergo Type Rating training, which qualifies you to fly the specific aircraft model operated by that airline.</li>
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-4">
      <h1 className="text-[34px] font-normal text-[#4a4a4a] mb-3">
        Bonus Tips for the Journey Ahead
      </h1>

      <ul className="space-y-6 text-gray-700 text-[17px] leading-relaxed">
        <li className="flex gap-3">
          <span className="text-2xl leading-none text-gray-900">•</span>
          <span>
            <strong>Start saving early.</strong> Pilot training is one of the most expensive professional programs you can undertake. Financial planning from the outset makes a real difference.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-2xl leading-none text-gray-900">•</span>
          <span>
            <strong>Explore loan options.</strong> Many banks offer education loans tailored for aviation training if you need financial support.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-2xl leading-none text-gray-900">•</span>
          <span>
            <strong>Learn with depth, not shortcuts.</strong> Some institutes — often heavily promoted through social media — focus on helping students pass exams rather than building genuine understanding. This approach may get you through tests but will leave you underprepared for actual employment. Don't fall into that trap. Your career depends on your real competence, not your exam score.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-2xl leading-none text-gray-900">•</span>
          <span>
            <strong>Prioritise your health.</strong> Pilots are required to pass regular medical examinations throughout their careers. Staying physically fit is part of the job.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-2xl leading-none text-gray-900">•</span>
          <span>
            <strong>Stay current.</strong> Aviation evolves quickly. Keep up with industry developments, regulatory changes, and new technologies.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-2xl leading-none text-gray-900">•</span>
          <span>
            <strong>Build your network.</strong> Connections with fellow pilots, instructors, and aviation professionals can open doors and offer guidance at every stage of your career.
          </span>
        </li>
      </ul>
    </div>
      </section>
    </main>
  );
}
