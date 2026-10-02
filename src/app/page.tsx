"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import InstaFeed from "@/components/InstaFeed";

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

const CULTURE = [
  {
    emoji: "🥁",
    title: "Bihu – Soul of Assam",
    desc: "Rongali, Kongali & Bhogali Bihu. Dhol, pepa, gogona, hucari and mukoli bihu dance — we celebrate it together in Aizawl every spring.",
  },
  {
    emoji: "🧣",
    title: "Gamosa & Mekhela",
    desc: "The white-red gamosa is our pride — a symbol of respect, love and identity. Worn at every welcome, felicitation and Bihu stage.",
  },
  {
    emoji: "🎩",
    title: "Jaapi & Xorai",
    desc: "The bamboo jaapi hat and bell-metal xorai tray — heritage of hospitality you will also spot in our real association logo.",
  },
  {
    emoji: "🍚",
    title: "Axomiya Khana",
    desc: "Pitha-laru, ladu, kumol chaul, masor tenga, khar & bamboo-shoot. Our food stalls & picnic are the most loved at MZU fests.",
  },
  {
    emoji: "🦏",
    title: "Kaziranga Pride",
    desc: "One-horned rhino, mighty Brahmaputra, Kamakhya & Sivadol — we carry Assam's stories to the hills of Mizoram.",
  },
  {
    emoji: "🎶",
    title: "Bhaona & Sattriya",
    desc: "Srimanta Sankardev's Ekasarana heritage, Borgeet, Sattriya dance & bhaona — classical soul we showcase on MZU stage.",
  },
];

// Real coordinator list transcribed from the scraped Instagram poster
// (Admission Help Desk 2026-2027, instagram.com/p/DYl13kzTHFC/)
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

