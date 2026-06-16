import { prisma } from "@/lib/prisma";

export async function getAllLecturer() {
    return prisma.lecturer.findMany({
        orderBy: {name: "asc"}
    })
}