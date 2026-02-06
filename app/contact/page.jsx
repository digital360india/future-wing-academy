import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-[24px] lg:text-4xl font-medium text-gray-900 leading-tight">
              We are ready to <br />
              assist you,
              <span className="text-[#183961] font-bold"> Just Ask!</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-md text-[18px]">
              Have questions about our academic courses? We&apos;re here to
              assist you. Reach out through any of the channels.
            </p>

            <div className="mt-12  grid  grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-semibold text-[#163660]">
                  Office training centre
                </h4>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Ground Floor, Digital 360, B-36, <br />
                  Nehru Colony, Dalanwala, <br />
                  Dehradun, Uttarakhand
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#163660]">
                  Phone no.
                </h4>
                <p className="mt-3 text-sm text-gray-600">+91-7843257762</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full mx-auto md:h-[80vh] bg-white rounded-xl shadow-xl px-8 py-10">
              <h3 className="md:text-[32px] text-[22px] font-bold text-gray-900">
                Where Dreams Take Flight
              </h3>

              <p className="mt-2 text-[18px] text-gray-500">
                Train and develop future pilots and aviation leaders with us
              </p>

              <form className="mt-8 space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone no."
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="w-fit bg-sky-500 text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-blue-700 transition"
                >
                  Submit My Request
                </button>
              </form>
            </div>

            <div className="absolute -bottom-6 right-0 hidden lg:block">
              <div className="relative w-50 h-50">
                <Image
                  src="/contactimg.png"
                  alt="Customer support illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
