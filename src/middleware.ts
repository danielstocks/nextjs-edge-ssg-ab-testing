import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This example will just serve different variations on every other request
// for real-life A/B testing this is where you'd want to split traffic etc.
export function middleware(request: NextRequest) {
  let variant = request.cookies.get("ab-cat-test")?.value || "control";
  let id = request.nextUrl.pathname.split("/")[2];
  if (variant !== "control") {
    id = `${id}-${variant}`;
    variant = "control";
  } else {
    variant = "blue";
  }
  const response = NextResponse.rewrite(new URL(`/cats/${id}`, request.url));
  response.cookies.set("ab-cat-test", variant);
  return response;
}

export const config = {
  matcher: "/cats/:path*",
};
