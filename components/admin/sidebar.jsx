"use client";

import Logo from "../Logo";
import Link from "next/link";
import SideLink from "./SideLink";
import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

export default function Sidebar() {
  const menuSide = [
    { label: "Beranda", href: "/dashboard" },
    { label: "Dosen", href: "/dashboard/dosen" },
    { label: "Berita", href: "/dashboard/berita" },
    { label: "Pengumuman", href: "/dashboard/pengumuman" },
    { label: "Kegiatan", href: "/dashboard/kegiatan" },
    { label: "Produk", href: "/dashboard/produk" },
  ];
  return (
    <aside className="sticky top-0 left-0 bottom-0 md:w-50 h-full bg-stone-500 shadow-sm flex flex-col items-center gap-6">
      <div className="mt-4">
        <Link href="/dashboard">
          <Logo />
        </Link>
        <span className="font-bold">MHU-ADMIN</span>
      </div>
      <nav className="mt-4 flex-1">
        <ul className="flex flex-col gap-6">
          {menuSide.map((s) => {
            return <SideLink key={s.href} href={s.href} label={s.label} />;
          })}
        </ul>
      </nav>
      <div className="w-40 font-extrabold mb-6 text-lg text-(--color-primary)">
        <button
          type="button"
          className=" p-4 flex w-full gap-2 items-center hover:bg-stone-400 justify-center rounded-md cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          {<IoLogOutOutline className="size-6" />} Logout
        </button>
      </div>
    </aside>
  );
}
