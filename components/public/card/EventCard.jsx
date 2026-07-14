import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";

export default function EventCard({ event }) {
  const formattedDate = new Date(event.eventDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = new Date(event.eventDate).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link href={`/kegiatan/${event.id}`}>
      <article className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-lg transition">
        <div className="relative w-full h-48 bg-stone-100">
          {event.imageUrl ? (
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="eager"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
              Tidak ada gambar
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-stone-800 line-clamp-2 mb-3">
            {event.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-stone-500 mb-1">
            <MdCalendarToday className="size-4 text-[#C8922B]" />
            <span>
              {formattedDate}, {formattedTime}
            </span>
          </div>

          {event.location && (
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <MdLocationOn className="size-4 text-[#C8922B]" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
