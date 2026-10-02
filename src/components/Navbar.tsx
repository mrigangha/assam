import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#culture", label: "Culture" },
  { href: "#events", label: "Events" },
  { href: "#instagram", label: "Instagram" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#join", label: "Join Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-[#1a0f0f]/95 backdrop-blur shadow-lg"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      {/* gamosa strip */}
      <div className="h-1.5 gamosa-strip" />
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/insta/logo.jpg"
            alt="Real logo of Assam Association, MZU scraped from Instagram @assam_association_mzu"
            width={48}
            height={48}
            className="rounded-full bg-white ring-2 ring-[#D4A017]"
            priority
          />
          <span className="leading-tight">
            <span className="block font-serif font-bold text-[#FFFBEB] text-base sm:text-lg">
              Assam Association
            </span>
            <span className="block text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#E7C873]">
              Mizoram University
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/assam_association_mzu/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 text-sm font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white rounded-full ring-1 ring-[#D4A017] transition"
          >
            Instagram ↗
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-amber-50 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1a0f0f]/98 backdrop-blur border-t border-white/10 px-4 pb-4 pt-2">
          <div className="grid gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-amber-50 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
