"use client";

import DeleteButton from "./DeleteButton";
import { deleteEventActions } from "@/lib/actions/event";

export default function DeleteEventBtn({ id }) {
  return (
    <DeleteButton
      onDelete={() => deleteEventActions(id)}
      title={`Konfirmasi Hapus Event!`}
      message={`Apakah anda yakin menghapus event ini?`}
    />
  );
}
