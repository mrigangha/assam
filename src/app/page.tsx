"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import InstaFeed from "@/components/InstaFeed";
import Slideshow from "@/components/Slideshow";
import { LanguageProvider, useLang } from "@/components/Language";

const INSTA_PROFILE = "https://www.instagram.com/assam_association_mzu/";
const HELP_DESK_POST = "https://www.instagram.com/p/DYl13kzTHFC/";

function SectionHeading({
  kicker,
  title,
  sub,
  light = false,
}: {
  kicker: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10">
      <p
        className={`text-xs font-bold tracking-[0.25em] uppercase mb-3 ${
          light ? "text-[#E7C873]" : "text-[#9E1B1E]"
        }`}
      >
        ✦ {kicker} ✦
      </p>
      <h2
        className={`font-serif-display text-3xl sm:text-4xl font-bold ${
          light ? "text-amber-50" : "text-[#1a0f0f]"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            light ? "text-amber-100/80" : "text-stone-600"
          }`}
        >
          {sub}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-[#D4A017]" />
        <span className="text-[#D4A017]">◆</span>
        <span className="h-px w-12 bg-[#D4A017]" />
      </div>
    </div>
  );
}

// Real coordinator list transcribed from the scraped Instagram poster
// (Admission Help Desk 2026-2027, instagram.com/p/DYl13kzTHFC/)
// Names & numbers are proper nouns — same in every language.
const HELP_DESK = [
  {
    school: "SEMIS (Economics, Management & Info Science)",
    contacts: [
      ["Abdul Rajak Ahmed", "9101927699"],
      ["Arindam Kalita", "8638154231"],
    ],
  },
  {
    school: "Social Sciences",
    contacts: [
      ["Prem Kumar Chetri", "7002718811"],
      ["Uddipan Nath", "8638050354"],
      ["Rishmita Zillie", "8812928681"],
    ],
  },
  {
    school: "Earth Science & Natural Resources",
    contacts: [
      ["Arnabneel Gogoi", "9859046725"],
      ["Nitish Dangoria", "9101333463"],
    ],
  },
  {
    school: "Life Sciences",
    contacts: [
      ["Angshuman Das Tariang", "9088905067"],
      ["Chhan Kumar Kalita", "6000141311"],
      ["Parnakshi Sharma", "8638192611"],
    ],
  },
  {
    school: "Medical & Para Medical Sciences",
    contacts: [
      ["Dhriti Chakravarthy", "6003134075"],
      ["Shivani Gogoi", "8473060784"],
    ],
  },
  {
    school: "Humanities & Languages",
    contacts: [
      ["Mintu Medhi", "9707462994"],
      ["Jipal Nath", "6002730054"],
    ],
  },
  {
    school: "Education",
    contacts: [
      ["Tajmin Sultana", "8134028642"],
      ["Dulal Borah", "9678497271"],
    ],
  },
  {
    school: "Physical Sciences",
    contacts: [
      ["Panchalika Dutta", "8638807285"],
      ["Barsha Rabha", "7086062680"],
      ["Shatabdi Priya Phukan", "8822475296"],
    ],
  },
  {
    school: "Engineering & Technology",
    contacts: [
      ["Bhargav Borkakoti", "9365889853"],
      ["Saurabh Swargiary", "7086937232"],
    ],
  },
  {
    school: "Fine Arts, Architecture & Fashion",
    contacts: [
      ["Rishav Deka", "8638947552"],
      ["Dristi Borah", "8822733954"],
    ],
  },
];

const GALLERY_GRADS = [
  "from-[#9E1B1E] to-[#4c0e0e]",
  "from-[#D4A017] to-[#7C2D12]",
  "from-emerald-800 to-emerald-950",
  "from-orange-700 to-[#1a0f0f]",
  "from-sky-700 to-slate-900",
  "from-violet-900 to-[#1a0f0f]",
];

function HomeContent() {
  const { t } = useLang();

  const QUICK_LINKS: [string, string][] = [
    ["#home", t.nav.home],
    ["#about", t.nav.about],
    ["#culture", t.nav.culture],
    ["#events", t.nav.events],
    ["#instagram", t.nav.instagram],
    ["#team", t.nav.team],
    ["#gallery", t.nav.gallery],
    ["#join", t.nav.join],
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <Navbar />

      {/* ============ HERO ============ */}
      <section id="home" className="hero-pattern relative overflow-hidden pt-28 pb-0 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 grid lg:grid-cols-2 gap-10 items-center text-left">
          <div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-amber-50 leading-[1.1]">
              {t.hero.title1}
              <span className="block text-[#E7C873]">{t.hero.title2}</span>
            </h1>
            <p className="mt-5 text-amber-100/85 text-base sm:text-lg leading-relaxed max-w-xl">
              {t.hero.para}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#join"
                className="px-6 py-3 rounded-full font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white ring-1 ring-[#D4A017] shadow-lg transition"
              >
                {t.hero.joinBtn}
              </a>
              <a
                href="#instagram"
                className="px-6 py-3 rounded-full font-semibold bg-white/10 hover:bg-white/20 text-amber-50 ring-1 ring-white/30 transition"
              >
                {t.hero.feedBtn}
              </a>
              <a
                href={INSTA_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full font-semibold bg-[#D4A017] hover:bg-[#b78c12] text-[#1a0f0f] transition"
              >
                {t.hero.instaBtn}
              </a>
            </div>
          </div>

          {/* Photo slideshow (public/slideshow/) + logo badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-6 bg-[#D4A017]/20 blur-3xl rounded-full" />
              <div className="relative">
                <Slideshow />
                <div className="mt-3 flex items-center gap-3 px-4 py-3 bg-white/95 rounded-2xl ring-1 ring-[#D4A017]/60">
                  <Image src="/insta/logo.jpg" alt="Real association logo from Instagram" width={40} height={40} className="rounded-full ring-1 ring-[#D4A017]" />
                  <div className="text-left min-w-0">
                    <p className="text-sm font-bold text-stone-900 truncate">assam_association_mzu</p>
                    <p className="text-xs text-stone-500">{t.hero.instaLine} • <a className="underline" href={INSTA_PROFILE} target="_blank" rel="noreferrer">{t.hero.follow}</a></p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#9E1B1E] text-white text-sm px-5 py-2 rounded-full ring-2 ring-[#D4A017] shadow-xl">
                অসম সন্থা • মিজোৰাম বিশ্ববিদ্যালয়
              </div>
            </div>
          </div>
        </div>
        <div className="h-3 gamosa-strip" />
      </section>

      {/* ============ NOTICE BAR ============ */}
      <div className="bg-[#9E1B1E] text-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p>
            📢 {t.notice.text}
          </p>
          <a href="#join" className="shrink-0 bg-[#FFFBEB] text-[#9E1B1E] font-semibold px-4 py-1.5 rounded-full hover:bg-white transition">
            {t.notice.btn}
          </a>
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker={t.about.kicker}
            title={t.about.title}
            sub={t.about.sub}
          />
          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start bg-white rounded-3xl p-7 ring-1 ring-[#9E1B1E]/15 shadow-sm mb-6">
            <Image
              src="/insta/logo.jpg"
              alt="Real logo scraped from Instagram: red circular Assam Association Mizoram University emblem with jaapi-xorai motif"
              width={160}
              height={160}
              className="rounded-3xl ring-2 ring-[#D4A017] bg-white mx-auto"
            />
            <div>
              <h3 className="font-serif-display text-2xl font-bold">{t.about.emblemTitle}</h3>
              <p className="mt-2 text-stone-600 leading-relaxed">
                {t.about.emblemDesc}
              </p>
              <p className="mt-2 text-sm text-stone-500">
                {t.about.emblemStats}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.cards.map((c) => (
              <div key={c.t} className="card-hover bg-white rounded-3xl p-7 ring-1 ring-[#9E1B1E]/15 shadow-sm border-t-4 border-[#9E1B1E]">
                <h3 className="text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-stone-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CULTURE ============ */}
      <section id="culture" className="py-20 bg-gradient-to-b from-[#FFF7E6] to-[#FFFBEB] border-y border-[#D4A017]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker={t.culture.kicker}
            title={t.culture.title}
            sub={t.culture.sub}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {t.culture.cards.map((c) => (
              <div key={c.title} className="card-hover bg-white rounded-3xl p-6 ring-1 ring-stone-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#9E1B1E]/10 flex items-center justify-center text-2xl mb-4">
                  {c.emoji}
                </div>
                <h3 className="font-bold text-lg mb-1.5">{c.title}</h3>
                <p className="text-stone-600 text-[15px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EVENTS + REAL POST ============ */}
      <section id="events" className="py-20 bg-[#1a0f0f] text-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            light
            kicker={t.events.kicker}
            title={t.events.title}
            sub={t.events.sub}
          />
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white text-stone-900 rounded-3xl overflow-hidden ring-1 ring-[#D4A017]/50">
              <Image src="/insta/post-helpdesk-1.jpg" alt={t.gallery.realAlt} width={640} height={853} className="w-full h-auto" />
              <div className="p-5 flex items-center gap-3">
                <Image src="/insta/logo.jpg" alt="logo" width={44} height={44} className="rounded-full ring-1 ring-[#D4A017]" />
                <div className="text-sm">
                  <p className="font-bold">assam_association_mzu</p>
                  <p className="text-stone-500">{t.insta.caption} • <a className="underline text-[#9E1B1E]" href={HELP_DESK_POST} target="_blank" rel="noreferrer">{t.events.openPost}</a></p>
                </div>
              </div>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-200 pt-4">
                {t.events.posterCaption}
              </div>
            </div>
            <div className="grid gap-4">
              {t.events.items.map(([d, title, x]) => (
                <div key={title} className="bg-white/[0.06] ring-1 ring-white/15 rounded-2xl p-5">
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-[#1a0f0f] px-3 py-1 rounded-full">{d}</span>
                  <h3 className="font-bold text-lg mt-2">{title}</h3>
                  <p className="text-amber-100/75 text-[15px]">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM LIVE ============ */}
      <section id="instagram" className="py-20 bg-[#241111] text-amber-50 border-y border-[#D4A017]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            light
            kicker={t.insta.kicker}
            title={t.insta.title}
            sub={t.insta.sub}
          />
          <InstaFeed />
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker={t.team.kicker}
            title={t.team.title}
            sub={t.team.sub}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.team.members.map((m) => (
              <div key={m[1]} className="card-hover bg-white rounded-3xl p-6 ring-1 ring-stone-200 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#9E1B1E] text-white font-serif-display text-2xl font-bold flex items-center justify-center ring-4 ring-[#D4A017]/40">
                  {m[2]}
                </div>
                <h3 className="mt-3 font-bold">{m[0]}</h3>
                <p className="text-xs uppercase tracking-widest text-[#9E1B1E] font-bold">{m[1]}</p>
                <p className="mt-2 text-sm text-stone-600">{m[3]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="py-20 bg-[#FFF7E6] border-y border-[#D4A017]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker={t.gallery.kicker}
            title={t.gallery.title}
            sub={t.gallery.sub}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="card-hover col-span-2 row-span-2 relative rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-sm block">
              <Image src="/insta/post-helpdesk-1.jpg" alt={t.gallery.realAlt} width={640} height={853} className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">{t.gallery.realBadge}</span>
            </a>
            {t.gallery.tiles.map(([title, e], i) => (
              <div key={title} className={`card-hover aspect-square rounded-3xl bg-gradient-to-br ${GALLERY_GRADS[i % GALLERY_GRADS.length]} text-white p-4 flex flex-col justify-end shadow-sm ring-1 ring-black/10`}>
                <div className="text-3xl">{e}</div>
                <p className="font-semibold mt-1">{title}</p>
                <p className="text-xs text-white/70">{t.gallery.assoc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOIN + REAL HELP-DESK CONTACTS ============ */}
      <section id="join" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker={t.join.kicker}
            title={t.join.title}
            sub={t.join.sub}
          />
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white rounded-3xl p-7 ring-1 ring-[#9E1B1E]/15 shadow-sm">
              <h3 className="font-bold text-xl mb-1">{t.join.deskTitle}</h3>
              <p className="text-sm text-stone-500 mb-4">
                {t.join.source} <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="underline text-[#9E1B1E]">instagram.com/p/DYl13kzTHFC/</a> • Session 2026–2027
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
                {HELP_DESK.map((h) => (
                  <div key={h.school} className="rounded-2xl ring-1 ring-stone-200 p-4 bg-[#FFFBEB]">
                    <p className="font-bold text-sm text-[#9E1B1E]">{h.school}</p>
                    <ul className="mt-2 space-y-1.5">
                      {h.contacts.map(([n, ph]) => (
                        <li key={n + ph} className="text-sm flex items-center justify-between gap-2">
                          <span className="text-stone-700">{n}</span>
                          <a href={`tel:+91${ph}`} className="shrink-0 font-mono font-semibold bg-[#1a0f0f] text-amber-50 px-2.5 py-1 rounded-full text-xs hover:bg-[#9E1B1E]">
                            {ph}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 grid gap-6 content-start">
              <div className="bg-white rounded-3xl p-7 ring-1 ring-[#9E1B1E]/15 shadow-sm">
                <h3 className="font-bold text-xl mb-4">{t.join.formTitle}</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(t.join.form.alert);
                  }}
                  className="grid gap-3"
                >
                  <input required placeholder={t.join.form.name} className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                  <div className="grid grid-cols-2 gap-3">
                    <input required placeholder={t.join.form.dept} className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                    <input required placeholder={t.join.form.phone} className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                  </div>
                  <input placeholder={t.join.form.district} className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                  <button className="mt-1 px-6 py-3 rounded-xl font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white transition">
                    {t.join.form.btn}
                  </button>
                </form>
              </div>
              <div className="bg-[#1a0f0f] text-amber-50 rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 gamosa-strip" />
                <h3 className="font-bold text-xl">{t.join.supportTitle}</h3>
                <p className="mt-2 text-amber-100/80 text-[15px]">
                  {t.join.supportDesc}
                </p>
                <div className="mt-4 flex gap-3">
                  <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-[#9E1B1E] font-semibold text-sm">{t.join.donate}</a>
                  <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full ring-1 ring-white/50 text-sm font-semibold">{t.join.dm}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT / FOOTER ============ */}
      <section id="contact" className="bg-[#1a0f0f] text-amber-50 pt-16 pb-8 relative">
        <div className="absolute top-0 left-0 right-0 h-2 gamosa-strip" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/insta/logo.jpg" alt="Real scraped logo" width={52} height={52} className="rounded-full bg-white ring-2 ring-[#D4A017]" />
                <div>
                  <p className="font-serif-display font-bold text-lg">{t.nav.brand1}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#E7C873]">{t.nav.brand2}</p>
                </div>
              </div>
              <p className="mt-4 text-amber-100/70 text-sm leading-relaxed">
                Tanhril, Aizawl, Mizoram 796004<br />
                <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white font-semibold">
                  @assam_association_mzu
                </a><br />
                {t.footer.stats}<br />
                <a href="https://mzu.edu.in" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white">mzu.edu.in</a>
              </p>
            </div>
            <div>
              <p className="font-bold mb-3 text-[#E7C873] uppercase tracking-widest text-xs">{t.footer.quick}</p>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {QUICK_LINKS.map(([h, l]) => (
                  <a key={h} href={h} className="py-1.5 text-amber-100/80 hover:text-white">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold mb-3 text-[#E7C873] uppercase tracking-widest text-xs">{t.footer.insta}</p>
              <div className="flex flex-wrap gap-2">
                <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-[#D4A017] text-[#1a0f0f] text-sm font-semibold hover:bg-[#b78c12] transition">{t.footer.profileBtn}</a>
                <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-sm hover:bg-white/20 transition">{t.footer.postBtn}</a>
              </div>
              <p className="mt-3 text-xs text-amber-100/60 leading-relaxed">
                {t.footer.credit}
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-100/60">
            <p>© {new Date().getFullYear()} {t.footer.rights}</p>
            <p>{t.footer.tag}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
