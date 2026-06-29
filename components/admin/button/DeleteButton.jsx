"use client";

import { MdDelete } from "react-icons/md";
import ConfirmModal from "../ConfirmModal";
import { useState } from "react";

export default function DeleteButton({ onDelete, message, title }) {
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    try {
      await onDelete();
      setOpen(false);
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
        title={title}
        message={message}
      />
    </>
  );
}
