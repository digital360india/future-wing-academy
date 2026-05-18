import Image from "next/image";

export default function CPSSInfo() {
  return (
    <div className="py-12 px-6 md:px-6">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Computerised Pilot Selection System (CPSS)
        </h1>

        <p className="text-sm leading-relaxed mb-4">
          <span className="font-semibold">
            The Computerised Pilot Selection System (CPSS)
          </span>{" "}
          is an advanced screening tool designed to assess the psychomotor
          skills and cognitive abilities of aspiring pilots across the Indian
          Air Force (IAF), Army, Navy, and Coast Guard. Developed together by
          the Defence Institute of Psychological Research and the Air Defence
          Establishment—both premier organizations under DRDO—CPSS replaces the
          older{" "}
          <span className="font-semibold">
            Pilot Aptitude Battery Test (PABT)
          </span>
          , a British-era selection procedure.
        </p>

        <p className="text-sm leading-relaxed mb-8">
          Engineered to address the changing needs of contemporary aircraft,
          CPSS ensures a scientific, data-based analysis of applicants, ensuring
          selection standards are in line with other top international air
          forces. Tested by flying branch officers from the Flying Branch, this
          state-of-the-art system allows for intensive and accurate examination
          of aspiring pilots, enhancing Indian defence capabilities.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-4">
          CPSS: An Once-in-Lifetime
        </h2>

        <p className="text-sm leading-relaxed font-semibold mb-4">
          The Computerised Pilot Selection System, is a once in lifetime
          opportunity for aspiring pilots in SSB. Candidates get only one
          attempt to clear the CPSS test.
        </p>

        <ul className="list-disc pl-5 text-sm space-y-2 mb-10">
          <li>
            If a candidate is not able to pass the CPSS test, they will not be
            eligible to apply for any flying branch in the Air Force, Army,
            Navy, or Coast Guard in the future.
          </li>
          <li>
            If a candidate passes CPSS but does not make it to the final merit
            list, they will still be considered CPSS-qualified for future
            attempts at selection. This strict selection process ensures that
            only the most competent and skilled candidates move forward in their
            journey to becoming military pilots.
          </li>
        </ul>

        <div className="w-full  py-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6">
            <div className="w-full max-w-2xl border border-gray-500 bg-white">
              <div className="h-24 flex items-center justify-center border-b border-gray-400 text-[13px] font-semibold text-gray-800">
                CPSS TESTING
              </div>

              <div className="h-24 flex items-center justify-center border-b border-gray-400 text-[13px] text-gray-700">
                CPSS has 2 levels of testing
              </div>

              <div className="h-24 flex items-center justify-center border-b border-gray-400 text-[13px] text-gray-700">
                1. Cognitive Ability Test
              </div>

              <div className="h-24 flex items-center justify-center text-[13px] text-gray-700">
                2. Psychomotor Test
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/cpsspilottraning.png"
                alt="Pilot Banner"
                width={420}
                height={420}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
