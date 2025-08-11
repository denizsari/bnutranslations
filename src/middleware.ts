import type { NextRequest } from "next/server";

export function middleware(_req: NextRequest) {
  return;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.\w+$).*)"],
};


