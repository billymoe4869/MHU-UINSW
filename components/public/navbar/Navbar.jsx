"use client";

import Link from "next/link";
import Navlink from "@/components/public/navbar/Navlink";
import Logo from "../Logo";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Navbar({ children }) {
  const menus = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "/profil" },
    { label: "Dosen", href: "/dosen" },
    { label: "Berita", href: "/berita" },
    { label: "Pengumuman", href: "/pengumuman" },
    { label: "Kegiatan", href: "/kegiatan" },
    { label: "Produk", href: "/produk" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full border-b sticky top-0 left-0 right-0 bg-stone-600 text-(--color-background) z-20 h-auto shadow-sm">
      <div className="wrapper border-b border-gray-500 max-w-7xl flex items-center justify-between mx-auto">
        <div className="logo-container flex gap-1 px-4 py-2 w-auto justify-center items-center md:mb-0 mb-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="teks-logo flex flex-col md:text-left text-center">
            <span className="font-bold text-2xl">HMPS</span>
            <div className="flex gap-1">
              <span className="text-sm">MHU</span>
              <span className="text-sm">UINSW</span>
            </div>
          </div>
        </div>
        <nav className="mr-6">
          <ul
            className={`${isOpen ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col bg-slate-700  md:static md:flex md:flex-row md:w-auto md:bg-transparent md:space-x-8
            md:py-0 py-6 items-center text-center`}
          >
            {menus.map((m) => {
              return (
                <Navlink
                  key={m.href}
                  href={m.href}
                  label={m.label}
                  onClick={() => setIsOpen(false)}
                />
              );
            })}
            {children}
          </ul>
        </nav>
        <div className="md:hidden block md:mr-6 mr-10">
          {isOpen ? (
            <IoCloseSharp
              className="size-7 cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <IoMenuSharp
              className="size-7 cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </header>
  );
}
