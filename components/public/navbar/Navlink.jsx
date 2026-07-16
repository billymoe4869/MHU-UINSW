"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";


export default function Navlink({ href, label, onClick }) {
  const After =
    "relative w-full cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-slate-200 after:transition-all after:duration-500 hover:after:w-full hover:text-slate-200 md:my-0 my-2 md:p-0 p-4";
  const pathname = usePathname();
  const isActive = pathname === href
    return (
      
      <Link href={href} onClick={onClick} className={clsx(After, "transition-colors", 
        isActive ? "text-(--color-accent)" : "text-(--color-background)"
      )}>
        {label}
      </Link>
    
    );
} 