import { getAllNews } from "@/lib/service/news";
import NewsCard2 from "@/components/public/card/NewsCard2";
import Link from "next/link";

export default async function NewsPage({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage = 9;

  const news = await getAllNews(currentPage);
  const hasNextPage = news.length === perPage;

  return (
    <section className="max-w-5xl mt-8 p-4 mx-auto">
      <h1 className="text-3xl text-stone-800 font-semibold mb-2">Berita</h1>
      <p className="mb-6 text-stone-500">
        Informasi dan kabar terbaru seputar Program Studi Manajemen Haji dan
        Umrah
      </p>
      {news.length === 0 ? (
        <p className="text-stone-400">belum ada berita yang dipublikasikan</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {news.map((item) => (
            <NewsCard2
              key={item.id}
              title={item.title}
              slug={item.slug}
              thumbnailUrl={item.thumbnailUrl}
              publishedAt={item.publishedAt}
              content={item.content}
              authorName={item.author.name}
            />
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10 mb-4">
        {currentPage > 1 && (
          <Link
            href={`/berita?page=${currentPage - 1}`}
            className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
          >
            ← Sebelumnya
          </Link>
        )}

        <span className="text-stone-500 text-sm">Halaman {currentPage}</span>

        {hasNextPage && (
          <Link
            href={`/berita?page=${currentPage + 1}`}
            className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
          >
            Selanjutnya →
          </Link>
        )}
      </div>
    </section>
  );
}
