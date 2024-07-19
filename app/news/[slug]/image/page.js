/** @format */

import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function ImagePage({ params }) {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="w-full h-screen relative">
      <Image
        fill
        src={`/image/news/${newsItem.image}`}
        alt={newsItem.title}
        className="object-contain"
      />
    </div>
  );
}
