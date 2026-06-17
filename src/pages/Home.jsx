import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

function Home() {
  const { language } = useLanguage()
  const isEN = language === "EN"

  const products = [
    {
      name: "Ruwa Viscose",
      type: "Pashmina",
      size: "175 cm",
      price: "Rp 59.000",
      img: "/viscose.jpeg",
      status: "ready",
    },
    {
      name: "Mahra Voal",
      type: "Pashmina",
      size: "175 cm",
      price: "Rp 79.000",
      img: "/voal.jpeg",
      status: "ready",
    },
    {
      name: "Nazira Segi Empat",
      type: "Segi Empat",
      size: "115 × 115 cm",
      price: "Rp 69.000",
      img: "/segi.jpeg",
      status: "ready",
    },
    {
      name: "Wareefa Ceruty",
      type: "Pashmina",
      size: "175 cm",
      price: "Rp 89.000",
      img: "/Ceruty.jpeg",
      status: "ready",
    },
    {
      name: "Dania Bergo",
      type: "Instant",
      size: "Coming Soon",
      price: "Coming Soon",
      img: "/bergo.jpeg",
      status: "soon",
    },
    {
      name: "Raqiq Kaos",
      type: "Daily Series",
      size: "Coming Soon",
      price: "Coming Soon",
      img: "/kaos.jpeg",
      status: "soon",
    },
  ]

  const materials = [
    {
      title: "Viscose",
      desc: isEN
        ? "Soft, flowy, and comfortable for a neat everyday look."
        : "Lembut, jatuh, dan nyaman untuk tampilan harian yang rapi.",
    },
    {
      title: "Voal",
      desc: isEN
        ? "Lightweight, easy to shape, and perfect for a clean look."
        : "Ringan, mudah dibentuk, dan cocok untuk look yang bersih.",
    },
    {
      title: "Ceruty",
      desc: isEN
        ? "Smooth and flowy with a soft feminine impression."
        : "Halus, flowy, dan memberi kesan feminin saat digunakan.",
    },
    {
      title: "Kaos",
      desc: isEN
        ? "Stretchy, breathable, and practical for daily activities."
        : "Elastis, adem, dan praktis untuk aktivitas sehari-hari.",
    },
  ]

  const values = [
    {
      title: isEN ? "Soft Material" : "Bahan Lembut",
      desc: isEN
        ? "Selected for comfort in your daily activities."
        : "Dipilih agar nyaman digunakan dalam aktivitas harian.",
    },
    {
      title: isEN ? "Easy to Style" : "Mudah Dibentuk",
      desc: isEN
        ? "Simple to wear and easy to keep neat."
        : "Mudah dibentuk dan tetap rapi saat dipakai.",
    },
    {
      title: isEN ? "Thoughtful Detail" : "Detail yang Diperhatikan",
      desc: isEN
        ? "Made with attention to material, cutting, and finishing."
        : "Dibuat dengan perhatian pada bahan, potongan, dan finishing.",
    },
  ]

  return (
    <main className="bg-[#f7f1ec] text-[#2f2521]">
      <div className="bg-[#2f2521] px-4 py-3 text-center text-[10px] uppercase tracking-[2px] text-white sm:text-[11px]">
        {isEN ? "New collection is coming soon" : "Koleksi terbaru segera hadir"}
      </div>

      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/ee.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl text-white"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[4px]">
              NOURAFA HIJAB
            </p>

            <h1 className="font-serif text-[52px] leading-[0.95] tracking-[-2px] sm:text-[64px] md:text-[76px] lg:text-[92px]">
              Your Beauty Companion
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/90 sm:text-[16px]">
              {isEN
                ? "Soft scarves made for your everyday moments."
                : "Hijab lembut untuk menemani hari-harimu."}
            </p>

            <Link to="/collection">
              <button className="mt-8 bg-white px-9 py-4 text-xs font-medium uppercase tracking-[2px] text-[#2f2521] transition hover:bg-[#eaded6]">
                {isEN ? "Shop Now" : "Lihat Koleksi"}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:px-14 md:py-20">
        <p className="mx-auto max-w-2xl font-serif text-[30px] leading-tight text-[#3a2d28] md:text-[44px]">
          {isEN
            ? "Designed for comfort, styled for everyday beauty."
            : "Nyaman dipakai, indah untuk setiap hari."}
        </p>
      </section>

      <section className="px-6 pb-20 md:px-14 md:pb-24 lg:px-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-[#8b6f62]">
              {isEN ? "Shop" : "Belanja"}
            </p>

            <h2 className="mt-2 font-serif text-4xl">
              Nourafa Series
            </h2>
          </div>

          <Link
            to="/collection"
            className="hidden text-xs uppercase tracking-[2px] underline underline-offset-4 md:block"
          >
            {isEN ? "View all" : "Lihat semua"}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ddd5]">
                <img
                  src={item.img}
                  alt={item.name}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                    item.status === "soon" ? "opacity-60 grayscale" : ""
                  }`}
                />

                {item.status === "soon" && (
                  <div className="absolute left-3 top-3 bg-white px-3 py-2 text-[9px] font-medium uppercase tracking-[2px] text-[#2f2521]">
                    Coming Soon
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <p className="text-[10px] uppercase tracking-[2px] text-[#8b6f62]">
                  {item.type}
                </p>

                <h3 className="mt-2 min-h-[36px] text-[13px] uppercase leading-5 tracking-[1.4px]">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-[#9a7d70]">
                  {item.size}
                </p>

                <p className="mt-1 text-sm text-[#8b6f62]">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe5de] px-6 py-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[4px] text-[#8b6f62]">
            Material Guide
          </p>

          <h2 className="mt-4 font-serif text-[38px] leading-tight md:text-[54px]">
            {isEN ? "Discover Nourafa Materials" : "Kenali Bahan Nourafa"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#6f5a50]">
            {isEN
              ? "Each material is selected to bring comfort, a neat look, and ease of wear."
              : "Setiap bahan dipilih untuk memberikan rasa nyaman, tampilan rapi, dan kemudahan saat digunakan."}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-px bg-[#d6c7bd] md:grid-cols-2 lg:grid-cols-4">
          {materials.map((item, index) => (
            <div key={index} className="bg-[#f7f1ec] px-7 py-12 text-center">
              <h3 className="font-serif text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7b6358]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="min-h-[420px] bg-[#e8ddd5] md:min-h-[560px]">
          <img
            src="/bg4.jpeg"
            alt="Nourafa story"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center bg-[#f7f1ec] px-8 py-16 md:px-16 md:py-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[4px] text-[#8b6f62]">
              {isEN ? "Our Story" : "Cerita Kami"}
            </p>

            <h2 className="mt-5 font-serif text-[36px] leading-tight md:text-[52px]">
              {isEN
                ? "Comfort is part of confidence."
                : "Kenyamanan adalah bagian dari kepercayaan diri."}
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[#6f5a50] md:text-[16px]">
              {isEN
                ? "We believe comfort is part of confidence. That is why Nourafa is committed to creating hijabs that feel comfortable, are made with quality, and pay attention to every detail."
                : "Kami percaya bahwa kenyamanan adalah bagian dari kepercayaan diri. Karena itu, Nourafa berkomitmen menghadirkan hijab yang nyaman digunakan, berkualitas, dan dibuat dengan perhatian pada setiap detail."}
            </p>

            <p className="mt-4 text-[15px] leading-8 text-[#6f5a50] md:text-[16px]">
              {isEN
                ? "Every product is shaped by process, effort, and dedication to give the best for our customers. We will continue to maintain quality, improve our service, and grow with the trust you give us."
                : "Setiap produk merupakan hasil dari proses, perjuangan, dan dedikasi untuk memberikan yang terbaik bagi pelanggan. Kami akan terus menjaga kualitas, memberikan pelayanan terbaik, dan tumbuh bersama kepercayaan yang Anda berikan."}
            </p>

            <Link to="/about">
              <button className="mt-8 border border-[#2f2521] px-8 py-4 text-xs uppercase tracking-[2px] transition hover:bg-[#2f2521] hover:text-white">
                {isEN ? "Learn More" : "Tentang Nourafa"}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-[#d6c7bd] md:grid-cols-3">
        {values.map((item, index) => (
          <div key={index} className="bg-[#f7f1ec] px-8 py-16 text-center">
            <h3 className="font-serif text-3xl">{item.title}</h3>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-[#7b6358]">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-[#2f2521] px-6 py-20 text-center text-white md:px-14">
        <p className="text-xs uppercase tracking-[4px] text-white/70">
          {isEN ? "Need Help?" : "Butuh Bantuan?"}
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-[34px] leading-tight md:text-[54px]">
          {isEN
            ? "Let us help you find the right hijab."
            : "Kami bantu kamu menemukan hijab yang paling sesuai."}
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/70">
          {isEN
            ? "Ask us about materials, colors, size, or product availability."
            : "Tanyakan bahan, warna, ukuran, atau ketersediaan produk melalui halaman kontak."}
        </p>

        <Link to="/contact">
          <button className="mt-8 bg-white px-9 py-4 text-xs font-medium uppercase tracking-[2px] text-[#2f2521] transition hover:bg-[#eaded6]">
            {isEN ? "Contact Us" : "Hubungi Kami"}
          </button>
        </Link>
      </section>
    </main>
  )
}

export default Home