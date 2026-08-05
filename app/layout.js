import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { IoCallOutline } from "react-icons/io5";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Future Wings Academy",

  description:
    "Future Wings Academy is a modern education platform empowering students with quality learning, skill development, and career growth opportunities.",

  icons: {
    icon: "/aeroplane full shot 1.png",
    shortcut: "/aeroplane full shot 1.png",
    apple: "/aeroplane full shot 1.png",
  },

  verification: {
    google: "-5pa5RLdQht8jXTFZ0f052qbowl_WEgifOh_27H216k",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aeroplane full shot 1.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white overflow-x-hidden`}
      >
        {/* Google Analytics (gtag.js) */}
        <Script
          id="ga-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RDGY3JL20J"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RDGY3JL20J');
            `,
          }}
        />

        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18141108152"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18141108152');
            `,
          }}
        />

        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                    s0=document.getElementsByTagName("script")[0];

                s1.async=true;
                s1.src='https://embed.tawk.to/698986c9c060e01c37488e01/1jh0jd1la';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');

                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        <Navbar />

        <main className="min-h-screen">{children}</main>

        <a href="tel:8679234969" className="fixed bottom-5 left-5 z-9999">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-sky-500 hover:bg-sky-600 transition-all duration-300 shadow-2xl rounded-full flex items-center justify-center animate-pulse">
            <IoCallOutline className="text-white w-7 h-7 md:w-8 md:h-8" />
          </div>
        </a>

        <Footer />
      </body>
    </html>
  );
}