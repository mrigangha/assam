"use client";

import { useState } from "react";
import { useLang } from "./Language";

const PDF = "/magazaine/Xasipat-Magazine-AAMZU-2026.pdf";

export default function Magazine() {
  const { t } = useLang();
  const [preview, setPreview] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/[0.06] ring-1 ring-white/15 rounded-3xl p-7">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-[#1a0f0f] px-3 py-1 rounded-full">
              {t.magazine.edition}
            </span>
            <span className="text-xs uppercase tracking-widest border border-white/20 text-amber-100/70 px-3 py-1 rounded-full">
              {t.magazine.pages}
            </span>
          </div>
          <h3 className="font-serif-display text-2xl font-bold mt-3">
            Xasipat — AAMZU 2026
          </h3>
          <p className="mt-2 text-amber-100/75 text-[15px] leading-relaxed">
            {t.magazine.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={PDF}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#D4A017] hover:bg-[#b78c12] text-[#1a0f0f] font-semibold text-sm transition"
            >
              {t.magazine.readBtn}
            </a>
            <a
              href={PDF}
              download
              className="px-5 py-2.5 rounded-full bg-[#9E1B1E] hover:bg-[#7f1414] text-white ring-1 ring-[#D4A017] font-semibold text-sm transition"
            >
              {t.magazine.downloadBtn}
            </a>
            <button
              onClick={() => setPreview(!preview)}
              className="px-5 py-2.5 rounded-full ring-1 ring-white/30 text-sm font-semibold hover:bg-white/10 transition"
            >
              {preview ? t.magazine.closePreview : t.magazine.previewBtn}
            </button>
          </div>
          <p className="mt-3 text-xs text-amber-100/50">{t.magazine.note}</p>
      </div>

      {preview && (
        <iframe
          src={PDF}
          title="Xasipat magazine PDF"
          className="mt-6 w-full h-[75vh] rounded-3xl ring-1 ring-white/20 bg-white"
        />
      )}
    </div>
  );
}
