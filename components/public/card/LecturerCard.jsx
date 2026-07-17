import Link from "next/link";
import Image from "next/image";

export default function LecturerCard({ lecturer }) {
  return (
    <Link
      href={`/dosen/${lecturer.id}`}
      className="bg-white rounded-lg border border-stone-200 overflow-hidden text-center hover:shadow-lg transition block"
    >
      <div className="relative w-full aspect-square bg-stone-100">
        {lecturer.photoUrl ? (
          <Image
            src={lecturer.photoUrl}
            alt={lecturer.name}
            fill
            loading="eager"
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
            Tidak ada foto
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-stone-800">{lecturer.name}</h3>
        {lecturer.academicRank && (
          <p className="text-xs text-[#C8922B] mt-1">{lecturer.academicRank}</p>
        )}
        {lecturer.structuralPosition && (
          <p className="text-xs text-stone-500 mt-0.5">
            {lecturer.structuralPosition}
          </p>
        )}
      </div>
    </Link>
  );
}
