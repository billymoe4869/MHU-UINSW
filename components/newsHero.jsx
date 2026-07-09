
import NewsCard from "./public/NewsCard";
import { getLatestNews } from "@/lib/service/news";

export default async function NewsHero() {
  const berita = await getLatestNews();
  return (
      <div className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 mx-auto p-4 gap-4 grid-cols-1">
        {berita.map((data) => {
          return (
            <NewsCard
              key={data.id}
              title={data.title}
              slug={data.slug}
              thumbnailUrl={data.thumbnailUrl}
              publishedAt={data.publishedAt}
              content={data.content}
            />
          );
        })}
      </div>
  );
}
