import Link from "next/link";
import Logo from "./Logo";
import { IoLogoInstagram, IoMail, IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-700 text-(--color-background)">
      <div className="container-footer flex flex-col">
        <div className="top-wrapper grid w-full max-w-7xl mx-auto px-6 py-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="logo-footer flex gap-1 flex-col lg:col-span-2 lg:border-r border-gray-700 mr-6 my-auto">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Logo />
              </Link>

              <div className="teks-logo flex flex-col">
                <span className="font-bold text-2xl">HMPS</span>
                <div className="flex gap-1">
                  <span className="text-sm">MHU</span>
                  <span className="text-sm">UINSW</span>
                </div>
              </div>
            </div>

            <p className="text-left my-2 font-thin text-xl text-gray-300">
              Being Excellent With Islmaic Values
            </p>
            <span className="inline-flex text-left">
              Organisasi Mahasiswa Program Studi Manajemen Haji dan Umrah
            </span>
          </div>
          <div className="links-footer md:mx-10">
            <h5 className="text-xl font-semibold mb-4">Info Lainya</h5>
            <ul className="flex flex-col space-y-5 mt-6 font-extralight">
              <li>
                <Link
                  href="/profil"
                  className=" relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-200 after:transition-all after:duration-500 hover:after:w-full hover:text-(--color-accent)"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className=" relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-200 after:transition-all after:duration-500 hover:after:w-full hover:text-(--color-accent)"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className=" relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-200 after:transition-all after:duration-500 hover:after:w-full hover:text-(--color-accent)"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/dosen"
                  className=" relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-200 after:transition-all after:duration-500 hover:after:w-full hover:text-(--color-accent)"
                >
                  Dosen
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-footer lg:col-span-2">
            <h5 className="text-2xl font-semibold mb-4">Kontak Kami</h5>
            <address className="not-italic mb-6 font-thin">
              Jl. Sunan Ampel No.7, Ngronggo, Kec. Kota, Kota Kediri, Jawa Timur
              64127
            </address>
            <span className="font-light">Email: mhu@kampus.ac.id</span>
            <p className="font-light">0897 3345 6665</p>
          </div>
        </div>
        <div className="bottom-wrapper border-t border-gray-600 w-full max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-sm text-gray-300">
            &copy; 2026 HMPS MHU UINSW. All rights reserved.
          </p>
          <nav className="mr-6">
            <ul className="flex items-center gap-4">
              <li className="cursor-pointer">
                <IoLogoInstagram className="size-6 hover:-translate-y-1 transition-all ease-in-out" />
              </li>
              <li className="cursor-pointer">
                <IoMail className="size-6 hover:-translate-y-1 transition-all ease-in-out" />
              </li>
              <li className="cursor-pointer">
                <IoLogoFacebook className="size-6 hover:-translate-y-1 transition-all ease-in-out" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
