import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function NewsCard({
  title,
  slug,
  content,
  publishedAt,
  thumbnailUrl,
  author = "Admin",
}) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("id-Id", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
      <Link href={`/berita/${slug}`} className="relative w-full h-48">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={`thumbnail untuk ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-stone-400">
            <svg
              className="w-12 h-12 opacity-20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        )}
      </Link>
      <div className="flex flex-col p-5 md:p-6">
        <div className="flex flex-col gap-3">
          {formattedDate && (
            <p className="text-xs text-[#C8922B] font-medium mb-2">
              {formattedDate}
            </p>
          )}
          <h3 className="font-semibold text-stone-800 line-clamp-2 group-hover:text-[#C8922B] transition">
            {title}
          </h3>
        </div>
        <Link
          href={`/berita/${slug}`}
          className="flex gap-3 items-center bg-stone-500 text-stone-50 p-2 rounded-lg mt-4 w-fit self-end hover:bg-stone-600"
        >
          <span>Baca Selengkapnya</span>
          <GoArrowRight className="size-4"/>
        </Link>
      </div>
    </article>
  );
}
