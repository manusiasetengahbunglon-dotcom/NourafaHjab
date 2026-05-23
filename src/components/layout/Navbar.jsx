import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
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
      <nav
        className="
          w-full
          px-6 md:px-16
          py-6
          bg-[#f9f5f2]/90
          backdrop-blur-md
          border-b border-[#eee3dd]
          sticky top-0 z-50
        "
      >

        <div className="flex items-center justify-between">

          {/* LEFT */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
          >

            {/* LOGO */}
            <div className="relative flex items-center justify-center">

              {/* SOFT GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-[#b98b7d]/10
                  blur-lg
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* LOGO BOX */}
              <div
                className="
                  relative
                  w-11 h-11
                  rounded-full
                  overflow-hidden
                  bg-[#f9f5f2]
                  border border-[#ebe1db]
                  flex items-center justify-center
                "
              >

                <img
                  src="/sa.png"
                  alt="NOURAFA"
                  className="
                    w-full
                    h-full
                    object-cover
                    scale-[1.02]
                  "
                />

              </div>

            </div>

           {/* TEXT */}
<div className="flex flex-col leading-none">

  <h1
    className="
      text-[18px]
      md:text-[22px]
      font-serif
      tracking-[3px]
      text-[#b08475]
      font-medium
    "
  >

    NOURAFA

  </h1>

  <span
    className="
      text-[7px]
      tracking-[4px]
      uppercase
      text-[#c2a59a]
      mt-1.5
    "
  >

    {
      language === "EN"
        ? "Your Beauty Companion"
        : "Teman Cantikmu"
    }

  </span>

</div>

          </Link>

          {/* DESKTOP MENU */}
          <ul
            className="
              hidden md:flex
              items-center
              gap-14
              text-[15px]
              font-medium
              text-[#8d6f63]
            "
          >

            <li>
              <Link
                to="/"
                className="
                  hover:text-[#b98b7d]
                  transition duration-300
                "
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
                className="
                  hover:text-[#b98b7d]
                  transition duration-300
                "
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
                className="
                  hover:text-[#b98b7d]
                  transition duration-300
                "
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
                className="
                  hover:text-[#b98b7d]
                  transition duration-300
                "
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
              href="https://www.instagram.com/nourafa.official?igsh=MW43ems0bHZvcmdzZQ==/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex
                w-10 h-10
                rounded-full
                bg-[#fcfaf8]
                items-center
                justify-center
                border border-[#ebe1db]
                hover:border-[#c9a89d]
                transition duration-300
              "
            >

              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-4 h-4 object-contain"
              />

            </a>

            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/@nourafa.official?_r=1&_t=ZS-96ZTdMkqh6X/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex
                w-10 h-10
                rounded-full
                bg-[#fcfaf8]
                items-center
                justify-center
                border border-[#ebe1db]
                hover:border-[#c9a89d]
                transition duration-300
              "
            >

              <img
                src="/tiktok.png"
                alt="TikTok"
                className="w-4 h-4 object-contain"
              />

            </a>

            {/* LANGUAGE */}
            <div
              className="
                hidden md:flex
                items-center
                border border-[#ebe1db]
                rounded-full
                p-1
                bg-[#fcfaf8]
              "
            >

              <button
                onClick={() => setLanguage("IN")}
                className={`
                  px-3 py-1
                  rounded-full
                  text-xs
                  transition duration-300
                  ${
                    language === "IN"
                      ? "bg-[#b98b7d] text-white"
                      : "text-[#9f7c71]"
                  }
                `}
              >

                IN

              </button>

              <button
                onClick={() => setLanguage("EN")}
                className={`
                  px-3 py-1
                  rounded-full
                  text-xs
                  transition duration-300
                  ${
                    language === "EN"
                      ? "bg-[#b98b7d] text-white"
                      : "text-[#9f7c71]"
                  }
                `}
              >

                EN

              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                text-[#9f7c71]
              "
            >

              {
                open
                  ? <X size={28} />
                  : <Menu size={28} />
              }

            </button>

          </div>

        </div>

      </nav>

    </>

  )
}

export default Navbar