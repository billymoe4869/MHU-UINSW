import { getAllEvent } from "@/lib/service/event";
import EventCard from "@/components/public/card/EventCard";
import Link from "next/link";

export default async function KegiatanPage({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage = 9;

  const kegiatan = await getAllEvent(currentPage);
  const hasNextPage = kegiatan.length === perPage;

  return (
    <div className="max-w-7xl mx-auto p-4 mt-8 mb-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Kegiatan</h1>
      <p className="text-stone-500 mb-8">
        Agenda dan kegiatan Program Studi Manajemen Haji dan Umrah
      </p>

      {kegiatan.length === 0 ? (
        <p className="text-stone-400 text-center py-12">
          Belum ada kegiatan yang dipublikasikan.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 max-w-5xl">
          {kegiatan.map((item) => (
            <EventCard key={item.id} event={item} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-10">
        {currentPage > 1 && (
          <Link
            href={`/kegiatan?page=${currentPage - 1}`}
            className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
          >
            ← Sebelumnya
          </Link>
        )}
        <span className="text-stone-500 text-sm">Halaman {currentPage}</span>
        {hasNextPage && (
          <Link
            href={`/kegiatan?page=${currentPage + 1}`}
            className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
          >
            Selanjutnya →
          </Link>
        )}
      </div>
    </div>
  );
}
