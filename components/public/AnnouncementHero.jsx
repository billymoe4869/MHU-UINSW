import AnnouncementList from "./AnnouncementList";
import { getLatestAnnouncement } from "@/lib/service/announcement";
import Link from "next/link";

export default async function AnnouncementHero() {
  const announcement = await getLatestAnnouncement();

  return (
    <div className="max-w-7xl mx-auto p-4 mt-12 mb-6">
      <div className="flex items-center my-4 justify-between mb-6 mx-4">
        <h2 className="text-xl md:text-2xl font-bold text-stone-800">
          Pengumuman Terbaru
        </h2>
        <Link
          href="/pengumuman"
          className="text-xs md:text-sm text-[#C8922B] hover:underline"
        >
          Selengkapnya→
        </Link>
      </div>
      <AnnouncementList data={announcement} />
    </div>
  );
}
