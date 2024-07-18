/** @format */

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";

function NewsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">News Page</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {DUMMY_NEWS.map((newsItem) => (
          <li
            key={newsItem.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <Link href={`/news/${newsItem.slug}`} className="w-full">
              <div className="relative w-full h-48">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  layout="fill"
                  objectFit="cover"
                  className="border-b-2 border-gray-200"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center">
                  {newsItem.title}
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsPage;
