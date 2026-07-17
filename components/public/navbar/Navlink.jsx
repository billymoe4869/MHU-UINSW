"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navlink({ href, label, close }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Memisahkan styling dasar dan efek garis bawah (after)
  const navStyles = `
    relative block w-full cursor-pointer py-2 md:py-0 md:inline-block
    transition-colors duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:transition-all after:duration-500 hover:after:w-full
  `;

  // Warna khusus Desktop (md:) menyesuaikan background header gelap
  const desktopColors = "md:hover:text-slate-200 md:after:bg-slate-200";

  // Warna khusus Mobile menyesuaikan background sidebar putih
  const mobileColors = "hover:text-stone-900 after:bg-stone-800";

  return (
    <Link
      href={href}
      onClick={close}
      className={clsx(
        navStyles,
        desktopColors,
        mobileColors,
        // Logika warna jika sedang aktif (berada di halaman tersebut)
        isActive
          ? "text-(--color-accent) font-semibold"
          : "text-stone-600 md:text-(--color-background)",
      )}
    >
      {label}
    </Link>
  );
}
