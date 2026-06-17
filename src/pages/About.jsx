import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

function About() {
  const { language } = useLanguage()
  const isEN = language === "EN"
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      label: isEN ? "Our Beginning" : "Awal Perjalanan",
      title: isEN ? "Started from a simple dream." : "Berawal dari mimpi sederhana.",
      desc: isEN
        ? "Nourafa was born from a small journey, built with hope, courage, and a dream to create comfortable hijabs for everyday women."
        : "Nourafa lahir dari perjalanan sederhana, dibangun dengan harapan, keberanian, dan impian untuk menghadirkan hijab yang nyaman bagi perempuan dalam keseharian.",
    },
    {
      label: isEN ? "The Process" : "Proses Kami",
      title: isEN ? "Built little by little." : "Dibangun sedikit demi sedikit.",
      desc: isEN
        ? "The first capital was collected through hard work as an online motorcycle driver. Every step became part of the story."
        : "Modal awal dikumpulkan dari hasil bekerja sebagai pengemudi ojek online. Setiap langkah menjadi bagian dari cerita yang kami perjuangkan.",
    },
    {
      label: isEN ? "Our Meaning" : "Makna Nourafa",
      title: isEN ? "More than a product." : "Lebih dari sekadar produk.",
      desc: isEN
        ? "For us, Nourafa is a form of effort, prayer, and dedication. Every piece is made with care for comfort, quality, and simple elegance."
        : "Bagi kami, Nourafa adalah wujud kerja keras, doa, dan dedikasi. Setiap helai dibuat dengan perhatian pada kenyamanan, kualitas, dan kesan elegan yang sederhana.",
    },
    {
      label: isEN ? "Our Promise" : "Janji Kami",
      title: isEN ? "Growing with your trust." : "Tumbuh bersama kepercayaanmu.",
      desc: isEN
        ? "We will keep learning, improving, and creating better pieces for your everyday moments."
        : "Kami akan terus belajar, berkembang, dan menghadirkan produk yang lebih baik untuk menemani momen harianmu.",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f3ef] text-[#2f2521]">
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[90px] text-[#9f6f62]/[0.03] md:text-[190px]">
        NOURAFA
      </div>

      <div className="absolute left-10 top-32 h-[240px] w-[240px] rounded-full bg-[#d6b2a3] opacity-20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-[#c08d7b] opacity-20 blur-[120px]" />

      <section className="relative z-10 flex min-h-screen items-center px-6 py-24 md:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[36px] bg-[#ead8cf]" />

            <img
              src="/modelss.png"
              alt="About Nourafa"
              className="relative h-[460px] w-full rounded-[36px] object-cover object-top shadow-[0_30px_70px_rgba(0,0,0,0.12)] md:h-[620px]"
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/85 px-6 py-4 shadow-xl backdrop-blur-md">
              <p className="text-xs uppercase tracking-[4px] text-[#b0897b]">
                {isEN ? "Nourafa Story" : "Cerita Nourafa"}
              </p>
              <h3 className="mt-2 font-serif text-xl text-[#9f6f62]">
                Your Beauty Companion
              </h3>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[6px] text-[#b0897b]">
              {isEN ? "ABOUT US" : "TENTANG KAMI"}
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight text-[#9f6f62] md:text-6xl">
              {isEN ? (
                <>
                  A Small
                  <br />
                  Beginning
                </>
              ) : (
                <>
                  Awal yang
                  <br />
                  Sederhana
                </>
              )}
            </h1>

            <div className="mt-10 min-h-[230px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs uppercase tracking-[4px] text-[#b0897b]">
                    {slides[activeSlide].label}
                  </p>

                  <h2 className="mt-4 font-serif text-[34px] leading-tight text-[#2f2521] md:text-[44px]">
                    {slides[activeSlide].title}
                  </h2>

                  <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#7c6257]">
                    {slides[activeSlide].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center border border-[#2f2521] text-[#2f2521] transition hover:bg-[#2f2521] hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center border border-[#2f2521] text-[#2f2521] transition hover:bg-[#2f2521] hover:text-white"
              >
                <ChevronRight size={18} />
              </button>

              <div className="ml-2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-8 bg-[#2f2521]"
                        : "w-2.5 bg-[#cdb8ad]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/collection">
                <button className="w-full bg-[#2f2521] px-8 py-4 text-xs font-medium uppercase tracking-[2px] text-white transition hover:bg-[#5b453c] sm:w-auto">
                  {isEN ? "Explore Collection" : "Lihat Koleksi"}
                </button>
              </Link>

              <Link to="/contact">
                <button className="w-full border border-[#2f2521] px-8 py-4 text-xs font-medium uppercase tracking-[2px] text-[#2f2521] transition hover:bg-[#2f2521] hover:text-white sm:w-auto">
                  {isEN ? "Contact Us" : "Hubungi Kami"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About