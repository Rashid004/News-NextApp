/** @format */

import Link from "next/link";

function MainHeader() {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center gap-2 text-gray-500">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainHeader;
