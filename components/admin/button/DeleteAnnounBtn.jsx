"use client";

import DeleteButton from "./DeleteButton";
import { deleteAnnouncementActions } from "@/lib/actions/announcement";

export default function DeleteAnnounBtn({ id }) {
  return <DeleteButton onDelete={() => deleteAnnouncementActions(id)} title={`Konfirmasi Hapus Pengumuman`} message={`Apakah anda yakin ingin menghapus pengumuman ini?`}/>;
}
