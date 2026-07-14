import { getUpcomingEvent } from "@/lib/service/event";
import Link from "next/link";
import EventCardHome from "./card/EventCardHero";

export default async function EventHero() {
  const kegiatan = await getUpcomingEvent();

  return (
    <div className="max-w-7xl mx-auto p-4 mt-12 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="md:text-2xl text-xl font-bold text-stone-800">
          Agenda Kegiatan Mendatang
        </h2>
        <Link
          href="/kegiatan"
          className="text-xs md:text-sm text-[#C8922B] hover:underline"
        >
          Selengkapnya→
        </Link>
      </div>

      {kegiatan.length === 0 ? (
        <p className="text-stone-400">Belum ada kegiatan mendatang.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:gap-4">
          {kegiatan.map((item) => (
            <EventCardHome key={item.id} event={item} />
          ))}
        </div>
      )}
    </div>
  );
}
