"use client";

import Image from "next/image";
import {
  createProductAction,
  updateProductAction,
} from "@/lib/actions/product";
import { useState } from "react";
import SubmitButton from "../SubmitButton";

export default function ProductForm({ product = null }) {
  const isEdit = !!product;
  const [name, setName] = useState(product?.name || "");
  const [slug, setSlug] = useState(product?.slug || "");
  const [preview, setPreview] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setSlug(
      e.target.value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      alert("Format file tidak didukung. Gunakan JPG, PNG, atau WebP");
      e.target.value = "";
      return;
    }

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <section className="p-6 mt-8">
      <h1 className="font-bold text-2xl mb-4">
        {isEdit ? "Form Edit Produk" : "Form pengisian Konten Produk"}
      </h1>
      <p className="italic mb-6 text-stone-700">
        {isEdit
          ? "silahkan edit data produk disini!"
          : "silakan isi data produk disini!"}
      </p>
      <div className="bg-stone-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Form Produk</h2>
        <form action={isEdit ? updateProductAction : createProductAction}>
          {isEdit && <input type="hidden" name="id" value={product.id} />}
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="name" className="text-gray-500">
              Nama Produk
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="slug" className="text-gray-500">
              Slug
            </label>
            <input
              id="slug"
              name="slug"
              type="text"
              value={slug}
              readOnly
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="price" className="text-gray-500">
              Harga
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="1000"
              defaultValue={product?.price || ""}
              placeholder="contoh: 50000"
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="description" className="text-gray-500">
              deskripsi produk
            </label>
            <textarea
              id="description"
              name="description"
              rows={8}
              defaultValue={product?.description || ""}
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <input
              type="file"
              id="image"
              name="image"
              className="hidden"
              onChange={handleFileChange}
              accept="image/jpeg, image/png, image/webp, image/jpg"
            />

            <label
              htmlFor="image"
              className="cursor-pointer px-4 py-2 border border-dashed border-stone-400 rounded-sm text-stone-500 hover:border-stone-600"
            >
              Klik untuk pilih gambar
            </label>
            <p className="mb-1 mt-3">Preview :</p>
            {preview && (
              <Image
                src={preview}
                alt="preview"
                width={250}
                height={160}
                className="mt-2 h-40 object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="status" className="text-gray-500">
              Status
            </label>
            <select
              id="status"
              name="status"
              defaultValue={product?.status || "DRAFT"}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Publish</option>
            </select>
          </div>
          <div className="text-center mt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}
