function About() {
  return (
    <div className="bg-[#f8f3ef] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-20 py-20 md:py-28">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-full h-full rounded-[40px] bg-[#ead8cf]"></div>

            <img
              src="/modelss.png"
              alt="About Nourafa"
              className="relative rounded-[40px] object-cover w-full h-[620px] shadow-xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

              ABOUT US

            </p>

            <h1 className="mt-5 text-5xl md:text-6xl font-serif text-[#9f6f62] leading-tight">

              Crafted With
              Elegance & Love

            </h1>

            <p className="mt-8 text-[#7c6257] leading-8 text-lg">

              NOURAFA hadir untuk menghadirkan koleksi hijab premium
              dengan sentuhan elegan, lembut, dan timeless.
              Kami percaya bahwa setiap perempuan berhak tampil
              anggun dan nyaman dalam setiap aktivitasnya.

            </p>

            <p className="mt-6 text-[#7c6257] leading-8 text-lg">

              Dengan material berkualitas dan warna-warna aesthetic,
              setiap koleksi dibuat untuk melengkapi gaya harian
              dengan nuansa feminin yang modern dan mewah.

            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-5">

              <div className="bg-white rounded-[30px] p-6 shadow-sm text-center">

                <h2 className="text-3xl font-serif text-[#9f6f62]">

                  5K+

                </h2>

                <p className="mt-2 text-[#7c6257] text-sm">

                  Happy Customers

                </p>

              </div>

              <div className="bg-white rounded-[30px] p-6 shadow-sm text-center">

                <h2 className="text-3xl font-serif text-[#9f6f62]">

                  50+

                </h2>

                <p className="mt-2 text-[#7c6257] text-sm">

                  Premium Colors

                </p>

              </div>

              <div className="bg-white rounded-[30px] p-6 shadow-sm text-center">

                <h2 className="text-3xl font-serif text-[#9f6f62]">

                  100%

                </h2>

                <p className="mt-2 text-[#7c6257] text-sm">

                  Soft Material

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