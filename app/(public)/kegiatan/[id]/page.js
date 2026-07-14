import { getEventById } from "@/lib/service/event";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";

export default async function DetailKegiatan({ params }) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event || event.status !== "PUBLISHED") notFound();

  const formattedDate = new Date(event.eventDate).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = new Date(event.eventDate).toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article className="max-w-3xl mx-auto p-4 mt-8 mb-16">
      <Link
        href="/kegiatan"
        className="inline-block text-sm text-stone-500 hover:text-[#C8922B] mb-6"
      >
        ← Kembali ke Kegiatan
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
        {event.title}
      </h1>

      <div className="flex flex-col gap-2 mb-6 text-stone-600">
        <div className="flex items-center gap-2">
          <MdCalendarToday className="size-5 text-[#C8922B]" />
          <span>
            {formattedDate}, {formattedTime}
          </span>
        </div>
        {event.location && (
          <div className="flex items-center gap-2">
            <MdLocationOn className="size-5 text-[#C8922B]" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {event.imageUrl && (
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-stone max-w-none whitespace-pre-line text-stone-700 leading-relaxed">
        {event.description}
      </div>
    </article>
  );
}
