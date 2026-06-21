"use client";

import { MdDelete } from "react-icons/md";
import { deleteNewsAction } from "@/lib/actions/news";


export default function DeleteButton({id}) {
    async function handleDelete() {
        const confirmed = window.confirm("yakin ingin menghapus berita ini?");
        if (!confirmed) return;

        try {
            await deleteNewsAction(id)
            
        } catch (error) {
            alert("gagal menghapus berita!")
        }
    }

    return (
        <button onClick={handleDelete}>
            <MdDelete className="size-4"/>
        </button>
    )
}