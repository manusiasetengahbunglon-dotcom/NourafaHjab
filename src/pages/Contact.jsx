function Contact() {
  return (
    <div className="bg-[#f8f3ef] min-h-screen">

      {/* HERO */}
      <section className="px-6 md:px-20 py-20">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#b0897b] text-sm">

            CONTACT US

          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#9f6f62]">

            Stay Connected

          </h1>

          <p className="mt-8 text-[#7c6257] text-lg leading-8 max-w-2xl mx-auto">

            Follow NOURAFA on social media and marketplace
            for the latest collection updates, inspirations,
            and exclusive offers.

          </p>

        </div>

      </section>

      {/* CONTACT CARD */}
      <section className="px-6 md:px-20 pb-24">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm">

            <p className="uppercase tracking-[5px] text-[#b0897b] text-sm">

              SOCIAL MEDIA

            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#9f6f62]">

              Follow Our Journey

            </h2>

            <p className="mt-6 text-[#7c6257] leading-8">

              Stay inspired with our elegant collections,
              styling ideas, and latest updates through
              our official platforms.

            </p>

            {/* SOCIAL LIST */}
            <div className="mt-10 space-y-5">

              <a
                href="https://instagram.com/"
                target="_blank"
                className="flex items-center justify-between bg-[#f8f3ef] hover:bg-[#ead8cf] transition duration-300 rounded-full px-6 py-5"
              >

                <div>
                  <p className="text-[#9f6f62] text-xl font-medium">

                    Instagram

                  </p>

                  <p className="text-[#7c6257] text-sm mt-1">

                    @nourafa.official

                  </p>
                </div>

                <span className="text-[#9f6f62] text-2xl">

                  ↗

                </span>

              </a>

              <a
                href="https://tiktok.com/"
                target="_blank"
                className="flex items-center justify-between bg-[#f8f3ef] hover:bg-[#ead8cf] transition duration-300 rounded-full px-6 py-5"
              >

                <div>
                  <p className="text-[#9f6f62] text-xl font-medium">

                    TikTok

                  </p>

                  <p className="text-[#7c6257] text-sm mt-1">

                    @nourafa.id

                  </p>
                </div>

                <span className="text-[#9f6f62] text-2xl">

                  ↗

                </span>

              </a>

              <a
                href="https://shopee.co.id/"
                target="_blank"
                className="flex items-center justify-between bg-[#f8f3ef] hover:bg-[#ead8cf] transition duration-300 rounded-full px-6 py-5"
              >

                <div>
                  <p className="text-[#9f6f62] text-xl font-medium">

                    Shopee

                  </p>

                  <p className="text-[#7c6257] text-sm mt-1">

                    nourafa.store

                  </p>
                </div>

                <span className="text-[#9f6f62] text-2xl">

                  ↗

                </span>

              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute -top-5 -right-5 w-full h-full bg-[#ead8cf] rounded-[40px]"></div>

            <img
              src="/bg3.jpeg"
              alt="Nourafa Contact"
              className="relative w-full h-[650px] object-cover rounded-[40px] shadow-xl"
            />

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact