import { getSiteSettings } from "@/lib/service/siteSetting";
import Image from "next/image";
import Link from "next/link";

export default async function ProfileHero() {
  const profil = await getSiteSettings();

  return (
    <section className="bg-gray-200 p-8 mb-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-4">
        Profil Prodi
      </h2>
      <div className="mx-auto px-6 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <div>
            <h3 className="font-semibold mb-4 text-xl text-stone-700">
              MHU UINSW
            </h3>
            <p className="text-left text-wrap mb-6">{profil.profile}</p>
            <Link
              href={`/profil`}
              className="inline-flex gap-2 items-center hover:underline hover:text-(--color-accent)"
            >
              Baca selengkapnya
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
          <div className="aspect-4/3 w-full max-w-lg justify-self-end relative">
            <Image
              src={profil.organizationImageUrl}
              alt="profile-image"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
