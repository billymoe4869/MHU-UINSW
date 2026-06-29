"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  getLecturerById,
  updateLecturer,
  deleteLecturer,
  createLecturer,
} from "../service/lecturer";
import { deleteImage, uploadImage, getPublicUrl } from "../supabase/storage";
import { auth } from "@/auth";
import { getStoragePathUrl } from "../utils/storage";

export async function deleteLecturerActions(id) {
  const lecturer = await getLecturerById(id);

  if (!lecturer) throw new Error("Dosen tidak ditemukan");

  if (lecturer.photoUrl) {
    await deleteImage("lecturer", getStoragePathUrl(lecturer.photoUrl));
  }

  await deleteLecturer(id);

  revalidatePath("/dashboard/dosen");
}

export async function createLecturerActions(formData) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const name = formData.get("name");
  const nidn = formData.get("nidn");
  const position = formData.get("position");
  const academicRank = formData.get("academicRank");
  const structuralPosition = formData.get("structuralPosition");
  const expertise = formData.get("expertise");
  const email = formData.get("email");
  const education = formData.get("education");

  const file = formData.get("photo");

  let photoUrl = null;

  if (file && file.size > 0) {
    if (!file.type.startsWith("image/")) {
      throw new Error("file harus berupa gambar!");
    }

    if (file.size > 2 * 1024 * 1024) {
      throw new Error("ukuran file maksimal 2 mb!");
    }

    const filePath = await uploadImage(file, "lecturer");
    photoUrl = getPublicUrl("lecturer", filePath);
  }

  await createLecturer({
    name,
    nidn: nidn || null,
    position,
    academicRank: academicRank || null,
    structuralPosition: structuralPosition || null,
    expertise: expertise || null,
    email: email || null,
    education: education || null,
    photoUrl,
    authorId: session.user.id,
  });

  revalidatePath("/dashboard/dosen");
  redirect("/dashboard/dosen");
}

export async function updateLecturerActions(formData) {
  const session = await auth();
  const id = formData.get("id");
  const lecturer = await getLecturerById(id);

  if (!lecturer) throw new Error("dosen tidak ditemukan");
  if (!session?.user) throw new Error("Unauothorized");

  const name = formData.get("name");
  const nidn = formData.get("nidn");
  const position = formData.get("position");
  const academicRank = formData.get("academicRank");
  const structuralPosition = formData.get("structuralPosition");
  const expertise = formData.get("expertise");
  const email = formData.get("email");
  const education = formData.get("education");

  const file = formData.get("photo");

  let photoUrl = lecturer.photoUrl || null;

  if (file && file.size > 0) {
    if (lecturer.photoUrl) {
      await deleteImage("lecturer", getStoragePathUrl(lecturer.photoUrl));
    }
    const filePath = await uploadImage(file, "lecturer");
    photoUrl = getPublicUrl("lecturer", filePath);
  }

  await updateLecturer(id, {
    name,
    nidn: nidn || null,
    position,
    academicRank: academicRank || null,
    structuralPosition: structuralPosition || null,
    expertise: expertise || null,
    email: email || null,
    education: education || null,
    photoUrl,
  });

  revalidatePath("/dashboard/dosen");
  redirect("/dashboard/dosen");
}
