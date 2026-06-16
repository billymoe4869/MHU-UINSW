import Image from "next/image";

export default function HeroSection({ siteSetting }) {
  return (
    <section className="text-center">
      <h1 className="text-(-heading) text-4xl/tight font-semibold">
        Selamat Datang Mahasiswa MHU UINSW
      </h1>
      <div className="w-full pt-6 overflow-hidden relative rounded-2xl border">
        <Image
          src={siteSetting.organizationImageUrl}
          alt="hero-image"
          width={1200}
          height={600}
          priority
          className="hover:scale-105 transition-all duration-500 ease-in-out md:aspect-video"
        />
        <div className="text-image absolute bottom-0 left-0 right-0 bg-(--color-surface) opacity-70 h-40 text-left p-8">
          <h2 className="text-3xl/tight font-semibold">Penerimaan Mahasiswa Baru Tahun Ajaran 2026/2027</h2>
          <p>
            MHU UINSW mengalami pelonjakan jumlah pendaftar pada 3 tahun
            terakhir ini
          </p>
        </div>
      </div>
      <div className="profil pt-6">
        <p>{siteSetting.profile}</p>
      </div> 
    </section>
  );
}
