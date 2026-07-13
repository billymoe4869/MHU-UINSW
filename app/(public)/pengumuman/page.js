import { getAllAnnouncement } from "@/lib/service/announcement";
import { getUpcomingEvent } from "@/lib/service/event";
import AnnouncementList from "@/components/public/AnnouncementList";
import Link from "next/link";

export default async function PengumumanPage({ searchParams }) {
  const { page, q } = await searchParams;
  const currentPage = Number(page) || 1;

  const [pengumuman, kegiatan] = await Promise.all([
    getAllAnnouncement(currentPage, q),
    getUpcomingEvent(),
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4 mt-8 mb-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-800 mb-2">Pengumuman</h1>
        <p className="text-stone-500 mb-6">
          Informasi resmi dan pengumuman terbaru dari Program Studi
        </p>

        {/* Search Form */}
        <form className="mb-6">
          <input
            type="text"
            name="q"
            defaultValue={q || ""}
            placeholder="Cari pengumuman..."
            className="w-full border border-stone-300 rounded-lg p-3 focus:outline-none focus:border-[#C8922B]"
          />
        </form>

        {pengumuman.length === 0 ? (
          <p className="text-stone-400 text-center py-12">
            {q ? `Tidak ada pengumuman untuk "${q}"` : "Belum ada pengumuman."}
          </p>
        ) : (
          <AnnouncementList data={pengumuman} />
        )}
      </div>

      <aside className="border-l border-stone-200 pl-6">
        <h2 className="font-semibold text-stone-800 mb-4">
          Agenda Kegiatan Mendatang
        </h2>
        <div className="flex flex-col gap-4">
          {kegiatan.length === 0 ? (
            <p className="text-stone-400 text-sm">
              Tidak ada kegiatan mendatang
            </p>
          ) : (
            kegiatan.map((item) => (
              <div key={item.id} className="border-b border-stone-100 pb-3">
                <p className="text-sm font-medium text-stone-700 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-xs text-[#C8922B] mt-1">
                  {new Date(item.eventDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
            ))
          )}
        </div>
        <Link
          href="/kegiatan"
          className="inline-block text-sm text-[#C8922B] mt-4 hover:underline"
        >
          Lihat Semua Kegiatan →
        </Link>
      </aside>
    </div>
  );
}
