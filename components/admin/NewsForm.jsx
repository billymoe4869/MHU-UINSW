"use client";

import SubmitButton from "./SubmitButton";
import { createNewsActions, updateNewsActions } from "@/lib/actions/news";
import Image from "next/image";
import { useState } from "react";

export default function NewsForm({ berita = null }) {
  const isEdit = !!berita;
  const [title, setTitle] = useState(berita?.title || "");
  const [slug, setSlug] = useState(berita?.slug || "");
  const [preview, setPreview] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
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
        {isEdit ? "Form Edit Berita" : "Form pengisian Konten Berita"}
      </h1>
      <p className="italic mb-6 text-stone-700">
        {isEdit
          ? "silahkan edit data berita disini!"
          : "silakan isi data berita disini!"}
      </p>
      <div className="bg-stone-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Form Berita</h2>
        <form action={isEdit ? updateNewsActions : createNewsActions}>
          {isEdit && <input type="hidden" name="id" value={berita.id} />}
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="title" className="text-gray-500">
              Judul Berita
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
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
            <label htmlFor="content" className="text-gray-500">
              Isi Berita
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              defaultValue={berita?.content || ""}
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              className="hidden"
              onChange={handleFileChange}
              accept="image/jpeg, image/png, image/webp, image/jpg"
            />

            <label
              htmlFor="thumbnail"
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
              defaultValue={berita?.status || "DRAFT"}
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
