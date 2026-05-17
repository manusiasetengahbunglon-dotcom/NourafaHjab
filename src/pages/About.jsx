import {
  useLanguage
} from "../context/LanguageContext"

function About() {

  const { language } = useLanguage()

  return (

    <div className="bg-[#f8f3ef] min-h-screen overflow-hidden relative">

      {/* BACKGROUND TEXT */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[90px] md:text-[190px] font-serif text-[#9f6f62]/[0.03] whitespace-nowrap pointer-events-none select-none">

        NOURAFA

      </div>

      {/* GLOW */}
      <div className="absolute top-32 left-10 w-[240px] h-[240px] bg-[#d6b2a3] opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[260px] h-[260px] bg-[#c08d7b] opacity-20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-20 py-20 md:py-28 z-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative">

            {/* BACK LAYER */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-[40px] bg-[#ead8cf]"></div>

            {/* IMAGE */}
            <img
              src="/modelss.png"
              alt="About Nourafa"
              className="
                relative
                rounded-[40px]
                object-cover
                object-top
                w-full
                h-[520px]
                md:h-[650px]
                shadow-[0_30px_70px_rgba(0,0,0,0.12)]
              "
            />

            {/* FLOAT CARD */}
            <div className="absolute bottom-6 left-6 bg-white/85 backdrop-blur-md px-6 py-4 rounded-[24px] shadow-xl">

              <p className="text-[#b0897b] text-xs tracking-[4px] uppercase">

                {
                  language === "EN"
                    ? "Timeless Beauty"
                    : "Keindahan Abadi"
                }

              </p>

              <h3 className="mt-2 text-[#9f6f62] font-serif text-xl">

                {
                  language === "EN"
                    ? "Crafted With Love"
                    : "Dibuat Dengan Cinta"
                }

              </h3>

            </div>

          </div>

          {/* CONTENT */}
          <div>

            {/* MINI */}
            <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

              {
                language === "EN"
                  ? "ABOUT US"
                  : "TENTANG KAMI"
              }

            </p>

            {/* TITLE */}
            <h1 className="mt-5 text-5xl md:text-6xl font-serif text-[#9f6f62] leading-tight">

              {
                language === "EN"
                  ? (
                    <>
                      Crafted With
                      <br />
                      Elegance & Love
                    </>
                  )
                  : (
                    <>
                      Dibuat Dengan
                      <br />
                      Elegansi & Cinta
                    </>
                  )
              }

            </h1>

            {/* DESC */}
            <p className="mt-8 text-[#7c6257] leading-8 text-lg">

              {
                language === "EN"
                  ? (
                    <>
                      NOURAFA was created to bring premium hijab collections
                      with an elegant, soft, and timeless touch.
                      We believe every woman deserves to feel graceful,
                      confident, and comfortable in every moment of her life.
                    </>
                  )
                  : (
                    <>
                      NOURAFA hadir untuk menghadirkan koleksi hijab premium
                      dengan sentuhan elegan, lembut, dan timeless.
                      Kami percaya setiap wanita berhak tampil anggun,
                      percaya diri, dan nyaman di setiap momennya.
                    </>
                  )
              }

            </p>

            <p className="mt-6 text-[#7c6257] leading-8 text-lg">

              {
                language === "EN"
                  ? (
                    <>
                      Using carefully selected materials and aesthetic color palettes,
                      each collection is thoughtfully crafted to complete
                      modern feminine styles with a luxurious and sophisticated feel.
                    </>
                  )
                  : (
                    <>
                      Dengan material pilihan dan warna-warna aesthetic,
                      setiap koleksi dibuat untuk melengkapi gaya feminin modern
                      dengan nuansa mewah dan elegan.
                    </>
                  )
              }

            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-5">

              {/* CARD */}
              <div className="bg-white rounded-[30px] p-6 shadow-sm text-center hover:-translate-y-1 transition duration-300">

                <h2 className="text-3xl font-serif text-[#9f6f62]">

                  5K+

                </h2>

                <p className="mt-2 text-[#7c6257] text-sm">

                  {
                    language === "EN"
                      ? "Happy Customers"
                      : "Pelanggan Bahagia"
                  }

                </p>

              </div>

              {/* CARD */}
              <div className="bg-white rounded-[30px] p-6 shadow-sm text-center hover:-translate-y-1 transition duration-300">

                <h2 className="text-3xl font-serif text-[#9f6f62]">

                  50+

                </h2>

                <p className="mt-2 text-[#7c6257] text-sm">

                  {
                    language === "EN"
                      ? "Premium Colors"
                      : "Warna Premium"
                  }

                </p>

              </div>

              {/* CARD */}
              <div className="bg-white rounded-[30px] p-6 shadow-sm text-center hover:-translate-y-1 transition duration-300">

                <h2 className="text-3xl font-serif text-[#9f6f62]">

                  100%

                </h2>

                <p className="mt-2 text-[#7c6257] text-sm">

                  {
                    language === "EN"
                      ? "Soft Material"
                      : "Bahan Lembut"
                  }

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}

export default About