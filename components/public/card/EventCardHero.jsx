import Link from "next/link";

export default function EventCardHome({ event }) {
  const date = new Date(event.eventDate);
  const day = date.getDate();
  const month = date.toLocaleDateString("id-ID", { month: "short" });

  return (
    <Link
      href={`/kegiatan/${event.id}`}
      className="flex gap-4 items-start p-3 rounded-lg hover:bg-stone-200 transition group"
    >
      <div className="shrink-0 w-16 h-16 bg-[#1A1A1A] rounded-lg flex flex-col items-center justify-center text-white">
        <span className="text-xl font-bold leading-none">{day}</span>
        <span className="text-xs uppercase text-[#C8922B] mt-1">{month}</span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-stone-800 line-clamp-2 group-hover:text-[#C8922B] transition">
          {event.title}
        </h3>
        {event.location && (
          <p className="text-xs text-stone-400 mt-1 line-clamp-1">
            {event.location}
          </p>
        )}
      </div>
    </Link>
  );
}
