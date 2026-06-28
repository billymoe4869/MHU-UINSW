"use server";

import {
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
} from "../service/event";
import { revalidatePath } from "next/cache";
import { getStoragePathUrl } from "../utils/storage";
import { deleteImage, uploadImage, getPublicUrl } from "../supabase/storage";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function deleteEventActions(id) {
  const event = await getEventById(id);

  if (!event) throw new Error("Event tidak ditemukan!");
  if (event.imageUrl) {
    await deleteImage("events", getStoragePathUrl(event.imageUrl));
  }

  await deleteEvent(id);
  revalidatePath("/dashboard/kegiatan");
}

export async function createEventActions(formData) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const title = formData.get("title");
  const description = formData.get("description");
  const location = formData.get("location");
  const status = formData.get("status");
  const eventDateRow = formData.get("eventDate");
  const eventDate = eventDateRow ? new Date(eventDateRow) : null;
  const file = formData.get("image");

  let imageUrl = null;

  if (file && file.size > 0) {
    if (!file.type.startsWith("image/")) {
      throw new Error("file harus berupa gambar");
    }
    if (file.size > 2 * 1024 * 1024) {
      throw new Error("ukuran file maksimal 2 mb");
    }

    const filePath = await uploadImage(file, "events");
    imageUrl = getPublicUrl("events", filePath);
  }
  await createEvent({
    title,
    description,
    location: location || null,
    status,
    eventDate,
    imageUrl,
    authorId: session.user.id,
  });

  revalidatePath("/dashboard/kegiatan");
  redirect("/dashboard/kegiatan");
}

export async function updateEventActions(formData) {
  const session = await auth();
  const id = formData.get("id");
  const event = await getEventById(id);

  if (!event) throw new Error("event/kegiatan tidak ditemukan!");
  if (!session?.user) throw new Error("Unauthorized");

  const title = formData.get("title");
  const description = formData.get("description");
  const location = formData.get("location");
  const status = formData.get("status");
  const eventDateRow = formData.get("eventDate");
  const eventDate = eventDateRow ? new Date(eventDateRow) : null;
  const file = formData.get("image");

  let imageUrl = event.imageUrl || null;

  if (file && file.size > 0) {
    if (event.imageUrl) {
      await deleteImage("events", getStoragePathUrl(event.imageUrl));
    }
    const filePath = await uploadImage(file, "events");
    imageUrl = getPublicUrl("events", filePath);
  }

  await updateEvent(id, {
    title,
    description,
    location: location || null,
    status,
    eventDate,
    imageUrl,
  });

  revalidatePath("/dashboard/kegiatan");
  redirect("/dashboard/kegiatan");
}
