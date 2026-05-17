import {
  useLanguage
} from "../context/LanguageContext"

function Contact() {

  const { language } = useLanguage()

  return (

    <div className="bg-[#f8f3ef] min-h-screen overflow-hidden relative">

      {/* BACKGROUND TEXT */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[90px] md:text-[190px] font-serif text-[#9f6f62]/[0.03] whitespace-nowrap pointer-events-none select-none">

        NOURAFA

      </div>

      {/* GLOW */}
      <div className="absolute top-32 left-10 w-[220px] h-[220px] bg-[#d6b2a3] opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[260px] h-[260px] bg-[#c08d7b] opacity-20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="relative px-6 md:px-20 py-20 z-10">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

            {
              language === "EN"
                ? "CONTACT US"
                : "HUBUNGI KAMI"
            }

          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#9f6f62]">

            {
              language === "EN"
                ? "Stay Connected"
                : "Tetap Terhubung"
            }

          </h1>

          <p className="mt-8 text-[#7c6257] text-lg leading-8 max-w-2xl mx-auto">

            {
              language === "EN"
                ? (
                  <>
                    Follow NOURAFA on social media and marketplace
                    for the latest collection updates, inspirations,
                    and exclusive offers.
                  </>
                )
                : (
                  <>
                    Ikuti NOURAFA di media sosial dan marketplace
                    untuk mendapatkan update koleksi terbaru,
                    inspirasi fashion, dan penawaran eksklusif.
                  </>
                )
            }

          </p>

        </div>

      </section>

      {/* CONTACT CARD */}
      <section className="relative px-6 md:px-20 pb-24 z-10">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm">

            <p className="uppercase tracking-[5px] text-[#b0897b] text-sm">

              {
                language === "EN"
                  ? "SOCIAL MEDIA"
                  : "MEDIA SOSIAL"
              }

            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#9f6f62] leading-tight">

              {
                language === "EN"
                  ? "Follow Our Journey"
                  : "Ikuti Perjalanan Kami"
              }

            </h2>

            <p className="mt-6 text-[#7c6257] leading-8">

              {
                language === "EN"
                  ? (
                    <>
                      Stay inspired with our elegant collections,
                      styling ideas, and latest updates through
                      our official platforms.
                    </>
                  )
                  : (
                    <>
                      Temukan inspirasi dari koleksi elegan,
                      ide styling, dan update terbaru melalui
                      platform resmi kami.
                    </>
                  )
              }

            </p>

            {/* SOCIAL LIST */}
            <div className="mt-10 space-y-5">

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#f8f3ef] hover:bg-[#ead8cf] transition duration-300 rounded-full px-6 py-5 group"
              >

                <div>

                  <p className="text-[#9f6f62] text-xl font-medium">

                    Instagram

                  </p>

                  <p className="text-[#7c6257] text-sm mt-1">

                    @nourafa.official

                  </p>

                </div>

                <span className="text-[#9f6f62] text-2xl group-hover:translate-x-1 transition duration-300">

                  ↗

                </span>

              </a>

              {/* TIKTOK */}
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#f8f3ef] hover:bg-[#ead8cf] transition duration-300 rounded-full px-6 py-5 group"
              >

                <div>

                  <p className="text-[#9f6f62] text-xl font-medium">

                    TikTok

                  </p>

                  <p className="text-[#7c6257] text-sm mt-1">

                    @nourafa.id

                  </p>

                </div>

                <span className="text-[#9f6f62] text-2xl group-hover:translate-x-1 transition duration-300">

                  ↗

                </span>

              </a>

              {/* SHOPEE */}
              <a
                href="https://shopee.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#f8f3ef] hover:bg-[#ead8cf] transition duration-300 rounded-full px-6 py-5 group"
              >

                <div>

                  <p className="text-[#9f6f62] text-xl font-medium">

                    Shopee

                  </p>

                  <p className="text-[#7c6257] text-sm mt-1">

                    nourafa.store

                  </p>

                </div>

                <span className="text-[#9f6f62] text-2xl group-hover:translate-x-1 transition duration-300">

                  ↗

                </span>

              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* BACKGROUND CARD */}
            <div className="absolute -top-5 -right-5 w-full h-full bg-[#ead8cf] rounded-[40px]"></div>

            {/* IMAGE */}
            <img
              src="/bg3.jpeg"
              alt="Nourafa Contact"
              className="
                relative
                w-full
                h-[520px]
                md:h-[650px]
                object-cover
                object-center
                rounded-[40px]
                shadow-[0_30px_70px_rgba(0,0,0,0.12)]
              "
            />

            {/* FLOAT CARD */}
            <div className="absolute bottom-6 left-6 bg-white/85 backdrop-blur-md px-6 py-4 rounded-[24px] shadow-xl">

              <p className="text-[#b0897b] text-xs tracking-[4px] uppercase">

                {
                  language === "EN"
                    ? "Daily Inspiration"
                    : "Inspirasi Harian"
                }

              </p>

              <h3 className="mt-2 text-[#9f6f62] font-serif text-xl">

                {
                  language === "EN"
                    ? "Elegant Every Moment"
                    : "Elegan Di Setiap Momen"
                }

              </h3>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}

export default Contact