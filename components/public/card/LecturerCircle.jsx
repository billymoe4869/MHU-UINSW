import Link from "next/link";
import Image from "next/image";

export default function LecturerCircle({ lecturer }) {
  return (
    <Link
      href={`/dosen/${lecturer.id}`}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-stone-100 border-2 border-transparent group-hover:border-[#C8922B] transition">
        {lecturer.photoUrl ? (
          <Image
            src={lecturer.photoUrl}
            alt={lecturer.name}
            fill
            loading="eager"
            sizes="112px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
            No Photo
          </div>
        )}
      </div>

      <h3 className="font-medium text-sm text-stone-800 mt-3 line-clamp-1 group-hover:text-[#C8922B] transition">
        {lecturer.name}
      </h3>
      {lecturer.academicRank && (
        <p className="text-xs text-stone-400 line-clamp-1">
          {lecturer.academicRank}
        </p>
      )}
    </Link>
  );
}
