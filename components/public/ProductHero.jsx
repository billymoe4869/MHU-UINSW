import { getLatestProduct } from "@/lib/service/product";
import ProductCard from "./card/ProductCard";
import Link from "next/link";

export default async function ProductHero() {
  const produk = await getLatestProduct();

  return (
    <section className="max-w-7xl mx-auto mt-12 mb-8 p-2">
      <div className="flex gap-2 items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-stone-800">
          Produk Terbaru Kami
        </h2>
        <Link
          href={`/produk`}
          className="inline-flex gap-2 items-center hover:underline hover:text-(--color-accent)"
        >
          Lihat Semua
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {produk.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
