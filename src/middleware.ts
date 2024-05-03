import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  
  let variant = request.cookies.get("ab-cat-test")?.value || "control";
  let id = request.nextUrl.pathname.split("/")[2];

  console.log("\n");
  console.log(variant);

  if (variant !== "control") {
    id = `${id}-${variant}`;
    variant = "control";
  } else {
    variant = "blue";
  }

  console.log(variant, id);

  const response = NextResponse.rewrite(new URL(`/cats/${id}`, request.url));
  response.cookies.set("ab-cat-test", variant);

  return response;
}

export const config = {
  matcher: "/cats/:path*",
};
