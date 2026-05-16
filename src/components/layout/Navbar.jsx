import { Link } from "react-router-dom"

import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X
} from "lucide-react"

import { useState } from "react"

function Navbar() {

  const [open, setOpen] = useState(false)

  return (

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

              Your Beauty Companion

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
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/collection"
              className="hover:text-[#b58274] transition duration-300"
            >
              Collection
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-[#b58274] transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-[#b58274] transition duration-300"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-[#7a5c50]">

          <Search
            size={20}
            className="hidden md:block cursor-pointer hover:text-[#b58274] transition duration-300"
          />

          <User
            size={20}
            className="hidden md:block cursor-pointer hover:text-[#b58274] transition duration-300"
          />

          <ShoppingBag
            size={20}
            className="hidden md:block cursor-pointer hover:text-[#b58274] transition duration-300"
          />

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >

            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="md:hidden mt-6 bg-white rounded-[30px] p-6 shadow-lg border border-[#eaded7]">

          <ul className="flex flex-col gap-6 text-[#7a5c50] font-medium">

            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-[#b58274]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/collection"
                onClick={() => setOpen(false)}
                className="hover:text-[#b58274]"
              >
                Collection
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="hover:text-[#b58274]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hover:text-[#b58274]"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

      )}

    </nav>

  )
}

export default Navbar