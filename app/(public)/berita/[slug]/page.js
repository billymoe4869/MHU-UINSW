import { getNewsBySlug } from "@/lib/service/news"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"


export default async function page({ params }) {
    const { slug } = await params
    const news = await getNewsBySlug(slug)

    if (!news) notFound()
    
    const formattedDate = news.publishedAt
      ? new Date(news.publishedAt).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;
    
    return (
      <article className="max-w-3xl mx-auto p-6 mt-8 mb-16 bg-stone-100">
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
                <p className="text-sm text-stone-500 mb-6">{formattedDate}, {news.author && (<span>  Oleh {news.author.name}</span>) }</p>
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
    );
}