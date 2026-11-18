"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#111111]">
      <nav className="max-w-[1280px] mx-auto px-5 lg:px-0 py-6 flex items-center justify-between">

        <Link
          href="#home"
          className="text-3xl font-bold bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text text-transparent"
        >
          LOGO
        </Link>

        <div className="hidden lg:flex items-center gap-[60px]">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xl transition-colors ${
                index === 0
                  ? "text-[#fd6f00] font-bold"
                  : "text-[#959595] hover:text-[#fd6f00]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:block px-10 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-[#fd6f00] to-[#e46400]"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden px-5 pb-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#959595] hover:text-[#fd6f00]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-6 py-3 rounded-lg text-white bg-[#fd6f00]"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;