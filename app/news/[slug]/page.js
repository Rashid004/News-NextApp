/** @format */

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

function NewsDetailsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="mb-8">
        <div className="relative w-full h-96 mb-4">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
        <time dateTime={newsItem.date} className="text-gray-600">
          {newsItem.date}
        </time>
      </header>
      <p className="text-lg leading-relaxed">{newsItem.content}</p>
    </article>
  );
}

export default NewsDetailsPage;
