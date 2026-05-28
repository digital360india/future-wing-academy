"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  Phone,
  Clock3,
  GraduationCap,
} from "lucide-react";

export default function GoogleIndiaMap() {
  const indiaMap =
    "https://www.google.com/maps?q=India&z=5&output=embed";

  const academyLocation =
    "https://www.google.com/maps?q=Ground+Floor+Digital+360+B-36+Nehru+Colony+Dalanwala+Dehradun+Uttarakhand&z=18&output=embed";

  const [mapSrc, setMapSrc] = useState(indiaMap);

  const handleLocationClick = () => {
    setMapSrc(academyLocation);
  };

  return (
    <section className="relative w-full  overflow-hidden bg-linear-to-b from-sky-50 via-white to-sky-100 py-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 text-center mb-14 relative z-10 font-serif">
        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
          <GraduationCap size={18} />
          Our  Location
        </div>

        <h2 className="text-3xl  font-bold text-gray-900 leading-tight">
          Visit{" "}
          <span className="text-sky-600">Future Wings Academy</span>
        </h2>

        <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore our academy location directly on the interactive map.
          Discover our modern learning environment and easily navigate to
          our campus in Dehradun, Uttarakhand.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT INFO CARD */}
          <div className="lg:col-span-4">
            <div className="h-full bg-white/90 backdrop-blur-xl border border-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] rounded-[32px] p-8 flex flex-col justify-between">
              <div>
                {/* ICON */}
                <div className="w-14 h-14 rounded-3xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <MapPin className="text-white" size={38} />
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold text-gray-900 mt-6 leading-snug">
                  Future Wings Academy
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Empowering students with quality education, professional
                  guidance, and modern learning experiences in the heart of
                  Dehradun.
                </p>

                {/* INFO BOXES */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-4 bg-sky-50 rounded-2xl p-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <MapPin className="text-sky-600" size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Address
                      </h4>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        Ground Floor, Digital 360, B-36, Nehru Colony,
                        Dalanwala, Dehradun, Uttarakhand
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-sky-50 rounded-2xl p-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Phone className="text-sky-600" size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Contact
                      </h4>

                      <p className="text-sm text-gray-600">
                        +91 86792 34969
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-sky-50 rounded-2xl p-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Clock3 className="text-sky-600" size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Working Hours
                      </h4>

                      <p className="text-sm text-gray-600">
                        Mon - Sat : 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={handleLocationClick}
                className="group mt-8 w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 text-white px-6 py-4 rounded-2xl text-base font-semibold"
              >
                <Navigation
                  size={20}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
                Zoom to Academy Location
              </button>
            </div>
          </div>

          {/* MAP SECTION */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[32px] border border-white shadow-[0_25px_100px_rgba(0,0,0,0.12)] bg-white">
              {/* TOP BADGE */}
              <div className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-sm font-semibold text-gray-800">
                  Interactive Campus Map
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Explore our exact academy location
                </p>
              </div>

              {/* IFRAME */}
              <iframe
                src={mapSrc}
                width="100%"
                height="700"
                loading="lazy"
                allowFullScreen
                className="w-full h-[450px] sm:h-[500px] md:h-[650px] border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}