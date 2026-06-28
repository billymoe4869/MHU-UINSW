"use client";

import DeleteButton from "./DeleteButton";
import { deleteNewsAction } from "@/lib/actions/news";
export default function DeleteNewsBtn({ id }) {
  return (
    <DeleteButton
      title={`Konfirmasi Hapus Berita`}
      message={`Apakah anda yakin menghapus berita ini`}
      onDelete={() => deleteNewsAction(id)}
    />
  );
}
