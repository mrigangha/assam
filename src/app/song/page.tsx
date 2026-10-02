"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageProvider, useLang } from "@/components/Language";
import { LangToggle } from "@/components/Navbar";

// Transcribed from public/magazaine/magazine-song.jpg (Xasipat magazine).
const STANZA_1 = [
  "সপোনৰ চেঁচু খেদি",
  "আশাৰ চিলা এৰি,",
  "বুকু ভৰাই জীয়া সুবাস",
  "দিহিং, দিখৌ, ধনশিৰি।",
  "সপোনৰ চেঁচু খেদি",
  "আশাৰ চিলা এৰি,",
  "জীৱন জুঁজৰ ঠিকনা এইয়া",
  "বৰ অসমৰ মিজোভূমি।",
];

const CHORUS = [
  "আমি লুইতৰ পাৰ জিলিকাম,",
  "আমি আই অসমীক পোহৰাম,",
  "সাতভনীৰ চেনেহ জৰী",
  "লুচাইৰ বুকুত বৈ যাম",
  "লুচাইৰ বুকুত বৈ যাম...",
];

const STANZA_2 = [
  "কলং, মানস, কপিলী",
  "আয়ে বোৱা টঙালী,",
  "বড়ো, মিচিং, দেউৰী",
  "একতাৰ এই কাহিনী।",
  "আমি চ্যুকাফাৰ দেশৰ জীয়াৰী",
  "আমি চিলাৰায়ৰ তেজৰ সুঁহৰি,",
  "আমি চ্যুকাফাৰ দেশৰ জীয়াৰী",
  "আমি চিলাৰায়ৰ তেজৰ সুঁহৰি,",
  "আৰ'নাইখন মেৰিয়াই,",
  "বিৰি-গাছেং উৰুৱাই,",
  "লুইতৰ বুকুত মেলি পানচৈ,",
  "ওলালো সপোন ধিয়াই।",
];

const CREDITS: [string, string][] = [
  ["lyrics", "বিংকু বিদিপ দত্ত"],
  ["tune", "হিমাংশু দিহিঙীয়া"],
  ["plan", "আব্দুল ৰাজাক আহমেদ"],
];

function Stanza({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-1.5">
      {lines.map((l, i) => (
        <p key={i} className="font-serif-display text-lg sm:text-xl leading-relaxed text-stone-800">
          {l}
        </p>
      ))}
    </div>
  );
}

function SongContent() {
  const { t } = useLang();
  const creditLabel = {
    lyrics: t.song.creditLyrics,
    tune: t.song.creditTune,
    plan: t.song.creditPlan,
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      {/* simple header */}
      <header className="bg-[#1a0f0f] text-amber-50 sticky top-0 z-50">
        <div className="h-1.5 gamosa-strip" />
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/insta/logo.jpg"
              alt="Assam Association MZU logo"
              width={40}
              height={40}
              className="rounded-full bg-white ring-2 ring-[#D4A017]"
            />
            <span className="font-serif font-bold">{t.nav.brand1}</span>
          </Link>
          <div className="flex items-center gap-3">
            <LangToggle compact />
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white rounded-full ring-1 ring-[#D4A017] transition"
            >
              {t.song.back}
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3 text-[#9E1B1E]">
            ✦ {t.song.kicker} ✦
          </p>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1a0f0f]">
            {t.song.title}
          </h1>
          <p className="mt-3 text-stone-600">(অসম এছ'চিয়েছন, মিজোৰাম বিশ্ববিদ্যালয়)</p>
          <p className="mt-2 text-stone-500 text-sm max-w-xl mx-auto">{t.song.sub}</p>
        </div>

        {/* original magazine page */}
        <figure className="rounded-3xl overflow-hidden ring-1 ring-[#9E1B1E]/15 shadow-sm bg-white mb-8">
          <Image
            src="/magazaine/magazine-song.jpg"
            alt={t.song.imageAlt}
            width={1269}
            height={1599}
            className="w-full h-auto"
            priority
          />
        </figure>

        {/* readable lyrics */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 ring-1 ring-[#9E1B1E]/15 shadow-sm border-t-4 border-[#9E1B1E]">
          <Stanza lines={STANZA_1} />
          <div className="my-6 rounded-2xl bg-[#FFF7E6] ring-1 ring-[#D4A017]/50 p-6">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#9E1B1E] mb-3">
              ～ {t.song.chorus} ～
            </p>
            <Stanza lines={CHORUS} />
          </div>
          <Stanza lines={STANZA_2} />
          <div className="my-6 rounded-2xl bg-[#FFF7E6] ring-1 ring-[#D4A017]/50 p-6">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#9E1B1E] mb-3">
              ～ {t.song.chorus} ～
            </p>
            <Stanza lines={CHORUS} />
          </div>
          <div className="mt-6 pt-5 border-t border-stone-200 grid gap-1.5 text-stone-700">
            {CREDITS.map(([k, v]) => (
              <p key={k}>
                <strong className="text-[#9E1B1E]">
                  {creditLabel[k as keyof typeof creditLabel]}:
                </strong>{" "}
                {v}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/#magazine"
            className="px-6 py-3 rounded-full font-semibold bg-[#D4A017] hover:bg-[#b78c12] text-[#1a0f0f] transition"
          >
            {t.song.magazineBtn}
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full font-semibold ring-1 ring-[#9E1B1E]/40 text-[#9E1B1E] hover:bg-[#9E1B1E]/5 transition"
          >
            {t.song.back}
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function SongPage() {
  return (
    <LanguageProvider>
      <SongContent />
    </LanguageProvider>
  );
}
