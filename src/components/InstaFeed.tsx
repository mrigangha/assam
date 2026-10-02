"use client";

import { useEffect } from "react";
import { useLang } from "./Language";

// Official Instagram embeds — load client-side so the feed is always live.
// To add more posts: copy a post URL from @assam_association_mzu and add its
// shortcode to POSTS below. No scraping needed after that.
const POSTS = [{ shortcode: "DYl13kzTHFC" }];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstaFeed() {
  const { t } = useLang();

  useEffect(() => {
    const src = "https://www.instagram.com/embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
      s.onload = () => window.instgrm?.Embeds.process();
    } else {
      window.instgrm?.Embeds.process();
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {POSTS.map((p) => (
        <div key={p.shortcode} className="flex flex-col items-center">
          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink={`https://www.instagram.com/p/${p.shortcode}/`}
            data-instgrm-version="14"
          >
            <a
              href={`https://www.instagram.com/p/${p.shortcode}/`}
              target="_blank"
              rel="noreferrer"
            >
              {t.insta.viewPost}
            </a>
          </blockquote>
          <p className="mt-2 text-sm text-amber-100/70 text-center max-w-md">
            {t.insta.caption}
          </p>
        </div>
      ))}
      <div className="bg-white/[0.06] ring-1 ring-white/15 rounded-3xl p-7 text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-[#E7C873] font-bold">
          {t.insta.live}
        </p>
        <h3 className="font-serif-display text-2xl font-bold mt-2">
          @assam_association_mzu
        </h3>
        <p className="mt-2 text-amber-100/75 text-[15px] leading-relaxed">
          {t.insta.para}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://www.instagram.com/assam_association_mzu/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#D4A017] hover:bg-[#b78c12] text-[#1a0f0f] font-semibold text-sm transition"
          >
            {t.insta.follow}
          </a>
          <a
            href="https://www.instagram.com/p/DYl13kzTHFC/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full ring-1 ring-white/30 text-sm font-semibold hover:bg-white/10 transition"
          >
            {t.insta.openPost}
          </a>
        </div>
        <p className="mt-3 text-xs text-amber-100/50">{t.insta.note}</p>
      </div>
    </div>
  );
}
