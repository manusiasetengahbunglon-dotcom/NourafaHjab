import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { useState } from "react"
import { useLanguage } from "../../context/LanguageContext"

function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const isEN = language === "EN"

  const menus = [
    { path: "/", label: isEN ? "Home" : "Beranda" },
    { path: "/collection", label: isEN ? "Collection" : "Koleksi" },
    { path: "/about", label: isEN ? "About" : "Tentang" },
    { path: "/contact", label: isEN ? "Contact" : "Kontak" },
  ]

  const socialLinks = [
    {
      href: "https://www.instagram.com/nourafa.official?igsh=MW43ems0bHZvcmdzZQ==",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@nourafa.official?_r=1&_t=ZS-96ZTdMkqh6X",
      icon: FaTiktok,
      label: "TikTok",
    },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#eee3dd] bg-[#f9f5f2]/90 px-6 py-4 backdrop-blur-xl md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-4"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#b98b7d]/10 opacity-0 blur-lg transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#ebe1db] bg-[#f9f5f2]">
                <img
                  src="/sa.png"
                  alt="NOURAFA"
                  className="h-full w-full scale-[1.02] object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col leading-none">
              <h1 className="font-serif text-[18px] font-medium tracking-[3px] text-[#b08475] md:text-[22px]">
                NOURAFA
              </h1>

              <span className="mt-1.5 text-[7px] uppercase tracking-[4px] text-[#c2a59a]">
                {isEN ? "Your Beauty Companion" : "Teman Cantikmu"}
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-12 text-[14px] font-medium text-[#8d6f63] md:flex">
            {menus.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 hover:text-[#b98b7d] ${
                      isActive ? "text-[#b98b7d]" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 md:flex">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebe1db] bg-[#fcfaf8] text-[#9f7c71] transition duration-300 hover:border-[#c9a89d] hover:bg-[#ead8cf] hover:text-[#8d6f63]"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>

            <div className="hidden items-center rounded-full border border-[#ebe1db] bg-[#fcfaf8] p-1 md:flex">
              <button
                onClick={() => setLanguage("IN")}
                className={`rounded-full px-3 py-1 text-xs transition duration-300 ${
                  language === "IN"
                    ? "bg-[#b98b7d] text-white"
                    : "text-[#9f7c71]"
                }`}
              >
                IN
              </button>

              <button
                onClick={() => setLanguage("EN")}
                className={`rounded-full px-3 py-1 text-xs transition duration-300 ${
                  language === "EN"
                    ? "bg-[#b98b7d] text-white"
                    : "text-[#9f7c71]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="text-[#9f7c71] md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[76px] z-40 border-b border-[#eee3dd] bg-[#f9f5f2]/95 px-6 py-6 shadow-[0_18px_45px_rgba(80,45,35,0.08)] backdrop-blur-xl md:hidden">
          <div className="space-y-1">
            {menus.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-5 py-4 text-[15px] font-medium transition ${
                    isActive
                      ? "bg-[#ead8cf] text-[#9f6f62]"
                      : "text-[#8d6f63] hover:bg-[#f1e8e2]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-3xl bg-white/70 p-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ebe1db] bg-[#fcfaf8] text-[#9f7c71]"
                  >
                    <Icon size={19} />
                  </a>
                )
              })}
            </div>

            <div className="flex items-center rounded-full border border-[#ebe1db] bg-[#fcfaf8] p-1">
              <button
                onClick={() => setLanguage("IN")}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  language === "IN"
                    ? "bg-[#b98b7d] text-white"
                    : "text-[#9f7c71]"
                }`}
              >
                IN
              </button>

              <button
                onClick={() => setLanguage("EN")}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  language === "EN"
                    ? "bg-[#b98b7d] text-white"
                    : "text-[#9f7c71]"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar