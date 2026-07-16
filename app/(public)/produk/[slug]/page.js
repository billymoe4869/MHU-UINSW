import { getProductBySlug } from "@/lib/service/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+62 899-4535-553"; 

export default async function DetailProduk({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  const waMessage = encodeURIComponent(
    `Assalamu'alaikum, saya ingin bertanya tentang produk "${product.name}" di website MHU.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <article className="max-w-5xl mx-auto p-4 mt-8 mb-16">
      <Link
        href="/produk"
        className="inline-block text-sm text-stone-500 hover:text-[#C8922B] mb-6"
      >
        ← Kembali ke Produk
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden bg-stone-100">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-stone-400">
              Tidak ada gambar
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">
            {product.name}
          </h1>
          <p className="text-2xl text-[#C8922B] font-bold mb-6">
            {formattedPrice}
          </p>

          {product.description && (
            <div className="text-stone-600 whitespace-pre-line leading-relaxed mb-8">
              {product.description}
            </div>
          )}

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium p-4"
          >
            <FaWhatsapp className="size-5" />
            <span>Hubungi via WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}