const TEAM = [
  { name: "President", role: "President", initial: "P", desc: "Leads the association & represents us in MZU student forums." },
  { name: "Vice President", role: "Vice President", initial: "V", desc: "Supports events, hostels & inter-association coordination." },
  { name: "General Secretary", role: "General Secretary", initial: "G", desc: "Planning, meetings, records & day-to-day execution." },
  { name: "Cultural Secy.", role: "Cultural Secretary", initial: "C", desc: "Bihu choreography, music, dress & stage decoration." },
  { name: "Finance Secy.", role: "Treasurer", initial: "F", desc: "Membership, budgeting & transparent accounts." },
  { name: "Help-Desk Lead", role: "Admission Help-Desk", initial: "H", desc: "Freshers' first contact — see real coordinators below." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <Navbar />

      {/* ============ HERO (real logo + real poster) ============ */}
      <section id="home" className="hero-pattern relative overflow-hidden pt-28 pb-0 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 grid lg:grid-cols-2 gap-10 items-center text-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-[#D4A017]/60 text-[#E7C873] text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5">
              <Image src="/insta/logo.jpg" alt="logo" width={20} height={20} className="rounded-full" />
              @assam_association_mzu • 234 followers • 94 posts
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-amber-50 leading-[1.1]">
              Assam Association
              <span className="block text-[#E7C873]">Mizoram University</span>
            </h1>
            <p className="mt-5 text-amber-100/85 text-base sm:text-lg leading-relaxed max-w-xl">
              <strong className="text-white">Assam Association, Mizoram University</strong> —
              home away from home for Assamese students at MZU. Logo & posters on this
              site are scraped from our real Instagram — freshers, Bihu in Aizawl,
              Admission Help-Desk and Axomiya culture, all here.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#join"
                className="px-6 py-3 rounded-full font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white ring-1 ring-[#D4A017] shadow-lg transition"
              >
                Join the Family →
              </a>
              <a
                href="#instagram"
                className="px-6 py-3 rounded-full font-semibold bg-white/10 hover:bg-white/20 text-amber-50 ring-1 ring-white/30 transition"
              >
                Real Instagram Feed
              </a>
              <a
                href={INSTA_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full font-semibold bg-[#D4A017] hover:bg-[#b78c12] text-[#1a0f0f] transition"
              >
                📸 @assam_association_mzu
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 max-w-md gap-4">
              {[
                ["94", "IG Posts"],
                ["234", "Followers"],
                ["10", "Help-Desk Schools"],
              ].map(([n, l]) => (
                <div key={l} className="bg-white/5 ring-1 ring-white/15 rounded-2xl py-3 text-center">
                  <p className="text-2xl font-bold text-[#E7C873]">{n}</p>
                  <p className="text-xs uppercase tracking-widest text-amber-100/70">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real scraped poster + logo badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-6 bg-[#D4A017]/20 blur-3xl rounded-full" />
              <div className="relative bg-white rounded-3xl overflow-hidden ring-4 ring-[#D4A017] shadow-2xl">
                <Image
                  src="/insta/post-helpdesk-1.jpg"
                  alt="Scraped Instagram poster: Assam Association presents Mizoram University Admission Help Desk Session 2026-2027"
                  width={640}
                  height={853}
                  className="w-full h-auto"
                  priority
                />
                <div className="flex items-center gap-3 px-4 py-3 bg-white border-t border-stone-200">
                  <Image src="/insta/logo.jpg" alt="Real association logo from Instagram" width={40} height={40} className="rounded-full ring-1 ring-[#D4A017]" />
                  <div className="text-left min-w-0">
                    <p className="text-sm font-bold text-stone-900 truncate">assam_association_mzu</p>
                    <p className="text-xs text-stone-500">Scraped from Instagram • 14 likes • <a className="underline" href={HELP_DESK_POST} target="_blank" rel="noreferrer">open post ↗</a></p>
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
            📢 <strong>Admission Help-Desk 2026–27 open!</strong> Real coordinators below — scraped from{" "}
            <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="underline underline-offset-2">this Instagram post</a>.
          </p>
          <a href="#join" className="shrink-0 bg-[#FFFBEB] text-[#9E1B1E] font-semibold px-4 py-1.5 rounded-full hover:bg-white transition">
            Get Help →
          </a>
        </div>
      </div>

      {/* ============ ABOUT (real logo) ============ */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="About Us"
            title="A small Assam in Aizawl"
            sub="The Assamese students' community at Mizoram University, Tanhril — seniors, juniors, researchers & alumni, one pariyal."
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
              <h3 className="font-serif-display text-2xl font-bold">Our real emblem — from Instagram</h3>
              <p className="mt-2 text-stone-600 leading-relaxed">
                This is the actual profile picture of{" "}
                <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="text-[#9E1B1E] font-semibold underline underline-offset-2">
                  @assam_association_mzu
                </a>{" "}
                (saved as <code>public/insta/logo.jpg</code>, see{" "}
                <code>public/insta/ATTRIBUTION.txt</code> for scrape method). Red circular seal —
                “ASSAM ASSOCIATION” on top arc, “MIZORAM UNIVERSITY” below, jaapi-xorai
                heritage motif at the centre with a ribbon. It now serves as our navbar,
                hero badge, footer and favicon.
              </p>
              <p className="mt-2 text-sm text-stone-500">
                234 Followers • 3 Following • 94 Posts (at scrape time, Oct 2026).
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "🤝 Who We Are",
                d: "Every Assamese student admitted to MZU automatically becomes part of the family — from Dhemaji to Dhubri, Silchar to Sivasagar. We bridge home and hostel.",
              },
              {
                t: "🎯 Our Mission",
                d: "No Axomiya should feel alone in Mizoram. Support in admission, accommodation, language, health & homesickness — plus a vibrant cultural life.",
              },
              {
                t: "🌉 What We Do",
                d: "Freshers' welcome, Bihu festivals, help-desk, blood-donation, sports, food fests, farewell — and friendship with Mizo & other state associations.",
              },
            ].map((c) => (
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
            kicker="Axomiya Culture"
            title="What we carry to Mizoram"
            sub="Six glimpses of Assam we proudly showcase at MZU fests, Virthli & University Week."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CULTURE.map((c) => (
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
            kicker="Scraped from Instagram"
            title="Featured: Admission Help-Desk 2026–27"
            sub="Real poster + caption pulled from instagram.com/p/DYl13kzTHFC/ — 14 likes. The association's help-desk assigns coordinators per MZU school."
          />
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white text-stone-900 rounded-3xl overflow-hidden ring-1 ring-[#D4A017]/50">
              <Image src="/insta/post-helpdesk-1.jpg" alt="Scraped poster" width={640} height={853} className="w-full h-auto" />
              <div className="p-5 flex items-center gap-3">
                <Image src="/insta/logo.jpg" alt="logo" width={44} height={44} className="rounded-full ring-1 ring-[#D4A017]" />
                <div className="text-sm">
                  <p className="font-bold">assam_association_mzu</p>
                  <p className="text-stone-500">Admission Help Desk (Session 2026–2027) • <a className="underline text-[#9E1B1E]" href={HELP_DESK_POST} target="_blank" rel="noreferrer">view on Instagram ↗</a></p>
                </div>
              </div>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-200 pt-4">
                “The Assam Association, Mizoram University, has initiated an Admission Help Desk to assist
                students seeking admission to different departments of Mizoram University. Students can
                directly contact the respective coordinators for: admission process • department info •
                hostel facilities • campus life and other guidance.”
              </div>
            </div>
            <div className="grid gap-4">
              {[
                ["April", "Rongali Bihu Celebration", "Our biggest night — husori, bihu dance, pitha feast & cultural exchange with Mizo friends."],
                ["Aug – Sep", "Freshers' Meet & Welcome", "Aadarani ceremony for new Assamese students with gamosa, guidance & city tour."],
                ["Oct", "Picnic & Sports Day", "Lakeside picnic, cricket/football friendlies with other state associations."],
                ["Jan", "Bhogali Bihu / Uruka Feast", "Community feast & bonfire night, Mizoram edition."],
                ["May", "Farewell & Biday", "Gamosa & xorai honour for graduating seniors."],
              ].map(([d, t, x]) => (
                <div key={t} className="bg-white/[0.06] ring-1 ring-white/15 rounded-2xl p-5">
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-[#1a0f0f] px-3 py-1 rounded-full">{d}</span>
                  <h3 className="font-bold text-lg mt-2">{t}</h3>
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
            kicker="Live Feed"
            title="Instagram — @assam_association_mzu"
            sub="Official embeds load live from Instagram. Saved copies in public/insta/ keep the site working offline."
          />
          <InstaFeed />
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Committee"
            title="Meet the Team"
            sub="Elected student volunteers. For the current committee, check Instagram highlights — or send names via DM to update this page."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div key={m.role} className="card-hover bg-white rounded-3xl p-6 ring-1 ring-stone-200 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#9E1B1E] text-white font-serif-display text-2xl font-bold flex items-center justify-center ring-4 ring-[#D4A017]/40">
                  {m.initial}
                </div>
                <h3 className="mt-3 font-bold">{m.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#9E1B1E] font-bold">{m.role}</p>
                <p className="mt-2 text-sm text-stone-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY (real scraped photo first) ============ */}
      <section id="gallery" className="py-20 bg-[#FFF7E6] border-y border-[#D4A017]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Memories"
            title="Gallery"
            sub="First photo is scraped from Instagram; the rest are placeholders — drop real fest photos into public/gallery/ to fill the wall."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="card-hover col-span-2 row-span-2 relative rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-sm block">
              <Image src="/insta/post-helpdesk-1.jpg" alt="Scraped from Instagram: Admission Help Desk 2026-2027 poster" width={640} height={853} className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">📸 Real IG post • Help-Desk 2026–27 ↗</span>
            </a>
            {[
              ["Rongali Bihu Stage", "from-[#9E1B1E] to-[#4c0e0e]", "💃"],
              ["Husori Team", "from-[#D4A017] to-[#7C2D12]", "🥁"],
              ["Freshers 2025", "from-emerald-800 to-emerald-950", "🎓"],
              ["Uruka Feast", "from-orange-700 to-[#1a0f0f]", "🔥"],
              ["Picnic Day", "from-sky-700 to-slate-900", "🏞️"],
              ["Farewell Night", "from-violet-900 to-[#1a0f0f]", "🪔"],
            ].map(([t, g, e]) => (
              <div key={t} className={`card-hover aspect-square rounded-3xl bg-gradient-to-br ${g} text-white p-4 flex flex-col justify-end shadow-sm ring-1 ring-black/10`}>
                <div className="text-3xl">{e}</div>
                <p className="font-semibold mt-1">{t}</p>
                <p className="text-xs text-white/70">Assam Association • MZU</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOIN + REAL HELP-DESK CONTACTS ============ */}
      <section id="join" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Join Us"
            title="New to MZU? Call your senior."
            sub="Real school-wise coordinators transcribed from the Instagram Help-Desk poster. Tap a number to call."
          />
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white rounded-3xl p-7 ring-1 ring-[#9E1B1E]/15 shadow-sm">
              <h3 className="font-bold text-xl mb-1">🆘 Admission Help-Desk — real contacts</h3>
              <p className="text-sm text-stone-500 mb-4">
                Source: <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="underline text-[#9E1B1E]">instagram.com/p/DYl13kzTHFC/</a> • Session 2026–2027
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
                <h3 className="font-bold text-xl mb-4">📝 Membership Form (demo)</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Dhanyabad! This is a demo form — connect it to Google Forms / WhatsApp to go live.");
                  }}
                  className="grid gap-3"
                >
                  <input required placeholder="Full name" className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                  <div className="grid grid-cols-2 gap-3">
                    <input required placeholder="Department" className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                    <input required placeholder="Phone / WhatsApp" className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                  </div>
                  <input placeholder="Home district in Assam" className="px-4 py-3 rounded-xl ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none" />
                  <button className="mt-1 px-6 py-3 rounded-xl font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white transition">
                    Request to Join →
                  </button>
                </form>
              </div>
              <div className="bg-[#1a0f0f] text-amber-50 rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 gamosa-strip" />
                <h3 className="font-bold text-xl">🙏 Support Us</h3>
                <p className="mt-2 text-amber-100/80 text-[15px]">
                  Bihu stage, sound, gamosa for freshers & feast — all run on small contributions.
                </p>
                <div className="mt-4 flex gap-3">
                  <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-[#9E1B1E] font-semibold text-sm">Donate</a>
                  <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full ring-1 ring-white/50 text-sm font-semibold">DM on Instagram</a>
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
                  <p className="font-serif-display font-bold text-lg">Assam Association</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#E7C873]">Mizoram University</p>
                </div>
              </div>
              <p className="mt-4 text-amber-100/70 text-sm leading-relaxed">
                Tanhril, Aizawl, Mizoram 796004<br />
                <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white font-semibold">
                  @assam_association_mzu
                </a>{" "}• 234 followers • 94 posts<br />
                <a href="https://mzu.edu.in" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white">mzu.edu.in</a>
              </p>
            </div>
            <div>
              <p className="font-bold mb-3 text-[#E7C873] uppercase tracking-widest text-xs">Quick Links</p>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {["#home|Home","#about|About","#culture|Culture","#events|Events","#instagram|Instagram","#team|Team","#gallery|Gallery","#join|Join Us"].map((s) => {
                  const [h, l] = s.split("|");
                  return <a key={h+l} href={h} className="py-1.5 text-amber-100/80 hover:text-white">{l}</a>;
                })}
              </div>
            </div>
            <div>
              <p className="font-bold mb-3 text-[#E7C873] uppercase tracking-widest text-xs">Instagram</p>
              <div className="flex flex-wrap gap-2">
                <a href={INSTA_PROFILE} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-[#D4A017] text-[#1a0f0f] text-sm font-semibold hover:bg-[#b78c12] transition">📸 @assam_association_mzu</a>
                <a href={HELP_DESK_POST} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-sm hover:bg-white/20 transition">📌 Help-Desk post</a>
              </div>
              <p className="mt-3 text-xs text-amber-100/60 leading-relaxed">
                Logo & poster scraped from the public profile via oEmbed/embed (see{" "}
                <code>public/insta/ATTRIBUTION.txt</code>). Images © Assam Association, MZU.
                Full 94-post feed needs login — embeds above stay live automatically.
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-100/60">
            <p>© {new Date().getFullYear()} Assam Association, Mizoram University • Made with ♥ in Aizawl</p>
            <p>জয় আই অসম • Next.js single-page site • Scroll to explore ↑</p>
          </div>
        </div>
      </section>
    </div>
  );
}
