import Image from "next/image";


export default async function HeroSection({ siteSetting }) {
  return (
    <>
      <section className="text-center mb-8">
        <h1 className="text-(-heading) md:text-4xl/tight text-2xl/tight font-bold">
          Selamat Datang Mahasiswa MHU UINSW
        </h1>
        <div className="w-full mt-8 overflow-hidden relative rounded-2xl border">
          <Image
            src={siteSetting.organizationImageUrl}
            alt="hero-image"
            width={1200}
            height={600}
            priority
            className="hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <div className="text-image absolute bottom-0 left-0 right-0 bg-(--color-surface) opacity-70 h-40 text-left p-8">
            <div className="max-w-3xl">
              <h2 className="md:text-3xl/tight text-2xl/tight font-semibold ">
                Penerimaan Mahasiswa Baru Tahun Ajaran 2026/2027
              </h2>
              <p>
                MHU UINSW mengalami pelonjakan jumlah pendaftar pada 3 tahun
                terakhir ini sebanyak 30 persen, jagh ast yutsagh uygs yuthgs
              </p>
            </div>
          </div>
        </div>
        <div className="profil mt-6 text-left">
          <p className="text-(--color-text)">{siteSetting.profile}</p>
        </div>
      </section>
      
    </>
  );
}
