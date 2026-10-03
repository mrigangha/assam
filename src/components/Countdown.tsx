"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./Language";

// ── Set the real event date/time here (IST) ──
const TARGET = new Date("2026-10-15T18:00:00+05:30");
const LIVE_URL = "https://assam-wheat.vercel.app";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    over: target - Date.now() <= 0,
    d: Math.floor(ms / 86400000),
    h: Math.floor(ms / 3600000) % 24,
    m: Math.floor(ms / 60000) % 60,
    s: Math.floor(ms / 1000) % 60,
  };
}

export default function Countdown() {
  const { t } = useLang();
  const [, setNow] = useState(() => Date.now());
  const launched = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { over, d, h, m, s } = diff(TARGET.getTime());

  // auto-launch: take the visitor to the live site shortly after zero
  useEffect(() => {
    if (over && !launched.current) {
      launched.current = true;
      const id = setTimeout(() => {
        window.location.href = LIVE_URL;
      }, 3000);
      return () => clearTimeout(id);
    }
  }, [over]);

  if (over) {
    return (
      <div className="mt-7 inline-flex flex-wrap items-center gap-3 bg-white/10 ring-1 ring-[#D4A017]/60 rounded-2xl px-5 py-3">
        <span className="text-amber-50 font-bold animate-pulse">{t.countdown.launching}</span>
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="font-mono font-bold text-[#E7C873] hover:underline underline-offset-4"
        >
          {t.countdown.liveBtn}
        </a>
      </div>
    );
  }

  const cells: [number, string][] = [
    [d, t.countdown.days],
    [h, t.countdown.hours],
    [m, t.countdown.mins],
    [s, t.countdown.secs],
  ];

  return (
    <div className="mt-7">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#E7C873] mb-2">
        ⏳ {t.countdown.title}
      </p>
      <div className="flex gap-2">
        {cells.map(([n, l]) => (
          <div
            key={l}
            className="bg-white/5 ring-1 ring-white/15 rounded-2xl px-3 py-2 text-center min-w-[64px]"
          >
            <p className="text-2xl font-bold tabular-nums text-amber-50">
              {String(n).padStart(2, "0")}
            </p>
            <p className="text-[11px] uppercase tracking-widest text-amber-100/70">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
