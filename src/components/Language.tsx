"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "as";

const en = {
  nav: {
    brand1: "Assam Association",
    brand2: "Mizoram University",
    home: "Home",
    about: "About",
    culture: "Culture",
    events: "Events",
    instagram: "Magazine",
    team: "Team",
    gallery: "Gallery",
    join: "Join Us",
    instaBtn: "Instagram ↗",
    menu: "Toggle menu",
  },
  hero: {
    title1: "Assam Association",
    title2: "Mizoram University",
    para: "Home away from home for Assamese students at MZU. The logo & photos on this site are from our real Instagram — freshers, Bihu in Aizawl, Admission Help-Desk and Axomiya culture, all here.",
    joinBtn: "Join the Family →",
    feedBtn: "Read Our Magazine",
    instaBtn: "📸 @assam_association_mzu",
    instaLine: "Moments from our Instagram",
    follow: "follow ↗",
  },
  slides: {
    captions: [
      "Shraddhanjali to Zubeen Garg — tribute by the association",
      "Memorial with gamosa, diyas & flowers",
      "Bohagi Utsav — Bihu dance on the MZU stage",
      "Honoured guests welcomed with gamosa",
      "Tree plantation drive",
      "Certificate felicitation — team photo",
    ],
    credit: "📸 Assam Association, MZU",
  },
  notice: {
    text: "Admission Help-Desk 2026–27 open! Real coordinators below.",
    btn: "Get Help →",
  },
  about: {
    kicker: "About Us",
    title: "A small Assam in Aizawl",
    sub: "The Assamese students' community at Mizoram University, Tanhril — seniors, juniors, researchers & alumni, one pariyal.",
    emblemTitle: "Our Emblem",
    emblemDesc:
      "Our official emblem — a red circular seal carrying “ASSAM ASSOCIATION” on the top arc and “MIZORAM UNIVERSITY” below. At its heart, the jaapi and xorai honour Assam's heritage of welcome and hospitality, carried with pride from the Brahmaputra valley to the hills of Mizoram.",
    cards: [
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
        d: "Freshers' welcome, Bihu festivals, help-desk, sports, food fests and farewell — all to promote and celebrate Assamese culture in Mizoram, alongside friendship with Mizo & other state associations.",
      },
    ],
  },
  culture: {
    kicker: "Axomiya Culture",
    title: "What we carry to Mizoram",
    sub: "Four glimpses of Assam we proudly showcase at MZU fests, Virthli & University Week.",
    songBtn: "🎵 Our Association Song →",
    songShort: "Song",
    cards: [
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
        title: "Axomiya Khaidya",
        desc: "Pitha-laru, ladu, kumol chaul, masor tenga, khar & bamboo-shoot. Our food stalls & picnic are the most loved at MZU fests.",
      },
    ],
  },
  events: {
    kicker: "Year Round",
    title: "Events & Traditions",
    sub: "From admission help in summer to Uruka feast in winter — our year at a glance.",
    scraped: "Scraped from Instagram • 14 likes •",
    openPost: "open post ↗",
    posterCaption:
      "“The Assam Association, Mizoram University, has initiated an Admission Help Desk to assist students seeking admission to different departments of Mizoram University. Students can directly contact the respective coordinators for: admission process • department info • hostel facilities • campus life and other guidance.”",
    items: [
      ["April", "Rongali Bihu Celebration", "Our biggest night — husori, bihu dance, pitha feast & cultural exchange with Mizo friends."],
      ["Aug – Sep", "Freshers' Meet & Welcome", "Aadarani ceremony for new Assamese students with gamosa, guidance & city tour."],
      ["Oct", "Picnic & Sports Day", "Lakeside picnic, cricket/football friendlies with other state associations."],
      ["Jan", "Bhogali Bihu / Uruka Feast", "Community feast & bonfire night, Mizoram edition."],
      ["May", "Farewell & Biday", "Gamosa & xorai honour for graduating seniors."],
    ] as [string, string, string][],
  },
  magazine: {
    kicker: "Our Magazine",
    title: "Xasipat — AAMZU 2026",
    sub: "67 pages of poems, songs, stories and memories by Assamese students at MZU. Read it right here or download the PDF.",
    edition: "Annual Edition 2026",
    pages: "67 pages",
    desc: "The association's annual magazine — writings, artwork and photographs from the year, including the executive committee and the association song.",
    readBtn: "📖 Read Magazine ↗",
    downloadBtn: "⬇ Download PDF",
    previewBtn: "👁 Preview Here",
    closePreview: "Close preview ✕",
    cover1Alt: "Magazine page: executive committee 2025–26",
    cover1Cap: "Executive Committee 2025–26",
    cover2Alt: "Magazine page: association song in Assamese",
    cover2Cap: "Association song (সমবেত সংগীত)",
    note: "PDF: public/magazaine/Xasipat-Magazine-AAMZU-2026.pdf. Replace the file to publish a new edition.",
  },
  song: {
    back: "← Back to Home",
    kicker: "Association Song",
    title: "Theme Song",
    sub: "The association song of Assam Association, Mizoram University — as printed in the Xasipat magazine.",
    chorus: "Chorus",
    creditLyrics: "Lyrics",
    creditTune: "Tune",
    creditPlan: "Planning",
    magazineBtn: "📖 Read the Magazine ↗",
    imageAlt: "Magazine page showing the association song in Assamese",
  },
  team: {
    kicker: "Committee",
    title: "Meet the Team",
    sub: "Executive Committee 2025–26 — names, posts & photos as published in the Xasipat magazine.",
    groupCap: "Group photo — Executive Committee 2025–26",
    members: [
      ["Angshuman Das Tariang", "President", "A", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-01.jpg"],
      ["Tajmin Sultana", "Vice-President", "T", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-02.jpg"],
      ["Abdul Rajak Ahmed", "General Secretary", "A", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-03.jpg"],
      ["Hirakjyoti Sandikai", "Asst. General Secretary", "H", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-04.jpg"],
      ["Uddipan Nath", "Treasurer", "U", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-05.jpg"],
      ["Dulal Borah", "Cultural Secretary", "D", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-06.jpg"],
      ["Mithinga Narzary", "Asst. Cultural Secretary", "M", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-07.jpg"],
      ["Chayanika Gogoi", "Asst. Cultural Secretary", "C", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-08.jpg"],
      ["Mintu Medhi", "Literary Secretary", "M", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-09.jpg"],
      ["Shatabdi Priya Phukan", "Asst. Literary Secretary", "S", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-10.jpg"],
      ["Saurabhjyoti Sworgiary", "Info & Publicity Secretary", "S", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-11.jpg"],
      ["Bhargav Borkakoti", "Info & Publicity Secretary", "B", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-12.jpg"],
      ["Himashree Das", "Member", "H", "Executive Committee 2025–26 • Assam Association, MZU", "/team/member-13.jpg"],
    ] as [string, string, string, string, string][],
  },
  gallery: {
    kicker: "Memories",
    title: "Gallery",
    realBadge: "📸 Real IG post • Help-Desk 2026–27 ↗",
    realAlt: "Scraped from Instagram: Admission Help Desk 2026-2027 poster",
    assoc: "Assam Association • MZU",
    tiles: [
      ["Rongali Bihu 2025", "💃"],
      ["Rongali Bihu 2026", "🥁"],
      ["Fresher Social 2025", "🎓"],
    ] as [string, string][],
  },
  join: {
    kicker: "Join Us",
    title: "New to MZU? Call your senior.",
    sub: "Real school-wise coordinators transcribed from the Instagram Help-Desk poster. Tap a number to call.",
    deskTitle: "🆘 Admission Help-Desk — real contacts",
    source: "Source:",
    formTitle: "📝 Membership Form (demo)",
    form: {
      name: "Full name",
      dept: "Department",
      phone: "Phone / WhatsApp",
      district: "Home district in Assam",
      btn: "Request to Join →",
      alert: "Dhanyabad! This is a demo form — connect it to Google Forms / WhatsApp to go live.",
    },
    supportTitle: "🙏 Support Us",
    supportDesc: "Bihu stage, sound, gamosa for freshers & feast — all run on small contributions.",
    donate: "Donate",
    dm: "DM on Instagram",
  },
  footer: {
    quick: "Quick Links",
    insta: "Instagram",
    profileBtn: "📸 @assam_association_mzu",
    postBtn: "📌 Help-Desk post",
    stats: "@assam_association_mzu • 234 followers • 94 posts",
    credit:
      "Logo & poster scraped from the public profile via oEmbed/embed (see public/insta/ATTRIBUTION.txt). Images © Assam Association, MZU. Full 94-post feed needs login — embeds above stay live automatically.",
    rights: "Assam Association, Mizoram University • Made with ♥ in Aizawl",
    tag: "জয় আই অসম • Next.js single-page site • Scroll to explore ↑",
  },
  countdown: {
    title: "Website Launch In",
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    live: "🎉 We are Live! Visit",
    liveBtn: "assam-wheat.vercel.app ↗",
    launching: "🚀 Launching...",
  },
};

export type Dict = typeof en;

const as: Dict = {
  nav: {
    brand1: "অসম সন্থা",
    brand2: "মিজোৰাম বিশ্ববিদ্যালয়",
    home: "ঘৰ",
    about: "আমাৰ বিষয়ে",
    culture: "সংস্কৃতি",
    events: "অনুষ্ঠান",
    instagram: "আলোচনী",
    team: "সমিতি",
    gallery: "গেলাৰী",
    join: "যোগদান",
    instaBtn: "ইনষ্টাগ্ৰাম ↗",
    menu: "মেনু খোলক",
  },
  hero: {
    title1: "অসম সন্থা",
    title2: "মিজোৰাম বিশ্ববিদ্যালয়",
    para: "এমজেডইউৰ অসমীয়া ছাত্ৰ-ছাত্ৰীৰ বাবে ঘৰৰ দৰে আপোন ঠাই। এই ৱেবছাইটৰ ল'গ' আৰু ফটো আমাৰ প্ৰকৃত ইনষ্টাগ্ৰামৰ পৰা লোৱা — নৱাগত আদৰণি, আইজলত বিহু, ভৰ্তি সহায় কেন্দ্ৰ আৰু অসমীয়া সংস্কৃতি, সকলো ইয়াতে।",
    joinBtn: "পৰিয়ালত যোগ দিয়ক →",
    feedBtn: "আমাৰ আলোচনী পঢ়ক",
    instaBtn: "📸 @assam_association_mzu",
    instaLine: "আমাৰ ইনষ্টাগ্ৰামৰ মুহূৰ্ত",
    follow: "অনুসৰণ ↗",
  },
  slides: {
    captions: [
      "জুবিন গাৰ্গলৈ শ্ৰদ্ধাঞ্জলি — সন্থাৰ তৰফৰ পৰা",
      "গামোচা, চাকি আৰু ফুলেৰে স্মৃতিচাৰণ",
      "ব'হাগী উৎসৱ — এমজেডইউ মঞ্চত বিহু নৃত্য",
      "গামোচাৰে সম্বৰ্ধিত অতিথিসকল",
      "গছপুলি ৰোপণ অভিযান",
      "প্ৰমাণপত্ৰ সম্বৰ্ধনা — দলীয় ফটো",
    ],
    credit: "📸 অসম সন্থা, এমজেডইউ",
  },
  notice: {
    text: "ভৰ্তি সহায় কেন্দ্ৰ ২০২৬–২৭ মুকলি! তলত প্ৰকৃত সমন্বয়কসকল।",
    btn: "সহায় লওক →",
  },
  about: {
    kicker: "আমাৰ বিষয়ে",
    title: "আইজলত এখন সৰু অসম",
    sub: "মিজোৰাম বিশ্ববিদ্যালয়, তানহ্ৰিলৰ অসমীয়া ছাত্ৰ সমাজ — জ্যেষ্ঠ, কনিষ্ঠ, গৱেষক আৰু প্ৰাক্তন ছাত্ৰ, এক পৰিয়াল।",
    emblemTitle: "আমাৰ প্ৰতীক",
    emblemDesc:
      "আমাৰ চৰকাৰী প্ৰতীক — ৰঙা ঘূৰণীয়া মোহৰ, ওপৰত “ASSAM ASSOCIATION”, তলত “MIZORAM UNIVERSITY”। মাজত জাপি-শৰাই — অসমৰ আতিথ্যৰ ঐতিহ্যৰ চিহ্ন, ব্ৰহ্মপুত্ৰ উপত্যকাৰ পৰা মিজোৰামৰ পাহাৰলৈ গৌৰৱেৰে কঢ়িয়াই অনা।",
    cards: [
      {
        t: "🤝 আমি কোন",
        d: "এমজেডইউত ভৰ্তি হোৱা প্ৰতিজন অসমীয়া ছাত্ৰই এই পৰিয়ালৰ অংশ — ধেমাজিৰ পৰা ধুবুৰীলৈ, শিলচৰৰ পৰা শিৱসাগৰলৈ। আমি ঘৰ আৰু ছাত্ৰাবাসৰ সেতু।",
      },
      {
        t: "🎯 আমাৰ লক্ষ্য",
        d: "মিজোৰামত কোনো অসমীয়াই অকলশৰীয়া অনুভৱ কৰিব নালাগে। ভৰ্তি, থকা-খোৱা, ভাষা, স্বাস্থ্য আৰু ঘৰৰ মনত পৰাত সহায় — লগতে জীৱন্ত সাংস্কৃতিক জীৱন।",
      },
      {
        t: "🌉 আমি কি কৰোঁ",
        d: "নৱাগত আদৰণি, বিহু উৎসৱ, সহায় কেন্দ্ৰ, খেল, খাদ্য মেলা আৰু বিদায় — মিজোৰামত অসমীয়া সংস্কৃতিৰ প্ৰচাৰ আৰু উদযাপনৰ বাবে, লগতে মিজো তথা অন্য ৰাজ্যৰ সন্থাৰ সৈতে বন্ধুত্ব।",
      },
    ],
  },
  culture: {
    kicker: "অসমীয়া সংস্কৃতি",
    title: "মিজোৰামলৈ আমি যি লৈ যাওঁ",
    sub: "এমজেডইউ উৎসৱত আমি গৌৰৱেৰে প্ৰদৰ্শন কৰা অসমৰ চাৰিটা ঝলক।",
    songBtn: "🎵 আমাৰ সন্থাৰ গীত →",
    songShort: "গীত",
    cards: [
      {
        emoji: "🥁",
        title: "বিহু – অসমৰ প্ৰাণ",
        desc: "ৰঙালী, কঙালী আৰু ভোগালী বিহু। ঢোল, পেঁপা, গগনা, হুঁচৰি আৰু মুকলি বিহু নৃত্য — প্ৰতি বসন্ততে আমি আইজলত একেলগে উদযাপন কৰোঁ।",
      },
      {
        emoji: "🧣",
        title: "গামোচা আৰু মেখেলা",
        desc: "বগা-ৰঙা গামোচা আমাৰ গৌৰৱ — সন্মান, মৰম আৰু পৰিচয়ৰ প্ৰতীক। প্ৰতিটো আদৰণি, সম্বৰ্ধনা আৰু বিহু মঞ্চত পৰিধান কৰা হয়।",
      },
      {
        emoji: "🎩",
        title: "জাপি আৰু শৰাই",
        desc: "বাঁহৰ জাপি টুপী আৰু কাঁহৰ শৰাই — আতিথ্যৰ ঐতিহ্য, আমাৰ প্ৰকৃত সন্থাৰ ল'গ'তো দেখিব।",
      },
      {
        emoji: "🍚",
        title: "অসমীয়া খাদ্য",
        desc: "পিঠা-লাৰু, লাড়ু, কোমল চাউল, মাছৰ টেঙা, খাৰ আৰু বাঁহগাজ। এমজেডইউ উৎসৱত আমাৰ খাদ্য বিপণী আৰু বনভোজ আটাইতকৈ জনপ্ৰিয়।",
      },
    ],
  },
  events: {
    kicker: "বছৰজুৰি",
    title: "অনুষ্ঠান আৰু পৰম্পৰা",
    sub: "গ্ৰীষ্মৰ ভৰ্তি সহায়ৰ পৰা শীতৰ উৰুকা ভোজলৈ — এক নজৰত আমাৰ বছৰটো।",
    scraped: "ইনষ্টাগ্ৰামৰ পৰা লোৱা • ১৪ লাইক •",
    openPost: "প'ষ্ট খোলক ↗",
    posterCaption:
      "“অসম সন্থা, মিজোৰাম বিশ্ববিদ্যালয়ে মিজোৰাম বিশ্ববিদ্যালয়ৰ বিভিন্ন বিভাগত ভৰ্তি বিচৰা ছাত্ৰ-ছাত্ৰীক সহায় কৰিবলৈ এখন ভৰ্তি সহায় কেন্দ্ৰ আৰম্ভ কৰিছে। ছাত্ৰ-ছাত্ৰীয়ে ভৰ্তি প্ৰক্ৰিয়া • বিভাগৰ তথ্য • ছাত্ৰাবাসৰ সুবিধা • কেম্পাছ জীৱন আৰু অন্য নিৰ্দেশনাৰ বাবে সংশ্লিষ্ট সমন্বয়কৰ সৈতে সরাসৰি যোগাযোগ কৰিব পাৰে।”",
    items: [
      ["এপ্ৰিল", "ৰঙালী বিহু উদযাপন", "আমাৰ আটাইতকৈ ডাঙৰ নিশা — হুঁচৰি, বিহু নৃত্য, পিঠা ভোজ আৰু মিজো বন্ধুসকলৰ সৈতে সাংস্কৃতিক বিনিময়।"],
      ["আগ – চেপ্তে", "নৱাগত আদৰণি", "গামোচাৰে নতুন অসমীয়া ছাত্ৰ-ছাত্ৰীৰ আদৰণি অনুষ্ঠান, নিৰ্দেশনা আৰু চহৰ ভ্ৰমণ।"],
      ["অক্টো", "বনভোজ আৰু ক্ৰীড়া দিৱস", "হ্ৰদৰ পাৰত বনভোজ, অন্য ৰাজ্যৰ সন্থাৰ সৈতে ক্ৰিকেট/ফুটবল বন্ধুত্বপূৰ্ণ খেল।"],
      ["জানু", "ভোগালী বিহু / উৰুকা ভোজ", "সমূহীয়া ভোজ আৰু জুইৰ নিশা, মিজোৰাম সংস্কৰণ।"],
      ["মে'", "বিদায় সম্বৰ্ধনা", "স্নাতক জ্যেষ্ঠসকললৈ গামোচা আৰু শৰাইৰে সন্মান।"],
    ],
  },
  magazine: {
    kicker: "আমাৰ আলোচনী",
    title: "Xasipat — AAMZU 2026",
    sub: "এমজেডইউৰ অসমীয়া ছাত্ৰ-ছাত্ৰীৰ কবিতা, গীত, গল্প আৰু স্মৃতিৰে ৬৭ পৃষ্ঠা। ইয়াতে পঢ়ক বা PDF ডাউনল'ড কৰক।",
    edition: "বাৰ্ষিক সংখ্যা ২০২৬",
    pages: "৬৭ পৃষ্ঠা",
    desc: "সন্থাৰ বাৰ্ষিক আলোচনী — বছৰটোৰ লেখা, ছবি আৰু ফটো, কাৰ্যনিৰ্বাহক সমিতি আৰু সন্থাৰ গীতসহ।",
    readBtn: "📖 আলোচনী পঢ়ক ↗",
    downloadBtn: "⬇ PDF ডাউনল'ড",
    previewBtn: "👁 ইয়াতে চাওক",
    closePreview: "প্ৰিভিউ বন্ধ কৰক ✕",
    cover1Alt: "আলোচনীৰ পৃষ্ঠা: কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬",
    cover1Cap: "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬",
    cover2Alt: "আলোচনীৰ পৃষ্ঠা: অসমীয়াত সন্থাৰ গীত",
    cover2Cap: "সন্থাৰ গীত (সমবেত সংগীত)",
    note: "PDF: public/magazaine/Xasipat-Magazine-AAMZU-2026.pdf। নতুন সংখ্যা প্ৰকাশ কৰিবলৈ ফাইল সলনি কৰক।",
  },
  song: {
    back: "← ঘৰলৈ উভতক",
    kicker: "সন্থাৰ গীত",
    title: "সমবেত সংগীত",
    sub: "অসম সন্থা, মিজোৰাম বিশ্ববিদ্যালয়ৰ সন্থাৰ গীত — ছাছিপাত আলোচনীত প্ৰকাশিত।",
    chorus: "ধুৱা",
    creditLyrics: "কথা",
    creditTune: "সুৰ",
    creditPlan: "পৰিকল্পনা",
    magazineBtn: "📖 আলোচনী পঢ়ক ↗",
    imageAlt: "অসমীয়াত সন্থাৰ গীত দেখুওৱা আলোচনীৰ পৃষ্ঠা",
  },
  team: {
    kicker: "সমিতি",
    title: "দলটোক লগ কৰক",
    sub: "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ — ছাছিপাত আলোচনীত প্ৰকাশিত নাম, পদ আৰু ফটো।",
    groupCap: "সমূহীয়া আলোকচিত্ৰ — কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬",
    members: [
      ["অংশুমান দাস তাবিয়াং", "সভাপতি", "অ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-01.jpg"],
      ["তাজমিন চুলতানা", "উপ-সভাপতি", "ত", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-02.jpg"],
      ["আব্দুল ৰাজাক আহমেদ", "সাধাৰণ সম্পাদক", "আ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-03.jpg"],
      ["হীৰকজ্যোতি সন্দিকৈ", "সহঃ সাধাৰণ সম্পাদক", "হ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-04.jpg"],
      ["উদ্দীপন নাথ", "কোষাধ্যক্ষ", "উ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-05.jpg"],
      ["দুলাল বৰা", "সাংস্কৃতিক সম্পাদক", "দ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-06.jpg"],
      ["মিথিংগা নাৰ্জাৰী", "সহঃ সাংস্কৃতিক সম্পাদক", "ম", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-07.jpg"],
      ["চয়নিকা গগৈ", "সহঃ সাংস্কৃতিক সম্পাদক", "চ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-08.jpg"],
      ["মিন্টু মেধি", "সাহিত্য সম্পাদক", "ম", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-09.jpg"],
      ["শতাব্দী প্ৰিয়া ফুকন", "সহঃ সাহিত্য সম্পাদক", "শ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-10.jpg"],
      ["সৌৰভজ্যোতি স্বৰ্গীয়াৰী", "তথ্য আৰু প্ৰচাৰ সম্পাদক", "স", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-11.jpg"],
      ["ভাৰ্গৱ বৰকাকতি", "তথ্য আৰু প্ৰচাৰ সম্পাদক", "ভ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-12.jpg"],
      ["হিমাশ্ৰী দাস", "সদস্যা", "হ", "কাৰ্যনিৰ্বাহক সমিতি ২০২৫–২৬ • অসম সন্থা, এমজেডইউ", "/team/member-13.jpg"],
    ],
  },
  gallery: {
    kicker: "স্মৃতি",
    title: "গেলাৰী",
    realBadge: "📸 প্ৰকৃত ইনষ্টা প'ষ্ট • সহায় কেন্দ্ৰ ২০২৬–২৭ ↗",
    realAlt: "ইনষ্টাগ্ৰামৰ পৰা লোৱা: ভৰ্তি সহায় কেন্দ্ৰ ২০২৬-২০২৭ প'ষ্টাৰ",
    assoc: "অসম সন্থা • এমজেডইউ",
    tiles: [
      ["ৰঙালী বিহু ২০২৫", "💃"],
      ["ৰঙালী বিহু ২০২৬", "🥁"],
      ["নৱাগত আদৰণি ২০২৫", "🎓"],
    ],
  },
  join: {
    kicker: "যোগদান",
    title: "এমজেডইউত নতুন? আপোনাৰ জ্যেষ্ঠক ফোন কৰক।",
    sub: "ইনষ্টাগ্ৰামৰ সহায় কেন্দ্ৰৰ প'ষ্টাৰৰ পৰা লোৱা বিদ্যালয়ভিত্তিক প্ৰকৃত সমন্বয়ক। নম্বৰত টিপি ফোন কৰক।",
    deskTitle: "🆘 ভৰ্তি সহায় কেন্দ্ৰ — প্ৰকৃত যোগাযোগ",
    source: "উৎস:",
    formTitle: "📝 সদস্যপদ ফৰ্ম (ডেম')",
    form: {
      name: "সম্পূৰ্ণ নাম",
      dept: "বিভাগ",
      phone: "ফোন / হোৱাটছএপ",
      district: "অসমৰ ঘৰৰ জিলা",
      btn: "যোগদানৰ অনুৰোধ →",
      alert: "ধন্যবাদ! এয়া ডেম' ফৰ্ম — লাইভ কৰিবলৈ Google ফৰ্ম / হোৱাটছএপৰ সৈতে সংযোগ কৰক।",
    },
    supportTitle: "🙏 আমাক সহায় কৰক",
    supportDesc: "বিহু মঞ্চ, শব্দ, নৱাগতৰ বাবে গামোচা আৰু ভোজ — সকলো সৰু বৰঙণিৰে চলে।",
    donate: "দান কৰক",
    dm: "ইনষ্টাগ্ৰামত ডিএম কৰক",
  },
  footer: {
    quick: "দ্ৰুত লিংক",
    insta: "ইনষ্টাগ্ৰাম",
    profileBtn: "📸 @assam_association_mzu",
    postBtn: "📌 সহায় কেন্দ্ৰৰ প'ষ্ট",
    stats: "@assam_association_mzu • ২৩৪ অনুসৰণকাৰী • ৯৪ পোষ্ট",
    credit:
      "ল'গ' আৰু প'ষ্টাৰ ৰাজহুৱা প্ৰ'ফাইলৰ পৰা oEmbed/এমবেডযোগে লোৱা (public/insta/ATTRIBUTION.txt চাওক)। ছবি © অসম সন্থা, এমজেডইউ। সম্পূৰ্ণ ৯৪টা প'ষ্টৰ ফিডৰ বাবে লগইন লাগে — ওপৰৰ এমবেডবোৰ জীৱন্ত হৈ থাকে।",
    rights: "অসম সন্থা, মিজোৰাম বিশ্ববিদ্যালয় • আইজলত ♥ ৰে নিৰ্মিত",
    tag: "জয় আই অসম • Next.js এক-পৃষ্ঠাৰ ৱেবছাইট • অন্বেষণ কৰিবলৈ স্ক্ৰ'ল কৰক ↑",
  },
  countdown: {
    title: "ৱেবছাইট মুকলিলৈ",
    days: "দিন",
    hours: "ঘণ্টা",
    mins: "মিনিট",
    secs: "ছেকেণ্ড",
    live: "🎉 মুকলি হ'ল! চাওক",
    liveBtn: "assam-wheat.vercel.app ↗",
    launching: "🚀 মুকলি হৈ আছে...",
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aamzu-lang");
    if (saved === "en" || saved === "as") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("aamzu-lang", l);
    document.documentElement.lang = l === "as" ? "as" : "en";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === "as" ? as : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
