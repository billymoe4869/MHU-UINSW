"use server";

import {
  deleteNews,
  getNewsById,
  createNews,
  updateNews,
} from "../service/news";
import { revalidatePath } from "next/cache";
import { getStoragePathUrl } from "../utils/storage";
import { deleteImage, uploadImage, getPublicUrl } from "../supabase/storage";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function deleteNewsAction(id) {
  const news = await getNewsById(id);

  if (!news) {
    throw new Error("berita tidak di temukan");
  }

  if (news.thumbnailUrl) {
    await deleteImage("news", getStoragePathUrl(news.thumbnailUrl));
  }

  await deleteNews(id);

  revalidatePath("/dashboard/berita");
}

export async function createNewsActions(formData) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title");
  const slug = formData.get("slug");
  const content = formData.get("content");
  const status = formData.get("status");
  const publishedAt = status === "PUBLISHED" ? new Date() : null;

  const file = formData.get("thumbnail");

  let thumbnailUrl = null;

  if (file && file.size > 0) {
    if (!file.type.startsWith("image/")) {
      throw new Error("file harus berupa gambar");
    }

    if (file.size > 2 * 1024 * 1024) {
      throw new Error("ukuran file maksimal 2 MB");
    }

    const filePath = await uploadImage(file, "news");
    thumbnailUrl = getPublicUrl("news", filePath);
  }

  await createNews({
    title,
    slug,
    content,
    status,
    thumbnailUrl,
    authorId: session.user.id,
    publishedAt,
  });

  revalidatePath("/dashboard/berita");
  redirect("/dashboard/berita");
}

export async function updateNewsActions(formData) {
  const session = await auth();
  const id = formData.get("id");
  const news = await getNewsById(id);

  if (!news) {
    throw new Error("berita tidak ditemukan")
  }

  if (!session?.user) throw new Error("Unauthorized");

  const title = formData.get("title");
  const slug = formData.get("slug");
  const content = formData.get("content");
  const status = formData.get("status");
  const publishedAt = status === "PUBLISHED" ? new Date() : null;
  const file = formData.get("thumbnail");
  let thumbnailUrl = news.thumbnailUrl || null;

  if (file && file.size > 0) {
    await deleteImage("news", getStoragePathUrl(news.thumbnailUrl));
    const filePath = await uploadImage(file, "news");
    thumbnailUrl = getPublicUrl("news", filePath);
  }

  await updateNews(id, {
    title,
    slug,
    content,
    status,
    publishedAt,
    thumbnailUrl,
    authorId: session.user.id,
  });

  revalidatePath("/dashboard/berita");
  redirect("/dashboard/berita");
}
