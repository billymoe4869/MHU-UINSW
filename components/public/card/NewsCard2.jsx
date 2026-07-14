import Link from "next/link";
import Image from "next/image";

export default function NewsCard2({
  title,
  slug,
  thumbnailUrl,
  publishedAt,
  content,
  authorName,
}) {
  // Format tanggal menjadi gaya Indonesia (misal: 8 Juli 2026)
  const formattedDate = new Date(publishedAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Bagian Gambar (Thumbnail) */}
      <Link
        href={`/berita/${slug}`}
        className="relative w-full aspect-4/3 overflow-hidden bg-gray-50"
      >
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={`Thumbnail untuk ${title}`}
            fill
            loading="eager"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Fallback jika berita tidak memiliki gambar
          <div className="flex items-center justify-center w-full h-full text-gray-400">
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

      {/* Bagian Konten */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Meta Data (Tanggal & Penulis) */}
        <div className="flex items-center gap-3 text-xs md:text-sm text-gray-500 mb-3">
          <time
            dateTime={publishedAt?.toString()}
            className="flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formattedDate}
          </time>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {authorName}
          </span>
        </div>

        {/* Judul Berita */}
        <Link href={`/berita/${slug}`}>
          <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2 line-clamp-2 group-hover:text-[#C8922B] transition-colors">
            {title}
          </h3>
        </Link>

        {/* Cuplikan Konten (Excerpt) */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-1">
          {content}
        </p>

        {/* Tombol Aksi */}
        <Link
          href={`/berita/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-stone-700 hover:text-stone-950 transition-colors mt-auto w-fit"
        >
          Baca Selengkapnya
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
