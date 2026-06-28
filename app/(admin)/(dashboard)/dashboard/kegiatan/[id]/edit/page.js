import { notFound } from "next/navigation";
import { getEventById } from "@/lib/service/event";
import EventForm from "@/components/admin/form/EventForm";

export default async function EditEvent({ params }) {
    const { id } = await params
    const event = await getEventById(id)

    if (!event) notFound()
    
    return (
        <EventForm  event={event}/>
    )
}