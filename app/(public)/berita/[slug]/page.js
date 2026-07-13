import { getNewsBySlug, getLatestNews } from "@/lib/service/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default async function page({ params }) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  const recentNews = await getLatestNews();

  if (!news) notFound();

  const formattedDate = news.publishedAt
    ? new Date(news.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="max-w-7xl grid mt-8 grid-cols-1 md:grid-cols-[1fr_360px] mx-auto">
      <article className="max-w-4xl p-6 mb-16 bg-stone-100">
        <Link
          href="/berita"
          className="inline-block text-sm text-stone-500 hover:text-[#C8922B] mb-6"
        >
          ← Kembali ke Berita
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
          {news.title}
        </h1>

        {formattedDate && (
          <p className="text-sm text-stone-500 mb-6">
            {formattedDate},{" "}
            {news.author && <span> Oleh {news.author.name}</span>}
          </p>
        )}

        {news.thumbnailUrl && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={news.thumbnailUrl}
              alt={news.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-stone max-w-none whitespace-pre-line text-stone-700 leading-relaxed">
          {news.content}
        </div>
      </article>
      <aside className="p-4 flex flex-col gap-4 bg-gray-100">
        <span className="text-2xl font-semibold mb-6 border-b border-stone-500 py-4">
          Berita Terbaru Lainnya
        </span>
        {recentNews.map((item) => (
          <Link
            key={item.id}
            href={`/berita/${item.slug}`}
            className="text-lg/tight line-clamp-2 hover:underline border-b border-stone-300 py-2"
          >
            {item.title}
          </Link>
        ))}
        <div className="bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full w-fit">
          <FaInstagram className="text-white size-4" />
        </div>
      </aside>
    </div>
  );
}
