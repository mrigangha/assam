"use client";

import { useEffect, useState } from "react";
import { useLang } from "./Language";
import {
  ADMIN_USER,
  useAdminStore,
  type EventItem,
  type Member,
} from "./AdminStore";

function toMembers(t: ReturnType<typeof useLang>["t"]): Member[] {
  return t.team.members.map(([name, role, initial, desc]) => ({
    name,
    role,
    initial,
    desc,
    link: "",
  }));
}

function toEvents(t: ReturnType<typeof useLang>["t"]): EventItem[] {
  return t.events.items.map(([date, title, desc]) => ({ date, title, desc }));
}

const inputCls =
  "w-full px-3 py-2 rounded-lg ring-1 ring-stone-300 focus:ring-[#9E1B1E] outline-none text-sm text-stone-900 bg-white";

export default function AdminPanel() {
  const { t } = useLang();
  const {
    authed,
    login,
    logout,
    savedMembers,
    saveMembers,
    savedEvents,
    saveEvents,
    resetAll,
  } = useAdminStore();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [tab, setTab] = useState<"members" | "events">("members");

  const [draftMembers, setDraftMembers] = useState<Member[] | null>(null);
  const [draftEvents, setDraftEvents] = useState<EventItem[] | null>(null);

  // Seed the editable draft from saved data (or current-language defaults).
  useEffect(() => {
    if (authed && draftMembers === null)
      setDraftMembers(savedMembers ?? toMembers(t));
    if (authed && draftEvents === null)
      setDraftEvents(savedEvents ?? toEvents(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  // Auto-save every change.
  useEffect(() => {
    if (draftMembers !== null) saveMembers(draftMembers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftMembers]);
  useEffect(() => {
    if (draftEvents !== null) saveEvents(draftEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftEvents]);

  if (!authed) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 ring-1 ring-[#9E1B1E]/15 shadow-sm">
        <h3 className="font-bold text-xl text-center">🔐 {t.admin.loginTitle}</h3>
        <p className="text-sm text-stone-500 text-center mt-1">{t.admin.loginSub}</p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setError(!(await login(user.trim(), pass)));
          }}
          className="grid gap-3 mt-5"
        >
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder={t.admin.userLabel}
            autoComplete="username"
            className={inputCls}
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder={t.admin.passLabel}
            autoComplete="current-password"
            className={inputCls}
          />
          {error && (
            <p className="text-sm font-semibold text-[#9E1B1E]">{t.admin.error}</p>
          )}
          <button className="px-6 py-3 rounded-xl font-semibold bg-[#9E1B1E] hover:bg-[#7f1414] text-white transition">
            {t.admin.loginBtn}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 ring-1 ring-[#9E1B1E]/15 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("members")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
              tab === "members"
                ? "bg-[#9E1B1E] text-white"
                : "ring-1 ring-stone-300 text-stone-700 hover:bg-stone-100"
            }`}
          >
            {t.admin.membersTab}
          </button>
          <button
            onClick={() => setTab("events")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
              tab === "events"
                ? "bg-[#9E1B1E] text-white"
                : "ring-1 ring-stone-300 text-stone-700 hover:bg-stone-100"
            }`}
          >
            {t.admin.eventsTab}
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              resetAll();
              setDraftMembers(toMembers(t));
              setDraftEvents(toEvents(t));
            }}
            className="px-4 py-2 rounded-full text-xs font-semibold ring-1 ring-stone-300 text-stone-600 hover:bg-stone-100 transition"
          >
            {t.admin.reset}
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#1a0f0f] text-amber-50 hover:bg-black transition"
          >
            {t.admin.logoutBtn}
          </button>
        </div>
      </div>

      <p className="mt-3 text-xs text-stone-500">
        {t.admin.note} ({t.admin.loggedInAs} <strong>{ADMIN_USER}</strong>)
      </p>

      {tab === "members" && draftMembers && (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {draftMembers.map((m, i) => (
            <div key={i} className="rounded-2xl ring-1 ring-stone-200 p-4 bg-[#FFFBEB] grid gap-2">
              <div className="grid grid-cols-[1fr_64px] gap-2">
                <input
                  value={m.name}
                  onChange={(e) => {
                    const c = [...draftMembers];
                    c[i] = { ...c[i], name: e.target.value };
                    setDraftMembers(c);
                  }}
                  placeholder={t.admin.fName}
                  className={inputCls}
                />
                <input
                  value={m.initial}
                  onChange={(e) => {
                    const c = [...draftMembers];
                    c[i] = { ...c[i], initial: e.target.value.slice(0, 3) };
                    setDraftMembers(c);
                  }}
                  placeholder={t.admin.fInitial}
                  className={`${inputCls} text-center`}
                />
              </div>
              <input
                value={m.role}
                onChange={(e) => {
                  const c = [...draftMembers];
                  c[i] = { ...c[i], role: e.target.value };
                  setDraftMembers(c);
                }}
                placeholder={t.admin.fRole}
                className={inputCls}
              />
              <textarea
                value={m.desc}
                onChange={(e) => {
                  const c = [...draftMembers];
                  c[i] = { ...c[i], desc: e.target.value };
                  setDraftMembers(c);
                }}
                placeholder={t.admin.fDesc}
                rows={2}
                className={inputCls}
              />
              <input
                value={m.link}
                onChange={(e) => {
                  const c = [...draftMembers];
                  c[i] = { ...c[i], link: e.target.value };
                  setDraftMembers(c);
                }}
                placeholder={t.admin.fLink}
                inputMode="url"
                className={inputCls}
              />
              <button
                onClick={() =>
                  setDraftMembers(draftMembers.filter((_, j) => j !== i))
                }
                className="text-xs font-semibold text-[#9E1B1E] hover:underline self-start"
              >
                {t.admin.delete} ✕
              </button>
            </div>
          ))}
          <button
            onClick={() =>
              setDraftMembers([
                ...draftMembers,
                { name: "", role: "", initial: "•", desc: "", link: "" },
              ])
            }
            className="rounded-2xl border-2 border-dashed border-[#D4A017]/60 p-4 text-sm font-semibold text-[#9E1B1E] hover:bg-amber-50 transition min-h-[120px]"
          >
            {t.admin.addMember} ＋
          </button>
        </div>
      )}

      {tab === "events" && draftEvents && (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {draftEvents.map((e, i) => (
            <div key={i} className="rounded-2xl ring-1 ring-stone-200 p-4 bg-[#FFFBEB] grid gap-2">
              <input
                value={e.date}
                onChange={(ev) => {
                  const c = [...draftEvents];
                  c[i] = { ...c[i], date: ev.target.value };
                  setDraftEvents(c);
                }}
                placeholder={t.admin.fDate}
                className={inputCls}
              />
              <input
                value={e.title}
                onChange={(ev) => {
                  const c = [...draftEvents];
                  c[i] = { ...c[i], title: ev.target.value };
                  setDraftEvents(c);
                }}
                placeholder={t.admin.fTitle}
                className={inputCls}
              />
              <textarea
                value={e.desc}
                onChange={(ev) => {
                  const c = [...draftEvents];
                  c[i] = { ...c[i], desc: ev.target.value };
                  setDraftEvents(c);
                }}
                placeholder={t.admin.fDesc}
                rows={2}
                className={inputCls}
              />
              <button
                onClick={() =>
                  setDraftEvents(draftEvents.filter((_, j) => j !== i))
                }
                className="text-xs font-semibold text-[#9E1B1E] hover:underline self-start"
              >
                {t.admin.delete} ✕
              </button>
            </div>
          ))}
          <button
            onClick={() =>
              setDraftEvents([
                ...draftEvents,
                { date: "", title: "", desc: "" },
              ])
            }
            className="rounded-2xl border-2 border-dashed border-[#D4A017]/60 p-4 text-sm font-semibold text-[#9E1B1E] hover:bg-amber-50 transition min-h-[120px]"
          >
            {t.admin.addEvent} ＋
          </button>
        </div>
      )}
    </div>
  );
}
