import { getLecturerById } from "@/lib/service/lecturer";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default async function DetailDosen({ params }) {
  const { id } = await params;
  const lecturer = await getLecturerById(id);

  if (!lecturer) notFound();

  return (
    <div className="max-w-5xl mx-auto p-4 mt-8 mb-16">
      <Link
        href="/dosen"
        className="inline-block text-sm text-stone-500 hover:text-[#C8922B] mb-6"
      >
        ← Kembali ke Dosen
      </Link>

      <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
        <div className="grid md:grid-cols-[280px_1fr] gap-0">
          {/* Foto */}
          <div className="relative w-full h-72 md:h-full bg-stone-100">
            {lecturer.photoUrl ? (
              <Image
                src={lecturer.photoUrl}
                alt={lecturer.name}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-stone-400">
                Tidak ada foto
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-stone-800 mb-1">
              {lecturer.name}
            </h1>

            {lecturer.academicRank && (
              <p className="text-[#C8922B] font-medium mb-1">
                {lecturer.academicRank}
              </p>
            )}

            {lecturer.structuralPosition && (
              <p className="text-stone-500 mb-4">
                {lecturer.structuralPosition}
              </p>
            )}

            <div className="flex flex-col gap-2 mb-6 text-sm text-stone-600">
              {lecturer.nidn && (
                <p>
                  <span className="font-medium">NIDN:</span> {lecturer.nidn}
                </p>
              )}
              {lecturer.position && (
                <p>
                  <span className="font-medium">Jabatan:</span>{" "}
                  {lecturer.position}
                </p>
              )}
              {lecturer.email && (
                <div className="flex items-center gap-2">
                  <MdEmail className="text-[#C8922B]" />
                  <a
                    href={`mailto:${lecturer.email}`}
                    className="hover:underline"
                  >
                    {lecturer.email}
                  </a>
                </div>
              )}
            </div>

            {lecturer.expertise && (
              <div className="mb-6">
                <h3 className="font-semibold text-stone-800 mb-1">
                  Bidang Keahlian
                </h3>
                <p className="text-stone-600">{lecturer.expertise}</p>
              </div>
            )}

            {lecturer.education && (
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">
                  Riwayat Pendidikan
                </h3>
                <div className="text-stone-600 whitespace-pre-line leading-relaxed">
                  {lecturer.education}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
