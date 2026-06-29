"use client";

import DeleteButton from "./DeleteButton";
import { deleteLecturerActions } from "@/lib/actions/lecturer";

export default function DeleteLecturerBtn({ id }) {
  return (
    <DeleteButton
      onDelete={() => deleteLecturerActions(id)}
      title={`Konfirmasi Hapus Data Dosen!`}
      message={`Apakah anda yakin menghapus data dosen ini?`}
    />
  );
}
