/** @format */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl  bg-[#222] rounded-lg shadow-md  mx-auto  py-8 mt-36">
      <div className="flex items-center justify-center flex-col ">
        <h2 className="text-2xl md:text-3xl font-medium text-white">
          Not Found 🚨
        </h2>
        <p className="text-gray-200 text-xl">
          Could not find requested resource
        </p>
        <Link href="/">
          <button className="bg-gray-300 text-black px-2 py-3 rounded-sm text-xl mt-2">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
