import { getLatestNews } from "@/lib/service/news";
import Card from "@/components/Card";

export default async function NewsHero() {
    const news = await getLatestNews()
    return (
      <section className="p-5 mb-8 mt-8 bg-stone-200 max-w-screen">
        <div className="container-news grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-7xl mx-auto">
          {news.map((n) => {
            return <Card key={n.id} berita={n} />;
          })}
        </div>
      </section>
    );
}