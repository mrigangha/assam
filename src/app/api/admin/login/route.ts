import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

// Credentials live ONLY here (server-side) — never shipped to the browser.
// Set them in `.env.local` (local) or your host's env vars (deploy):
//   ADMIN_USER=Assam
//   ADMIN_PASS=MZUSET@123
function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

export async function POST(req: Request) {
  let body: { username?: unknown; password?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { username, password } = body;
  const userOk =
    typeof username === "string" &&
    safeEqual(username, process.env.ADMIN_USER ?? "Assam");
  const passOk =
    typeof password === "string" &&
    safeEqual(password, process.env.ADMIN_PASS ?? "MZUSET@123");

  if (userOk && passOk) return NextResponse.json({ ok: true });
  return NextResponse.json({ ok: false }, { status: 401 });
}
