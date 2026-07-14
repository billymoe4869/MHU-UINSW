import { getAllProduct } from "@/lib/service/product";
import ProductCard from "@/components/public/card/ProductCard";
import Link from "next/link";

export default async function ProdukPage({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage = 12;

  const produk = await getAllProduct(currentPage);
  const hasNextPage = produk.length === perPage;

  return (
    <div className="max-w-7xl mx-auto p-4 mt-8 mb-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Produk</h1>
      <p className="text-stone-500 mb-8">
        Produk resmi Program Studi Manajemen Haji dan Umrah
      </p>

      {produk.length === 0 ? (
        <p className="text-stone-400 text-center py-12">
          Belum ada produk yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {produk.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-10">
        {currentPage > 1 && (
          <Link
            href={`/produk?page=${currentPage - 1}`}
            className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
          >
            ← Sebelumnya
          </Link>
        )}
        <span className="text-stone-500 text-sm">Halaman {currentPage}</span>
        {hasNextPage && (
          <Link
            href={`/produk?page=${currentPage + 1}`}
            className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
          >
            Selanjutnya →
          </Link>
        )}
      </div>
    </div>
  );
}
