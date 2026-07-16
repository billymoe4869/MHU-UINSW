import Image from "next/image";
import { getSiteSettings } from "@/lib/service/siteSetting";

export default async function ProfilPage() {
  const settings = await getSiteSettings();

  if (!settings) {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-8 mb-16 text-center text-stone-400">
        Informasi profil belum tersedia.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-8 mb-16">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">
        Profil Program Studi
      </h1>
      <p className="text-stone-500 mb-8">
        Manajemen Haji dan Umrah — Universitas Islam Negeri Syekh Wasil Kediri
      </p>

      {settings.organizationImageUrl && (
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-10">
          <Image
            src={settings.organizationImageUrl}
            alt="Profil Prodi MHU"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-800 mb-3 pb-2 border-b-2 border-[#C8922B] inline-block">
          Tentang Kami
        </h2>
        <div className="text-stone-600 whitespace-pre-line leading-relaxed mt-4">
          {settings.profile}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-stone-50 rounded-lg p-6">
          <h2 className="text-lg font-bold text-stone-800 mb-3">Visi</h2>
          <p className="text-stone-600 whitespace-pre-line leading-relaxed">
            {settings.vision}
          </p>
        </section>

        <section className="bg-stone-50 rounded-lg p-6">
          <h2 className="text-lg font-bold text-stone-800 mb-3">Misi</h2>
          <p className="text-stone-600 whitespace-pre-line leading-relaxed">
            {settings.mission}
          </p>
        </section>
      </div>
    </div>
  );
}
