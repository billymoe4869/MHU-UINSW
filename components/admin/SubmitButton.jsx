import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-4 py-2 bg-stone-400 cursor-pointer active:bg-stone-600 rounded-lg text-gray-50 font-semibold"
    >
      {pending ? "Menyimpan..." : "Simpan"}
    </button>
  );
}
