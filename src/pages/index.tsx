import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js Vercel Edge Middleware A/B Test</h1>
      <p>The following pages have been statically generated on build time</p>
      <ul>
        <li>
          <Link href={"cats/1"}>Cat 1</Link>
        </li>
        <li>
          <Link href={"cats/2"}>Cat 2</Link>
        </li>
        <li>
          <Link href={"cats/3"}>Cat 3</Link>
        </li>
      </ul>
    </div>
  );
}
