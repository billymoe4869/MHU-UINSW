import Image from "next/image"

export default function Card({ berita }) {
    return (
      <article className="relative w-100">
        <figure className="relative overflow-hidden aspect-square">
          <Image
            src={berita.thumbnailUrl}
            alt={berita.title}
            fill
            className="object-cover"
          />

          <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-(--color-surface) opacity-85">
            <h4 className="text-2xl/tight font-semibold mb-4">{berita.title}</h4>
            <p>{berita.content}</p>
          </figcaption>
        </figure>
      </article>
    );
}