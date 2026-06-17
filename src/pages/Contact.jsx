import { Mail, ArrowUpRight } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { SiShopee } from "react-icons/si"
import { useLanguage } from "../context/LanguageContext"

function Contact() {
  const { language } = useLanguage()
  const isEN = language === "EN"

  const links = [
    {
      name: "Instagram",
      handle: "@nourafa.official",
      href: "https://www.instagram.com/nourafa.official?igsh=MW43ems0bHZvcmdzZQ==",
      icon: FaInstagram,
    },
    {
      name: "TikTok",
      handle: "@nourafa.official",
      href: "https://www.tiktok.com/@nourafa.official?_r=1&_t=ZS-96ZTdMkqh6X/",
      icon: FaTiktok,
    },
    {
      name: "Shopee",
      handle: "nourafa.store",
      href: "https://shopee.co.id/",
      icon: SiShopee,
    },
    {
      name: "Email",
      handle: "nourafa.official@gmail.com",
      href: "mailto:nourafa.official@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f3ef] text-[#2f2521]">
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[90px] text-[#9f6f62]/[0.03] md:text-[190px]">
        NOURAFA
      </div>

      <div className="absolute left-10 top-32 h-[220px] w-[220px] rounded-full bg-[#d6b2a3] opacity-20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-[#c08d7b] opacity-20 blur-[120px]" />

      <section className="relative z-10 px-6 pb-12 pt-28 text-center md:px-20 md:pt-32">
        <p className="text-xs uppercase tracking-[6px] text-[#b0897b]">
          {isEN ? "CONTACT US" : "HUBUNGI KAMI"}
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-[48px] leading-[0.95] text-[#9f6f62] md:text-[76px]">
          {isEN ? "Stay close to Nourafa." : "Tetap dekat dengan Nourafa."}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-[#7c6257] md:text-lg">
          {isEN
            ? "Find our latest collections, styling inspiration, and product updates through Nourafa’s official platforms."
            : "Temukan koleksi terbaru, inspirasi styling, dan informasi produk melalui platform resmi Nourafa."}
        </p>
      </section>

      <section className="relative z-10 px-6 pb-24 md:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 rounded-[36px] bg-white/80 p-7 shadow-[0_24px_60px_rgba(80,45,35,0.08)] backdrop-blur-xl md:order-1 md:p-10">
            <p className="text-xs uppercase tracking-[5px] text-[#b0897b]">
              {isEN ? "OFFICIAL LINKS" : "TAUTAN RESMI"}
            </p>

            <h2 className="mt-4 font-serif text-[36px] leading-tight text-[#9f6f62] md:text-[46px]">
              {isEN ? "Connect with us." : "Terhubung dengan kami."}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#7c6257] md:text-[15px]">
              {isEN
                ? "For product availability, color details, and collection updates, please contact us through the platforms below."
                : "Untuk informasi ketersediaan produk, detail warna, dan update koleksi, silakan hubungi kami melalui platform berikut."}
            </p>

            <div className="mt-9 space-y-4">
              {links.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between rounded-[26px] bg-[#f8f3ef] px-5 py-5 transition duration-300 hover:bg-[#ead8cf] sm:px-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#9f6f62] shadow-sm">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-[17px] font-medium text-[#9f6f62]">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-[#7c6257] sm:text-sm">
                          {item.handle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-[#9f6f62] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[36px] bg-[#ead8cf] md:-right-5 md:-top-5" />

            <img
              src="/bg3.jpeg"
              alt="Nourafa Contact"
              className="relative h-[420px] w-full rounded-[36px] object-cover object-center shadow-[0_30px_70px_rgba(0,0,0,0.12)] md:h-full md:min-h-[650px]"
            />

            <div className="absolute bottom-6 left-6 max-w-[260px] rounded-[24px] bg-white/85 px-6 py-4 shadow-xl backdrop-blur-md">
              <p className="text-xs uppercase tracking-[4px] text-[#b0897b]">
                {isEN ? "Daily Inspiration" : "Inspirasi Harian"}
              </p>

              <h3 className="mt-2 font-serif text-xl text-[#9f6f62]">
                {isEN ? "Elegant Every Moment" : "Elegan di Setiap Momen"}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact