import { Link } from "react-router-dom"

import {
  Search,
  ShoppingBag,
  User
} from "lucide-react"

function Navbar() {
  return (
    <nav className="w-full px-6 md:px-16 py-5 flex items-center justify-between bg-[#f8f3ef]/95 backdrop-blur-md border-b border-[#eaded7] sticky top-0 z-50">

      {/* LEFT */}
      <Link
        to="/"
        className="flex items-center gap-4 group"
      >

        {/* LOGO WRAPPER */}
        <div className="relative flex items-center justify-center">

          {/* GLOW */}
          <div className="absolute w-12 h-12 bg-[#c08d7b] opacity-30 blur-xl rounded-full group-hover:opacity-50 transition duration-500"></div>

          {/* LOGO */}
          <div className="relative bg-gradient-to-br from-[#b58274] to-[#9f6f62] p-2 rounded-full shadow-lg border border-white/40">

            <img
              src="/logo1.png"
              alt="NOURAFA"
              className="w-8 h-8 object-contain brightness-[2.5] contrast-[1.4]"
            />

          </div>

        </div>

        {/* TEXT LOGO */}
        <div className="flex flex-col leading-none">

          <h1 className="text-2xl md:text-3xl font-serif text-[#9f6f62] tracking-wide">

            NOURAFA

          </h1>

          <span className="text-[10px] tracking-[4px] text-[#b0897b] uppercase mt-1">

            Your Beauty Companion

          </span>

        </div>

      </Link>

      {/* MENU */}
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

      {/* RIGHT ICON */}
      <div className="flex items-center gap-5 text-[#7a5c50]">

        <Search
          size={20}
          className="cursor-pointer hover:text-[#b58274] transition duration-300"
        />

        <User
          size={20}
          className="cursor-pointer hover:text-[#b58274] transition duration-300"
        />

        <ShoppingBag
          size={20}
          className="cursor-pointer hover:text-[#b58274] transition duration-300"
        />

      </div>

    </nav>
  )
}

export default Navbar