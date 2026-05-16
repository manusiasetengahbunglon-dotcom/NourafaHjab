import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ef] min-h-screen px-6 md:px-20 py-16 md:py-24">

      {/* BACKGROUND LOGO */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none select-none">

        <h1 className="text-[100px] md:text-[260px] font-serif text-[#9f6f62] whitespace-nowrap animate-pulse">

          NOURAFA

        </h1>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

            Elegant Muslim Fashion

          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-serif text-[#9f6f62] leading-tight">

            Beauty in
            <br />
            Simplicity

          </h1>

          <p className="mt-8 text-[#7c6257] text-lg leading-8 max-w-xl mx-auto md:mx-0">

           “More than fashion, NOURAFA is a reflection of elegance crafted with care, designed to make every woman feel beautiful, confident, and graceful.”

          </p>

          {/* BUTTON */}
          <Link to="/collection">

            <button className="mt-10 px-8 py-4 bg-[#a97868] hover:bg-[#946657] transition duration-300 text-white rounded-full shadow-xl hover:scale-105">

              To Collection

            </button>

          </Link>

        </div>

        {/* RIGHT IMAGE */}
<div className="relative flex justify-center items-center">

  {/* MAIN GLOW */}
  <div className="absolute w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-[#d6b2a3] blur-[120px] opacity-30 rounded-full animate-pulse"></div>

  {/* LIGHT EFFECT */}
  <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] border border-white/30 rounded-full animate-spin-slow"></div>

  {/* MODEL */}
  <img
    src="/model3.png"
    alt="NOURAFA Model"
    className="relative z-10 w-full max-w-[420px] md:max-w-[520px] object-cover drop-shadow-2xl"
  />

</div>

      </div>

    </section>
  )
}

export default Home