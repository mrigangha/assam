import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang, type Lang } from "./Language";

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-full ring-1 ring-[#D4A017]/70 overflow-hidden text-xs font-bold ${
        compact ? "" : "ml-1"
      }`}
      role="group"
      aria-label="Language / ভাষা"
    >
      {(["en", "as"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 transition ${
            lang === l
              ? "bg-[#D4A017] text-[#1a0f0f]"
              : "text-amber-100/80 hover:bg-white/10"
          }`}
        >
          {l === "en" ? "EN" : "অসমীয়া"}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  const LINKS = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#events", label: t.nav.events },
    { href: "#magazine", label: t.nav.instagram },
    { href: "#team", label: t.nav.team },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#join", label: t.nav.join },
  ];

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
              {t.nav.brand1}
            </span>
            <span className="block text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#E7C873]">
              {t.nav.brand2}
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
          <LangToggle />
          <a
            href="https://www.instagram.com/assam_association_mzu/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 text-sm font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white rounded-full ring-1 ring-[#D4A017] transition"
          >
            {t.nav.instaBtn}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangToggle compact />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-amber-50 hover:bg-white/10"
            aria-label={t.nav.menu}
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            )}
          </button>
        </div>
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
