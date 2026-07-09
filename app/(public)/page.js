import HeroSection from "@/components/HeroSection";
import NewsHero from "@/components/NewsHero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mt-8 bg-gray-200 p-8">
        <NewsHero />
      </div>
    </>
  );
}
