import { auth } from "@/auth";
import {
  countAnnouncement,
  getRecentAnnounAdmin,
} from "@/lib/service/announcement";
import { countEvent, getUpcomingEventAdmin } from "@/lib/service/event";
import { countLecturer } from "@/lib/service/lecturer";
import { countNews, getRecentNewsAdmin } from "@/lib/service/news";
import { countProduct } from "@/lib/service/product";
import Link from "next/link";
import {
  MdArticle,
  MdShoppingBag,
  MdCampaign,
  MdEvent,
  MdSchool,
} from "react-icons/md";

export default async function Dashboard() {
  const session = await auth();

  const [
    berita,
    pengumuman,
    kegiatan,
    dosen,
    produk,
    recentNews,
    recentAnnoun,
    upcomingEvent,
  ] = await Promise.all([
    countNews(),
    countAnnouncement(),
    countEvent(),
    countLecturer(),
    countProduct(),
    getRecentNewsAdmin(),
    getRecentAnnounAdmin(),
    getUpcomingEventAdmin(),
  ]);

  const stats = [
    {
      label: "Berita",
      count: berita,
      href: "/dashboard/berita",
      icon: MdArticle,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      hover: "hover:bg-blue-100",
    },
    {
      label: "Pengumuman",
      count: pengumuman,
      href: "/dashboard/pengumuman",
      icon: MdCampaign,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
      hover: "hover:bg-orange-100",
    },
    {
      label: "Kegiatan",
      count: kegiatan,
      href: "/dashboard/kegiatan",
      icon: MdEvent,
      color: "text-green-500",
      bg: "bg-green-50",
      border: "border-green-200",
      hover: "hover:bg-green-100",
    },
    {
      label: "Dosen",
      count: dosen,
      href: "/dashboard/dosen",
      icon: MdSchool,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
      hover: "hover:bg-purple-100",
    },
    {
      label: "Produk",
      count: produk,
      href: "/dashboard/produk",
      icon: MdShoppingBag,
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
      hover: "hover:bg-amber-100",
    },
  ];

  const quickActions = [
    { label: "Tambah Berita", href: "/dashboard/berita/tambah" },
    { label: "Tambah Pengumuman", href: "/dashboard/pengumuman/tambah" },
    { label: "Tambah Kegiatan", href: "/dashboard/kegiatan/tambah" },
    { label: "Tambah Produk", href: "/dashboard/produk/tambah" },
  ];

  return (
    <section className="mt-10 p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">
        Selamat Datang, {session?.user?.name}
      </h1>
      <p className="mb-10 text-stone-600">
        Kelola konten website MHU dari sini.
      </p>

      {/* Stats Card*/}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-lg p-4 text-left hover:shadow-md transition flex flex-col gap-6 ${item.border} ${item.bg} ${item.hover}`}
            >
              <div className="flex gap-2 mb-4 items-center">
                <Icon className={`text-3xl ${item.color}`} />
                <span className="text-xl text-stone-700 font-semibold">{item.label}</span>
              </div>
              <div>
                <p className={`font-bold text-2xl ${item.color}`}>
                  {item.count}
                </p>
                <p className="text-stone-700 mt-1">total {item.label}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* QuickActions */}
      <div className="mb-8">
        <h2 className="text-xl mb-2 font-semibold">Pintasan</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="px-4 py-2 bg-(--color-primary) rounded-lg text-stone-50 hover:bg-stone-700"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Konten terbaru */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* berita terbaru admin */}
        <div className="rounded-lg bg-white p-4 border border-stone-500">
          <h2 className="text-xl mb-2 font-semibold">Berita Terbaru</h2>
          {recentNews === 0 ? (
            <p>Belum ada berita.</p>
          ) : (
            <ul className="space-y-2 mt-4">
              {recentNews.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b border-stone-400 text-sm pb-2"
                >
                  <span>{item.title}</span>
                  <span
                    className={
                      item.status === "PUBLISHED"
                        ? "text-green-600"
                        : "text-stone-500"
                    }
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* pengumuman terbaru admin */}
        <div className="rounded-lg bg-white p-4 border border-stone-500">
          <h2 className="text-xl mb-2 font-semibold">Berita Terbaru</h2>
          {recentAnnoun === 0 ? (
            <p className="text-sm text-stone-400">Belum ada pengumuman.</p>
          ) : (
            <ul className="space-y-2 mt-4">
              {recentAnnoun.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b border-stone-400 text-sm pb-2"
                >
                  <span>{item.title}</span>
                  <span
                    className={
                      item.status === "PUBLISHED"
                        ? "text-green-600"
                        : "text-stone-500"
                    }
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="rounded-lg p-4 border border-stone-500">
        <h2 className="text-xl mb-2 font-semibold">Kegiatan Mendatang</h2>
        {upcomingEvent.length === 0 ? (
          <p className="text-sm text-stone-400">Belum ada kegiatan.</p>
        ) : (
          <ul className="space-y-2 mt-4">
            {upcomingEvent.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-2 border-stone-400 text-sm"
              >
                <span>{item.title}</span>
                <span className="text-stone-600">
                  {new Date(item.eventDate).toLocaleDateString("id-ID")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
