import Image from "next/image";
import Link from "next/link";

export default function Card({ berita }) {
  return (
    <article className="relative w-100">
      <figure className="relative overflow-hidden aspect-square">
        <Link href="/berita">
          <Image
            src={berita.thumbnailUrl}
            alt={berita.title}
            fill
            className="object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </Link>
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-(--color-surface) opacity-85">
          <h4 className="text-2xl/tight font-semibold mb-4">{berita.title}</h4>
          <p>{berita.content}</p>
        </figcaption>
      </figure>
    </article>
  );
}