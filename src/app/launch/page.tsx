"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LanguageProvider, useLang } from "@/components/Language";
import { LangToggle } from "@/components/Navbar";

const LIVE_URL = "https://assam-wheat.vercel.app";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
  LIVE_URL
)}`;

type Phase = "ready" | "flying" | "revealed";

const CONFETTI_COLORS = ["#9E1B1E", "#D4A017", "#FFFBEB", "#166534", "#E7C873"];

function LaunchContent() {
  const { lang } = useLang();
  const as = lang === "as";

  const [mins, setMins] = useState(1);
  const [secs, setSecs] = useState(0);
  const [left, setLeft] = useState(60);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>("ready");
  const [copied, setCopied] = useState(false);
  const [qrOk, setQrOk] = useState(true);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<AudioContext | null>(null);

  const beep = useCallback((freq: number, dur = 0.15) => {
    try {
      if (!audioRef.current)
        audioRef.current = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)();
      const ctx = audioRef.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.18, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur);
    } catch {
      /* audio unavailable — stay silent */
    }
  }, []);

  const confetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.3,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 3.5,
      s: 5 + Math.random() * 7,
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.25,
      c: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    }));
    const start = performance.now();
    const frame = (now: number) => {
      if (now - start > 5000) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
        ctx.restore();
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  const doLaunch = useCallback(() => {
    if (phase !== "ready") return;
    setRunning(false);
    if (tickRef.current) clearInterval(tickRef.current);
    setPhase("flying");
    beep(220, 0.8);
    setTimeout(() => beep(523, 0.2), 3400);
    setTimeout(() => {
      beep(659, 0.25);
      setTimeout(() => beep(784, 0.5), 200);
    }, 3650);
    setTimeout(() => {
      setPhase("revealed");
      confetti();
    }, 3600);
  }, [phase, beep, confetti]);

  // countdown ticker
  useEffect(() => {
    if (!running) return;
    tickRef.current = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          if (tickRef.current) clearInterval(tickRef.current);
          setRunning(false);
          return 0;
        }
        if (v <= 6) beep(880, 0.12);
        return v - 1;
      });
    }, 1000);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [running, beep]);

  // auto-launch at zero
  useEffect(() => {
    if (left === 0 && phase === "ready") doLaunch();
  }, [left, phase, doLaunch]);

  const applyPreset = (m: number, s: number) => {
    setRunning(false);
    if (tickRef.current) clearInterval(tickRef.current);
    setMins(m);
    setSecs(s);
    setLeft(m * 60 + s);
  };

  const resetAll = () => {
    setRunning(false);
    if (tickRef.current) clearInterval(tickRef.current);
    setPhase("ready");
    setLeft(mins * 60 + secs);
    setCopied(false);
  };

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const urgent = left <= 10 && phase === "ready";

  return (
    <div className="min-h-screen hero-pattern text-amber-50 flex flex-col">
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40" />
      <div className="h-2 gamosa-strip" />

      <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col items-center justify-center px-4 py-10 text-center">
        <div className="flex items-center gap-3 self-end">
          <LangToggle compact />
          <Link href="/" className="text-xs text-amber-100/60 hover:text-white underline underline-offset-4">
            {as ? "← ঘৰ" : "← Home"}
          </Link>
        </div>

        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E7C873] mt-2">
          {as ? "অসম সন্থা • মিজোৰাম বিশ্ববিদ্যালয়" : "Assam Association • Mizoram University"}
        </p>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-bold mt-3">
          {as ? "ৱেবছাইট মুকলি" : "Website Launch"} 🚀
        </h1>
        <p className="mt-2 text-amber-100/70">
          {as ? "টাইমাৰ শূন্য হলেই ৰকেট উৰিব — বা LAUNCH টিপক!" : "Rocket flies at zero — or hit LAUNCH now!"}
        </p>

        {/* countdown */}
        {phase === "ready" && (
          <>
            <div
              className={`font-mono font-bold tabular-nums mt-8 text-7xl sm:text-8xl tracking-wider ${
                urgent ? "text-red-400 animate-pulse" : "text-amber-50"
              }`}
            >
              {mm}:{ss}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
              <label className="flex items-center gap-1.5 bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-2">
                {as ? "মিনিট" : "Min"}
                <input
                  type="number"
                  min={0}
                  max={99}
                  value={mins}
                  onChange={(e) => {
                    const m = Math.max(0, Math.min(99, Number(e.target.value) || 0));
                    setMins(m);
                    setLeft(m * 60 + secs);
                  }}
                  className="w-12 bg-transparent text-center outline-none font-bold"
                />
              </label>
              <label className="flex items-center gap-1.5 bg-white/10 ring-1 ring-white/20 rounded-full px-4 py-2">
                {as ? "ছেকেণ্ড" : "Sec"}
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={secs}
                  onChange={(e) => {
                    const s = Math.max(0, Math.min(59, Number(e.target.value) || 0));
                    setSecs(s);
                    setLeft(mins * 60 + s);
                  }}
                  className="w-12 bg-transparent text-center outline-none font-bold"
                />
              </label>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
              {[
                [0, 10, "0:10"],
                [0, 30, "0:30"],
                [1, 0, "1:00"],
                [5, 0, "5:00"],
              ].map(([m, s, label]) => (
                <button
                  key={label}
                  onClick={() => applyPreset(m as number, s as number)}
                  className="px-3 py-1.5 rounded-full ring-1 ring-white/25 text-amber-100/80 hover:bg-white/10 transition"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setRunning(!running)}
                className="px-6 py-3 rounded-full font-semibold bg-white/10 ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                {running ? (as ? "⏸ বিৰতি" : "⏸ Pause") : as ? "▶ আৰম্ভ" : "▶ Start"}
              </button>
              <button
                onClick={resetAll}
                className="px-6 py-3 rounded-full font-semibold ring-1 ring-white/30 hover:bg-white/10 transition"
              >
                {as ? "↺ পুনৰ" : "↺ Reset"}
              </button>
            </div>

            <button
              onClick={doLaunch}
              className="mt-8 px-12 py-5 rounded-full text-2xl font-black tracking-widest bg-[#9E1B1E] hover:bg-[#c22222] text-white ring-4 ring-[#D4A017] shadow-[0_0_50px_-10px_rgba(212,160,23,0.8)] hover:scale-105 active:scale-95 transition"
            >
              🚀 {as ? "মুকলি কৰক!" : "LAUNCH!"}
            </button>
          </>
        )}

        {/* reveal */}
        {phase !== "ready" && (
          <div className="mt-8">
            {phase === "flying" && (
              <p className="text-2xl font-bold text-[#E7C873] animate-pulse">
                {as ? "ৰকেট উৰিছে...!" : "Liftoff...!"}
              </p>
            )}
            {phase === "revealed" && (
              <div className="bg-white text-stone-900 rounded-3xl p-8 sm:p-10 ring-4 ring-[#D4A017] shadow-2xl max-w-xl mx-auto">
                <p className="text-4xl">🎉</p>
                <h2 className="font-serif-display text-3xl sm:text-4xl font-bold mt-2">
                  {as ? "মুকলি হ'ল!" : "We are Live!"}
                </h2>
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-4 text-xl sm:text-2xl font-mono font-bold text-[#9E1B1E] break-all hover:underline underline-offset-4"
                >
                  {LIVE_URL.replace("https://", "")}
                </a>
                {qrOk && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={QR}
                    alt="QR code to the live website"
                    width={180}
                    height={180}
                    onError={() => setQrOk(false)}
                    className="mx-auto mt-4 rounded-2xl ring-1 ring-stone-300"
                  />
                )}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <a
                    href={LIVE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white transition"
                  >
                    {as ? "লাইভ চাওক ↗" : "Visit Live Site ↗"}
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(LIVE_URL);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="px-6 py-3 rounded-full font-semibold ring-1 ring-stone-300 hover:bg-stone-100 transition"
                  >
                    {copied ? (as ? "✓ কপি হ'ল!" : "✓ Copied!") : as ? "লিংক কপি" : "Copy Link"}
                  </button>
                  <button
                    onClick={resetAll}
                    className="px-6 py-3 rounded-full font-semibold text-stone-500 hover:text-stone-800 transition"
                  >
                    {as ? "↺ পুনৰ চলাওক" : "↺ Replay"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* rocket overlay */}
      {phase !== "ready" && (
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 -translate-x-1/2 z-30 transition-[bottom] ease-in"
          style={{
            bottom: phase === "flying" ? "115%" : "-15%",
            transitionDuration: phase === "flying" ? "3600ms" : "0ms",
          }}
        >
          <div className="text-7xl sm:text-8xl -rotate-12 animate-pulse">🚀</div>
          <div className="mx-auto -mt-2 h-16 w-8 rounded-b-full bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 blur-[2px] animate-pulse" />
          {phase === "flying" &&
            [0, 1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="smoke-puff"
                style={{
                  left: `${-30 + i * 12 + (i % 2) * 6}px`,
                  animationDelay: `${i * 0.45}s`,
                }}
              />
            ))}
        </div>
      )}

      <div className="h-2 gamosa-strip" />
    </div>
  );
}

export default function LaunchPage() {
  return (
    <LanguageProvider>
      <LaunchContent />
    </LanguageProvider>
  );
}
