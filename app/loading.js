export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-stone-200 border-t-[#C8922B] rounded-full animate-spin" />
      <p className="text-stone-500 text-sm">Memuat halaman...</p>
    </div>
  );
}
