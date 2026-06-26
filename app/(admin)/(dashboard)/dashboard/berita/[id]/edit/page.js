import NewsForm from "@/components/admin/NewsForm";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/service/news";

export default async function EditBerita({ params }) {
    const { id } = await params
    const berita = await getNewsById(id)

    if(!berita) notFound()

    return (
        <NewsForm berita={berita}/>
    )
}