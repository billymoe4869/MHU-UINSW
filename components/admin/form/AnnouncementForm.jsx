"use client";

import { createAnnouncementActions, updateAnnouncementActions } from "@/lib/actions/announcement";
import { useState } from "react";
import SubmitButton from "../SubmitButton";

export default function AnnouncementForm({ Announ = null }) {
    const isEdit = !!Announ
    const [title, setTitle] = useState(Announ?.title || "")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

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
                <form action={isEdit ? updateAnnouncementActions : createAnnouncementActions}>
                  {isEdit && <input type="hidden" name="id" value={Announ.id} />}
                  <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="title" className="text-gray-500">
                      Judul Pengumuman
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
                    <label htmlFor="content" className="text-gray-500">
                      Isi Lengkap Pengumuman
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      rows={8}
                      defaultValue={Announ?.content || ""}
                      required
                      className="w-full border border-stone-700 rounded-sm p-2 focus:outline-0"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="status" className="text-gray-500">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      defaultValue={Announ?.status || "DRAFT"}
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
    )
}