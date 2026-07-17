"use client";

import Link from "next/link";
import Navlink from "@/components/public/navbar/Navlink";
import Logo from "../Logo";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

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

  // Mencegah scroll body saat sidebar terbuka 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="w-full border-b sticky top-0 left-0 right-0 bg-stone-600 text-(--color-background) z-40 h-auto shadow-sm">
      <div className="wrapper border-b border-gray-500 max-w-7xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo Container */}
        <div className="logo-container flex gap-2 w-auto justify-center items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="teks-logo flex flex-col md:text-left text-center">
            <span className="font-bold text-2xl leading-none">HMPS</span>
            <div className="flex gap-1 mt-1">
              <span className="text-sm font-medium">MHU</span>
              <span className="text-sm font-medium">UINSW</span>
            </div>
          </div>
        </div>

        {/* Navigasi Desktop (Disembunyikan saat mobile) */}
        <nav className="hidden md:flex md:items-center mr-6">
          <ul className="flex flex-row space-x-8 items-center text-center">
            {menus.map((m) => (
              <Navlink key={m.href} href={m.href} label={m.label} />
            ))}
            {children}
          </ul>
        </nav>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden block">
          <IoMenuSharp
            className="size-8 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Overlay Background (Tampil saat sidebar terbuka) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={handleClick}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Sidebar & Tombol Close */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <span className="text-stone-800 font-bold text-xl">Menu</span>
          <IoCloseSharp
            className="size-8 cursor-pointer text-stone-600 hover:text-red-500 transition-colors"
            onClick={handleClick}
          />
        </div>

        {/* List Menu Sidebar - Rata Kiri */}
        <ul className="flex flex-col px-6 py-4 space-y-1 overflow-y-auto w-full">
          {menus.map((m) => (
            <li
              key={m.href}
              className="w-full border-b border-gray-50 pb-3 pt-2"
            >
              <div className="w-full text-left text-stone-800 font-medium">
                <Navlink
                  href={m.href}
                  label={m.label}
                  close={() => setIsOpen(false)}
                />
              </div>
            </li>
          ))}
          <li className="w-full text-left text-stone-800 pt-4">{children}</li>
        </ul>
      </nav>
    </header>
  );
}
