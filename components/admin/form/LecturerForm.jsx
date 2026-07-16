"use client";

import Image from "next/image";
import { createEventActions, updateEventActions } from "@/lib/actions/event";
import {
  createLecturerActions,
  updateLecturerActions,
} from "@/lib/actions/lecturer";
import { useState } from "react";
import SubmitButton from "../SubmitButton";

export default function LecturerForm({ lecturer = null }) {
  const isEdit = !!lecturer;
  const [preview, setPreview] = useState(lecturer?.photoUrl || null);
  const [fileError, setFileError] = useState("");

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
        {isEdit ? "Form Edit Dosen" : "Form Pengisian Konten Dosen"}
      </h1>
      <p className="italic mb-6 text-stone-700">
        {isEdit
          ? "silahkan edit data dosen disini!"
          : "silakan isi data dosen disini!"}
      </p>
      <div className="bg-stone-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Form Dosen</h2>
        <form action={isEdit ? updateLecturerActions : createLecturerActions}>
          {isEdit && <input type="hidden" name="id" value={lecturer.id} />}
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="name" className="text-gray-500">
              Nama
            </label>
            <input
              id="name"
              name="name"
              defaultValue={lecturer?.name || ""}
              type="text"
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="nidn" className="text-gray-500">
              NIDN
            </label>
            <input
              id="nidn"
              name="nidn"
              type="text"
              defaultValue={lecturer?.nidn || ""}
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="position" className="text-gray-500">
              Jabatan
            </label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="contoh: Dosen tetap, Dosen tidak tetap, Dosen Tamu"
              defaultValue={lecturer?.position || ""}
              required
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="academicRank" className="text-gray-500">
              Pangkat Akademik
            </label>
            <input
              type="text"
              id="academicRank"
              name="academicRank"
              placeholder="contoh: lektor, lektor kepala, profesor, asisten ahli, tenaga pengajar"
              defaultValue={lecturer?.academicRank || ""}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="structuralPosition" className="text-gray-500">
              Jabatan Struktural
            </label>
            <input
              type="text"
              id="structuralPosition"
              name="structuralPosition"
              placeholder="contoh: kaprodi, sekretaris prodi, kepala lab"
              defaultValue={lecturer?.structuralPosition || ""}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="expertise" className="text-gray-500">
              Bidang Keahlian
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              placeholder="contoh: manajemen bisnis, perbandingan agama, tafsir, dll"
              defaultValue={lecturer?.expertise || ""}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={lecturer?.email || ""}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="education" className="text-gray-500">
              Pendidikan
            </label>
            <textarea
              type="text"
              id="education"
              name="education"
              placeholder="S1 - Manajemen Pendidikan Islam, UINSA (2012), S2 - ....."
              rows={6}
              defaultValue={lecturer?.education || ""}
              className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <input
              type="file"
              id="photo"
              name="photo"
              className="hidden"
              onChange={handleFileChange}
              accept="image/jpeg, image/png, image/webp, image/jpg"
            />
            {fileError && (
              <p className="text-red-500 text-sm mt-1">{fileError}</p>
            )}

            <label
              htmlFor="photo"
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
                height={288}
                className="mt-2 object-cover"
              />
            )}
          </div>
          <div className="text-center mt-4">
            <SubmitButton disabled={!!fileError} />
          </div>
        </form>
      </div>
    </section>
  );
}
