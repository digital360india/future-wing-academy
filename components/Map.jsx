"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";

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
    <section className="relative w-full py-20 bg-linear-to-b from-sky-100 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 text-center mb-10">

        <h2 className="text-3xl  font-bold text-gray-900">
          Explore Our Academy Location
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Click the button to zoom directly to our academy.
        </p>

      </div>

      {/* MAP SECTION */}
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative overflow-hidden rounded-[30px] shadow-[0_20px_80px_rgba(0,0,0,0.15)]">

          <div className="absolute top-5 right-5 z-10 hidden md:block">

            <div className="bg-white rounded-3xl p-5 shadow-2xl w-[360px]">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <MapPin className="text-sky-600" size={28} />
                </div>

                <div>

                  <h3 className="font-bold text-2xl text-gray-900">
                    Future Wings Academy
                  </h3>


                  {/* BUTTON */}
                  <button
                    onClick={handleLocationClick}
                    className="inline-flex items-center gap-2 mt-5 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white px-5 py-3 rounded-xl text-sm font-semibold"
                  >
                    <Navigation size={16} />
                    Zoom to Location
                  </button>

                </div>

              </div>

            </div>

          </div>

          <iframe
            src={mapSrc}
            width="100%"
            height="650"
            loading="lazy"
            allowFullScreen
            className="w-full h-[500px] md:h-[650px] border-0"
          ></iframe>

        </div>

      </div>

    </section>
  );
}