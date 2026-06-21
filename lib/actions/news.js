"use server";

import { deleteNews, getNewsById } from "../service/news";
import { revalidatePath } from "next/cache";
import { getStoragePathUrl } from "../utils/storage";
import { deleteImage } from "../supabase/storage";

export async function deleteNewsAction(id) {
    const news = await getNewsById(id);

    if (!news) {
        throw new Error("berita tidak di temukan")
    }

    if (news.thumbnailUrl) {
        await deleteImage(
            "news",
            getStoragePathUrl(news.thumbnailUrl)
        )
    }

    await deleteNews(id);

    revalidatePath("/dashboard/berita")
}