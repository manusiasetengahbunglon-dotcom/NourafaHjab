import { Link } from "react-router-dom"

import {
  useLanguage
} from "../context/LanguageContext"

function Home() {

  const { language } = useLanguage()

  return (

    <section className="relative overflow-hidden bg-[#f8f3ef] min-h-screen px-6 md:px-20 py-14 md:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f3ef] via-[#f8f3ef] to-[#f3ebe6]"></div>

      {/* BIG TEXT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">

        <h1 className="text-[90px] md:text-[260px] font-serif text-[#9f6f62] whitespace-nowrap tracking-[8px]">

          NOURAFA

        </h1>

      </div>

      {/* GLOW */}
      <div className="absolute top-32 left-10 w-[220px] h-[220px] bg-[#d6b2a3] opacity-20 blur-[100px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-[260px] h-[260px] bg-[#c08d7b] opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          {/* MINI */}
          <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

            {
              language === "EN"
                ? "Elegant Muslim Fashion"
                : "Fashion Muslim Elegan"
            }

          </p>

          {/* TITLE */}
          <h1 className="mt-6 text-5xl md:text-7xl font-serif text-[#9f6f62] leading-tight">

            {
              language === "EN"
                ? (
                  <>
                    Beauty in
                    <br />
                    Simplicity
                  </>
                )
                : (
                  <>
                    Keindahan Dalam
                    <br />
                    Kesederhanaan
                  </>
                )
            }

          </h1>

          {/* DESC */}
          <p className="mt-8 text-[#7c6257] text-lg leading-9 max-w-xl mx-auto md:mx-0">

            {
              language === "EN"
                ? (
                  <>
                    Thoughtfully crafted with comfort, softness, and timeless elegance,
                    NOURAFA is designed to accompany every woman with confidence,
                    grace, and effortless beauty in every step of her journey.
                  </>
                )
                : (
                  <>
                    Dirancang dengan kenyamanan, kelembutan, dan elegansi abadi,
                    NOURAFA hadir untuk menemani setiap wanita dengan rasa percaya diri,
                    anggun, dan cantik di setiap langkah perjalanannya.
                  </>
                )
            }

          </p>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center md:justify-start">

            <Link to="/collection">

              <button className="px-8 py-4 bg-[#a97868] hover:bg-[#946657] transition duration-300 text-white rounded-full shadow-xl hover:scale-105">

                {
                  language === "EN"
                    ? "Explore Collection"
                    : "Lihat Koleksi"
                }

              </button>

            </Link>

          </div>

        </div>

        {/* RIGHT VIDEO */}
        <div className="relative flex justify-center items-center">

          {/* MAIN GLOW */}
          <div className="absolute w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-[#d6b2a3] blur-[120px] opacity-30 rounded-full animate-pulse"></div>

          {/* RING */}
          <div className="absolute w-[280px] md:w-[450px] h-[280px] md:h-[450px] border border-white/30 rounded-full animate-[spin_20s_linear_infinite]"></div>

          {/* VIDEO */}
          <div className="relative z-10 overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-white/40">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                w-[320px]
                md:w-[470px]
                h-[500px]
                md:h-[700px]
                object-cover
              "
            >

              <source src="/nourafa.mp4" type="video/mp4" />

            </video>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>

            {/* CINEMATIC LIGHT */}
            <div
              className="
                absolute
                top-[-200px]
                left-[-250px]
                w-[260px]
                h-[1200px]
                rotate-[25deg]
                animate-light
                pointer-events-none
                z-20
              "
            >

              <div
                className="
                  w-full
                  h-full
                  bg-gradient-to-b
                  from-white/0
                  via-white/40
                  to-white/0
                  blur-2xl
                  mix-blend-screen
                "
              ></div>

            </div>

          </div>

          {/* FLOAT CARD */}
          <div className="absolute top-8 right-0 md:right-4 bg-white/80 backdrop-blur-md px-5 py-3 rounded-[22px] shadow-xl z-20">

            <p className="text-[#b0897b] text-xs tracking-[4px] uppercase">

              {
                language === "EN"
                  ? "New Arrival"
                  : "Produk Baru"
              }

            </p>

            <h3 className="mt-1 text-[#9f6f62] font-serif text-lg">

              {
                language === "EN"
                  ? "Timeless Elegance"
                  : "Elegansi Abadi"
              }

            </h3>

          </div>

          {/* MINI CARD */}
          <div className="absolute bottom-5 left-0 md:left-4 bg-white/85 backdrop-blur-md px-5 py-4 rounded-[24px] shadow-xl z-20">

            <p className="text-[#b0897b] text-xs tracking-[4px] uppercase">

              {
                language === "EN"
                  ? "Crafted With Love"
                  : "Dibuat Dengan Cinta"
              }

            </p>

            <h3 className="mt-1 text-[#9f6f62] text-lg font-serif">

              {
                language === "EN"
                  ? "Premium Comfort"
                  : "Kenyamanan Premium"
              }

            </h3>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Home