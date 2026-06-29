import { notFound } from "next/navigation";
import { getLecturerById } from "@/lib/service/lecturer";
import LecturerForm from "@/components/admin/form/LecturerForm";

export default async function EditDosen({ params }) {
    const {id} = await params
    const lecturer = await getLecturerById(id)

    if(!lecturer) notFound()

    return <LecturerForm lecturer={lecturer}/>
}