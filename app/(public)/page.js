import { getSiteSettings } from "@/lib/service/siteSetting";
import HeroSection from "@/components/HeroSection";
import NewsHero from "@/components/NewsHero";

export default async function Home() {
  const siteSetting = await getSiteSettings()
  return (
    <>
      <div className="mt-8 mx-auto p-4 max-w-7xl">
        <HeroSection siteSetting={siteSetting} />
      </div>
      <NewsHero />
    </>
  );
}
