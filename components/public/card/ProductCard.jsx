import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link href={`/produk/${product.slug}`}>
      <article className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-lg transition flex flex-col h-full">
        <div className="relative w-full h-40 bg-stone-100">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
              Tidak ada gambar
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-stone-800 line-clamp-2 mb-1">
            {product.name}
          </h3>
          <p className="text-[#C8922B] font-bold">{formattedPrice}</p>
        </div>
      </article>
    </Link>
  );
}
