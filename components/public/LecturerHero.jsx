import { getAllLecturer } from "@/lib/service/lecturer";
import Link from "next/link";
import LecturerCircle from "./card/LecturerCircle";

export default async function LecturerHero() {
  const dosen = await getAllLecturer();

  return (
    <section className="max-w-7xl mx-auto p-4 mt-12 mb-8 border-t border-stone-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-stone-800">Dosen Pengajar</h2>
        <Link href="/dosen" className="text-sm text-[#C8922B] hover:underline">
          Lihat Semua →
        </Link>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {dosen.slice(0, 6).map((item) => (
          <LecturerCircle key={item.id} lecturer={item} />
        ))}
      </div>
    </section>
  );
}
