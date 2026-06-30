import { getAllProductAdmin } from "@/lib/service/product";
import DeleteProductBtn from "@/components/admin/button/DeleteProductBtn";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";

export default async function DaftarProduk() {
    const product = await getAllProductAdmin()
  return (
    <section className="bg-stone-200 p-6 rounded-xl shadow-sm mt-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manajemen Produk</h1>
        <Link
          href="/dashboard/produk/tambah"
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
              <th className="p-4">Harga</th>
              <th className="p-4">Status</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {product.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-6 text-stone-400">
                  Belum ada produk. Tambahkan produk pertama!
                </td>
              </tr>
            ) : (
              product.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-100">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.price}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium ${item.status === "PUBLISHED" ? "bg-green-100 text-green-700" : "bg-stone-100 text-stone-700"}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/dashboard/produk/${item.id}/edit`}>
                        <MdEdit className="size-4" />
                      </Link>
                      <DeleteProductBtn id={item.id} />
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
