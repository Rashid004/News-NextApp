/** @format */

import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsPage() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-center my-8">News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}

export default NewsPage;
