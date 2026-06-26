"use client";

import { MdDelete } from "react-icons/md";
import { deleteNewsAction } from "@/lib/actions/news";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";

export default function DeleteButton({ id }) {
  const [open, setOpen] = useState(false)

  async function handleDelete() {
    try {
      await deleteNewsAction(id);
      setOpen(false)
    } catch (error) {
      alert("gagal menghapus berita!");
    }
  }

  return (
    <>
    <button onClick={() => setOpen(true)}>
      <MdDelete className="size-4 cursor-pointer text-red-500" />
      </button>
      <ConfirmModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        title="Konfirmasi Hapus Berita"
        message="Apakah Anda Yakin Ingin Menghapus Berita Ini?"
      />
    </>
  );
}
