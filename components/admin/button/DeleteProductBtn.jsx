"use client";

import DeleteButton from "./DeleteButton";
import { deleteProductAction } from "@/lib/actions/product";

export default function DeleteProductBtn({ id }) {
  return (
    <DeleteButton
      onDelete={() => deleteProductAction(id)}
      title={`Konfirmasi Hapus Produk`}
      message={`Apakah anda yakin menghapus produk ini?`}
    />
  );
}
