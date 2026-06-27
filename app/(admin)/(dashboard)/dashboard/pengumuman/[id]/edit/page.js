import { notFound } from "next/navigation";
import AnnouncementForm from "@/components/admin/form/AnnouncementForm";
import { getAnnouncementById } from "@/lib/service/announcement";

export default async function EditPengumuman({params}) {
    const { id } = await params
    const pengumuman = await getAnnouncementById(id)

    if (!pengumuman) notFound()
    
    return (
        <AnnouncementForm Announ={pengumuman}/>
    )
}