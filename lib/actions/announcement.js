"use server";

import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
  getAnnouncementById,
} from "../service/announcement";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function deleteAnnouncementActions(id) {
  const announ = await getAnnouncementById(id);

  if (!announ) throw new Error("pengumuman tidak ditemukan");

  await deleteAnnouncement();
  revalidatePath("/dashboard/pengumuman");
}

export async function createAnnouncementActions(formData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const title = formData.get("title");
  const content = formData.get("content");
  const status = formData.get("status");
  const publishedAt = status === "PUBLISHED" ? new Date() : null;

  await createAnnouncement({
    title,
    content,
    status,
    authorId: session.user.id,
    publishedAt,
  });

  revalidatePath("/dashboard/pengumuman");
  redirect("/dashboard/pengumuman");
}

export async function updateAnnouncementActions(formData) {
  const session = await auth();
  const id = formData.get("id");
  const announ = await getAnnouncementById(id);

  if (!announ) throw new Error("pengumuman tidak ditemukan");

  if (!session?.user) throw new Error("Unauthorized");

  const title = formData.get("title");
  const content = formData.get("content");
  const status = formData.get("status");
  const publishedAt = status === "PUBLISHED" ? new Date() : null;

  await updateAnnouncement(id, {
    title,
    content,
    status,
    authorId: session.user.id,
    publishedAt,
  });

  revalidatePath("/dashboard/pengumuman");
  redirect("/dashboard/pengumuman");
}
