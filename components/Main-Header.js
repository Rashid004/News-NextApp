/** @format */

import Link from "next/link";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center mb-8 mx-auto max-w-7xl mt-8">
      <div className="font-['Inter',_sans-serif] text-2xl rounded">
        <Link
          href="/"
          className="text-[#e1e1d7] no-underline hover:text-[#e1e1d7] "
        >
          NextNews
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8 font-bold">
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
