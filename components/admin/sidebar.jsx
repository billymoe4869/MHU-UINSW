"use client";

import Logo from "../public/Logo";
import Link from "next/link";
import SideLink from "./SideLink";
import { signOut } from "next-auth/react";
import { IoLogOutOutline, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuSide = [
    { label: "Beranda", href: "/dashboard" },
    { label: "Dosen", href: "/dashboard/dosen" },
    { label: "Berita", href: "/dashboard/berita" },
    { label: "Pengumuman", href: "/dashboard/pengumuman" },
    { label: "Kegiatan", href: "/dashboard/kegiatan" },
    { label: "Produk", href: "/dashboard/produk" },
    { label: "Exit Dashboard", href: "/" },
  ];

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 bottom-0 w-60 md:w-full h-full bg-stone-500 shadow-sm flex flex-col items-center gap-6 z-40 overflow-y-auto transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white"
        >
          <IoCloseSharp className="size-6" />
        </button>

        <div className="mt-4">
          <Link href="/dashboard">
            <Logo />
          </Link>
          <span className="font-bold">MHU-ADMIN</span>
        </div>

        <nav
          className="mt-4 flex-1"
          onClick={(e) => {
            if (e.target.tagName === "A") setOpen(false);
          }}
        >
          <ul className="flex flex-col gap-6">
            {menuSide.map((s) => (
              <SideLink key={s.href} href={s.href} label={s.label} />
            ))}
          </ul>
        </nav>

        <div className="w-40 font-extrabold mb-6 text-lg text-(--color-primary)">
          <button
            type="button"
            className="p-4 flex w-full gap-2 items-center hover:bg-stone-400 justify-center rounded-md cursor-pointer"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <IoLogOutOutline className="size-6" /> Logout
          </button>
        </div>
      </aside>

      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-20 bg-stone-500 text-white p-2 rounded-md"
      >
        ☰
      </button>
    </>
  );
}
