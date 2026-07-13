import HeroSection from "@/components/public/HeroSection";
import NewsHero from "@/components/public/NewsHero";
import ProfileHero from "@/components/public/ProfileHero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mt-8 p-8 mb-8">
        <NewsHero />
      </div>
      <ProfileHero />
    </>
  );
}
