"use client";

import { useState } from "react";
import Container from "./Container";
import { PrimaryButton } from "./Button";
import { FiMenu, FiX } from "react-icons/fi";
import { logo } from "@/data/logo";

const links = [
  ["Home", "#home"], ["Services", "#services"], ["About me", "#about"],
  ["Portfolio", "#portfolio"], ["Contact me", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 bg-page">
      <Container className="flex min-h-[92px] items-center justify-between gap-8">
        <a href="#home" className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text text-[30px] font-black tracking-[.9px] text-transparent">{logo.text}</a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map(([label, href], i) => (
            <a key={href} href={href} className={`text-[18px] font-medium tracking-[.4px] transition-colors hover:text-accent`}>{label}</a>
          ))}
        </nav>
        <div className="hidden lg:block"><PrimaryButton>Hire Me</PrimaryButton></div>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="text-2xl text-white lg:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </Container>
      {open && <div className="border-t border-white/10 bg-[#151515] px-5 py-5 lg:hidden">
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-5">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-muted hover:text-accent">{label}</a>)}
          <PrimaryButton>Hire Me</PrimaryButton>
        </nav>
      </div>}
    </header>
  );
}