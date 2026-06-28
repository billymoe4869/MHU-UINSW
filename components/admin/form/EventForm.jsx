"use client";

import Image from "next/image";
import { createEventActions, updateEventActions } from "@/lib/actions/event";
import { useState } from "react";
import SubmitButton from "../SubmitButton";

export default function EventForm({ event = null }) {
  const isEdit = !!event;
  const [title, setTitle] = useState(event?.title || "");
  const [preview, setPreview] = useState(event?.imageUrl || null);
  const [fileError, setFileError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

    if (!allowedTypes.includes(file.type)) {
      setFileError("Format file tidak didukung. Gunakan JPG, PNG, atau WebP");
      e.target.value = "";
      setPreview(null);
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setFileError("Ukuran file maksimal 2 MB");
      e.target.value = "";
      setPreview(null);
      return;
    }

    setPreview(URL.createObjectURL(file));
  };

  return (
    <section className="p-6 mt-8">
      <h1 className="font-bold text-2xl mb-4">
        {isEdit ? "Form Edit Event" : "Form Pengisian Konten Event"}
      </h1>
      <p className="italic mb-6 text-stone-700">
        {isEdit
          ? "silahkan edit data event disini!"
          : "silakan isi data event disini!"}
      </p>
      <div className="bg-stone-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Form Event</h2>
        <form action={isEdit ? updateEventActions : createEventActions}>
          {isEdit && <input type="hidden" name="id" value={event.id} />}
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="title" className="text-gray-500">
              Judul Kegiatan
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
            <label htmlFor="description" className="text-gray-500">
              deskrpsi kegiatan
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              defaultValue={event?.description || ""}
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="eventDate" className="text-gray-500">
              Tanggal Kegiatan
            </label>
            <input
              type="datetime-local"
              id="eventDate"
              name="eventDate"
              defaultValue={
                event?.eventDate
                  ? new Date(event.eventDate).toISOString().slice(0, 16)
                  : ""
              }
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="location" className="text-gray-500">
              Lokasi
            </label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={event?.location || ""}
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
            {fileError && (
              <p className="text-red-500 text-sm mt-1">{fileError}</p>
            )}

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
              defaultValue={event?.status || "DRAFT"}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Publish</option>
            </select>
          </div>
          <div className="text-center mt-4">
                      <SubmitButton disabled={!!fileError} />
          </div>
        </form>
      </div>
    </section>
  );
}
