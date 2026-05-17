import { Link } from "react-router-dom"

import {
  Menu,
  X
} from "lucide-react"

import { useState } from "react"

import { useLanguage } from "../../context/LanguageContext"

function Navbar() {

  const [open, setOpen] = useState(false)

  const {
    language,
    setLanguage
  } = useLanguage()

  return (

    <>

      {/* NAVBAR */}
      <nav className="w-full px-6 md:px-16 py-5 bg-[#f8f3ef]/95 backdrop-blur-md border-b border-[#eaded7] sticky top-0 z-50">

        <div className="flex items-center justify-between">

          {/* LEFT */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
          >

            {/* LOGO */}
            <div className="relative flex items-center justify-center">

              <div className="absolute w-12 h-12 bg-[#c08d7b] opacity-30 blur-xl rounded-full group-hover:opacity-50 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#b58274] to-[#9f6f62] p-2 rounded-full shadow-lg border border-white/40">

                <img
                  src="/logo1.png"
                  alt="NOURAFA"
                  className="w-8 h-8 object-contain brightness-[2.5] contrast-[1.4]"
                />

              </div>

            </div>

            {/* TEXT */}
            <div className="flex flex-col leading-none">

              <h1 className="text-2xl md:text-3xl font-serif text-[#9f6f62] tracking-wide">

                NOURAFA

              </h1>

              <span className="text-[10px] tracking-[4px] text-[#b0897b] uppercase mt-1">

                {
                  language === "EN"
                    ? "Your Beauty Companion"
                    : "Teman Cantikmu"
                }

              </span>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#7a5c50]">

            <li>

              <Link
                to="/"
                className="hover:text-[#b58274] transition duration-300"
              >

                {
                  language === "EN"
                    ? "Home"
                    : "Beranda"
                }

              </Link>

            </li>

            <li>

              <Link
                to="/collection"
                className="hover:text-[#b58274] transition duration-300"
              >

                {
                  language === "EN"
                    ? "Collection"
                    : "Koleksi"
                }

              </Link>

            </li>

            <li>

              <Link
                to="/about"
                className="hover:text-[#b58274] transition duration-300"
              >

                {
                  language === "EN"
                    ? "About"
                    : "Tentang"
                }

              </Link>

            </li>

            <li>

              <Link
                to="/contact"
                className="hover:text-[#b58274] transition duration-300"
              >

                {
                  language === "EN"
                    ? "Contact"
                    : "Kontak"
                }

              </Link>

            </li>

          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex
                w-11 h-11
                rounded-full
                bg-white
                items-center
                justify-center
                hover:scale-105
                transition
                duration-300
                shadow-sm
                border border-[#eaded7]
              "
            >

              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />

            </a>

            {/* TIKTOK */}
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex
                w-11 h-11
                rounded-full
                bg-white
                items-center
                justify-center
                hover:scale-105
                transition
                duration-300
                shadow-sm
                border border-[#eaded7]
              "
            >

              <img
                src="/tiktok.png"
                alt="TikTok"
                className="w-5 h-5 object-contain"
              />

            </a>

            {/* LANGUAGE DESKTOP */}
            <div className="hidden md:flex items-center bg-white border border-[#eaded7] rounded-full p-1 shadow-sm">

              <button
                onClick={() => setLanguage("IN")}
                className={`
                  px-3 py-1 rounded-full text-xs transition duration-300
                  ${
                    language === "IN"
                      ? "bg-[#9f6f62] text-white"
                      : "text-[#9f6f62]"
                  }
                `}
              >

                IN

              </button>

              <button
                onClick={() => setLanguage("EN")}
                className={`
                  px-3 py-1 rounded-full text-xs transition duration-300
                  ${
                    language === "EN"
                      ? "bg-[#9f6f62] text-white"
                      : "text-[#9f6f62]"
                  }
                `}
              >

                EN

              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[#9f6f62]"
            >

              {
                open
                  ? <X size={30} />
                  : <Menu size={30} />
              }

            </button>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[999]
          transition-all duration-500
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        {/* BG IMAGE */}
        <img
          src="/logo9.jpg"
          alt="NOURAFA"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-7 right-6 z-50 text-white"
        >

          <X size={34} />

        </button>

        {/* CONTENT */}
        <div className="relative z-40 h-full flex flex-col justify-center px-10 text-white">

          {/* LANGUAGE MOBILE */}
          <div className="flex items-center gap-3 mb-12">

            <button
              onClick={() => setLanguage("IN")}
              className={`
                px-5 py-2 rounded-full border transition duration-300
                ${
                  language === "IN"
                    ? "bg-white text-black border-white"
                    : "border-white/40 text-white"
                }
              `}
            >

              IN

            </button>

            <button
              onClick={() => setLanguage("EN")}
              className={`
                px-5 py-2 rounded-full border transition duration-300
                ${
                  language === "EN"
                    ? "bg-white text-black border-white"
                    : "border-white/40 text-white"
                }
              `}
            >

              EN

            </button>

          </div>

          {/* MENU */}
          <div className="space-y-7">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block text-5xl font-serif hover:translate-x-2 transition duration-300"
            >

              {
                language === "EN"
                  ? "Home"
                  : "Beranda"
              }

            </Link>

            <Link
              to="/collection"
              onClick={() => setOpen(false)}
              className="block text-5xl font-serif hover:translate-x-2 transition duration-300"
            >

              {
                language === "EN"
                  ? "Collection"
                  : "Koleksi"
              }

            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block text-5xl font-serif hover:translate-x-2 transition duration-300"
            >

              {
                language === "EN"
                  ? "About"
                  : "Tentang"
              }

            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-5xl font-serif hover:translate-x-2 transition duration-300"
            >

              {
                language === "EN"
                  ? "Contact"
                  : "Kontak"
              }

            </Link>

          </div>

          {/* SOCIAL */}
          <div className="mt-16 flex items-center gap-4">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md"
            >

              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />

            </a>

            {/* TIKTOK */}
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md"
            >

              <img
                src="/tiktok.png"
                alt="TikTok"
                className="w-5 h-5 object-contain"
              />

            </a>

          </div>

          {/* BRAND */}
          <div className="mt-14">

            <h1 className="text-4xl font-serif">

              NOURAFA

            </h1>

            <p className="mt-2 text-white/70 tracking-[4px] uppercase text-xs">

              {
                language === "EN"
                  ? "Timeless Elegance For Everyday Beauty"
                  : "Elegansi Abadi Untuk Kecantikan Sehari-hari"
              }

            </p>

          </div>

        </div>

      </div>

    </>

  )
}

export default Navbar