import { getAllLecturerAdmin } from "@/lib/service/lecturer";
import Link from "next/link";
import DeleteLecturerBtn from "@/components/admin/button/DeleteLecturerBtn";
import { MdEdit } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";

export default async function DaftarDosen() {
  const lecturer = await getAllLecturerAdmin();
  return (
    <section className="bg-stone-200 p-6 rounded-xl shadow-sm mt-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manajemen Dosen</h1>
        <Link
          href="/dashboard/dosen/tambah"
          className="bg-stone-500 p-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-stone-600"
        >
          <PiPlusBold />
          <span>Tambah</span>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="">
            <tr className="bg-slate-50">
              <th className="p-4">No</th>
              <th className="p-4">Nama</th>
              <th className="p-4">Jabatan</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {lecturer.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-6 text-stone-400">
                  Belum ada data dosen. Tambahkan data dosen pertama!
                </td>
              </tr>
            ) : (
              lecturer.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-100">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.position}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/dashboard/dosen/${item.id}/edit`}>
                        <MdEdit className="size-4" />
                      </Link>
                      <DeleteLecturerBtn id={item.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
