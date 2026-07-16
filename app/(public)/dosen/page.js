import { getAllLecturer } from "@/lib/service/lecturer";
import LecturerCard from "@/components/public/card/LecturerCard";

export default async function DosenPage() {
  const dosen = await getAllLecturer();

  return (
    <div className="max-w-7xl mx-auto p-4 mt-8 mb-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Dosen</h1>
      <p className="text-stone-500 mb-8">
        Tenaga pengajar Program Studi Manajemen Haji dan Umrah
      </p>

      {dosen.length === 0 ? (
        <p className="text-stone-400 text-center py-12">
          Belum ada data dosen.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dosen.map((item) => (
            <LecturerCard key={item.id} lecturer={item} />
          ))}
        </div>
      )}
    </div>
  );
}
