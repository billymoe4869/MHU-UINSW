export default function Loading() {
  return (
    <div className="p-6">
      <div className="h-8 w-64 bg-stone-200 rounded animate-pulse mb-8" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 bg-stone-200 rounded-lg animate-pulse" />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-48 bg-stone-200 rounded-lg animate-pulse" />
        <div className="h-48 bg-stone-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}

