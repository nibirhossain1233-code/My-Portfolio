import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact me", href: "#contact" },
  ];

  const socialLinks = [
    <FaInstagram />,
    <FaLinkedinIn />,
    <FaDribbble />,
    <FaBehance />,
  ];

  return (
    <footer className="bg-white/[0.04] px-5 py-12">
      <div className="max-w-[1280px] mx-auto">

        {/* Logo */}
        <div className="text-center">
          <Link
            href="#home"
            className="text-3xl font-bold bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text text-transparent"
          >
            LOGO
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-[60px] mt-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#959595] hover:text-[#fd6f00] transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mt-12">
          {socialLinks.map((icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center text-white text-xl hover:bg-[#fd6f00] transition"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12 text-[#959595]">
          <a
            href="mailto:Mahmood.fazile7005@gmail.com"
            className="flex items-center gap-3"
          >
            <FaEnvelope />
            Mahmood.fazile7005@gmail.com
          </a>

          <a href="tel:+93729107005" className="flex items-center gap-3">
            <FaPhone />
            +93 729 107 005
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#707070] mt-12 pt-6 text-center">
          <p className="text-sm text-[#707070]">
            Designed by @mahmood.fazile UI/UX designer
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;