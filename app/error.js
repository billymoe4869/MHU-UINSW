"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold text-stone-800">Terjadi Kesalahan</h2>
      <p className="text-stone-500 max-w-md">
        Maaf, halaman ini mengalami masalah saat memuat. Silakan coba lagi atau
        kembali ke beranda.
      </p>
      <div className="flex gap-3 mt-2">
        <button
          onClick={reset}
          className="px-5 py-2 bg-[#C8922B] text-white rounded-lg hover:bg-[#b5811f] transition"
        >
          Coba Lagi
        </button>
        <Link
          href="/"
          className="px-5 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition"
        >
          Ke Beranda
        </Link>
      </div>
    </div>
  );
}
