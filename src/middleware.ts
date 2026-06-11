import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
//  WARTUNGSMODUS-SCHALTER
//  Offline, solange SITE_LIVE != "true".
//  Online nehmen in Vercel: SITE_LIVE = true → Redeploy.
// ─────────────────────────────────────────────────────────────

const WARTUNGS_HTML = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>Bald verfügbar — Champagne LUTUN</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    background:#0c0a09; color:#fafaf9;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    min-height:100vh; display:flex; align-items:center; justify-content:center;
    text-align:center; padding:24px;
  }
  .label { font-size:12px; letter-spacing:.25em; text-transform:uppercase; color:#57534e; margin-bottom:32px; }
  h1 { font-family: Georgia, "Times New Roman", serif; font-size:clamp(40px,9vw,64px); font-weight:700; margin-bottom:24px; }
  h1 span { color:#dbb54f; }
  .rule { width:48px; height:1px; background:#a67a20; margin:0 auto 32px; }
  p { color:#a8a29e; line-height:1.6; max-width:24rem; margin:0 auto; }
  .sub { color:#78716c; font-size:14px; margin-top:8px; }
</style>
</head>
<body>
  <div>
    <p class="label">Champagne · France</p>
    <h1>Champagne <span>LUTUN</span></h1>
    <div class="rule"></div>
    <p>Unsere Website befindet sich derzeit im Aufbau.</p>
    <p class="sub">Wir sind in Kürze für Sie da.</p>
  </div>
</body>
</html>`;

export function middleware(req: NextRequest) {
  if (process.env.SITE_LIVE === "true") {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  return new NextResponse(WARTUNGS_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
