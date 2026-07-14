import HeroSection from "@/components/public/HeroSection";
import NewsHero from "@/components/public/NewsHero";
import ProfileHero from "@/components/public/ProfileHero";
import EventHero from "@/components/public/EventHero";
import AnnouncementHero from "@/components/public/AnnouncementHero";
import ProductHero from "@/components/public/ProductHero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mt-8 p-8 mb-8">
        <NewsHero />
      </div>
      <ProfileHero />
      <div className="grid md:grid-cols-2 grid-cols-1 my-6 mx-6">
        <EventHero />
        <AnnouncementHero />
      </div>
      <ProductHero />
    </>
  );
}
