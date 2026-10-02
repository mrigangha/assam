"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Dict } from "./Language";

export type Member = {
  name: string;
  role: string;
  initial: string;
  desc: string;
  link: string;
};

export type EventItem = {
  date: string;
  title: string;
  desc: string;
};

const MEMBERS_KEY = "aamzu-members";
const EVENTS_KEY = "aamzu-events";
const AUTH_KEY = "aamzu-admin";

// Simple gate for the community admin panel (client-side only).
export const ADMIN_USER = "Assam";
const ADMIN_PASS = "MZUSET@123";

function load<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

type Store = {
  authed: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  savedMembers: Member[] | null;
  saveMembers: (m: Member[]) => void;
  savedEvents: EventItem[] | null;
  saveEvents: (e: EventItem[]) => void;
  resetAll: () => void;
};

const AdminContext = createContext<Store>({
  authed: false,
  login: () => false,
  logout: () => {},
  savedMembers: null,
  saveMembers: () => {},
  savedEvents: null,
  saveEvents: () => {},
  resetAll: () => {},
});

export function AdminProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [savedMembers, setSavedMembers] = useState<Member[] | null>(null);
  const [savedEvents, setSavedEvents] = useState<EventItem[] | null>(null);

  useEffect(() => {
    setAuthed(localStorage.getItem(AUTH_KEY) === "1");
    setSavedMembers(load<Member[]>(MEMBERS_KEY));
    setSavedEvents(load<EventItem[]>(EVENTS_KEY));
  }, []);

  const login = (u: string, p: string) => {
    const ok = u === ADMIN_USER && p === ADMIN_PASS;
    if (ok) {
      setAuthed(true);
      localStorage.setItem(AUTH_KEY, "1");
    }
    return ok;
  };

  const logout = () => {
    setAuthed(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const saveMembers = (m: Member[]) => {
    setSavedMembers(m);
    localStorage.setItem(MEMBERS_KEY, JSON.stringify(m));
  };

  const saveEvents = (e: EventItem[]) => {
    setSavedEvents(e);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(e));
  };

  const resetAll = () => {
    setSavedMembers(null);
    setSavedEvents(null);
    localStorage.removeItem(MEMBERS_KEY);
    localStorage.removeItem(EVENTS_KEY);
  };

  return (
    <AdminContext.Provider
      value={{ authed, login, logout, savedMembers, saveMembers, savedEvents, saveEvents, resetAll }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminStore() {
  return useContext(AdminContext);
}

// Public sections use this: saved admin edits win, otherwise translated defaults.
export function useSiteContent(t: Dict) {
  const { savedMembers, savedEvents } = useAdminStore();
  const members: Member[] =
    savedMembers ??
    t.team.members.map(([name, role, initial, desc]) => ({
      name,
      role,
      initial,
      desc,
      link: "",
    }));
  const events: EventItem[] =
    savedEvents ??
    t.events.items.map(([date, title, desc]) => ({ date, title, desc }));
  return { members, events };
}
