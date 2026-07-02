import { prisma } from "@/lib/prisma";

export async function getAllLecturer() {
    return prisma.lecturer.findMany({
        orderBy: {name: "asc"}
    })
}

export async function getLecturerById(id) {
    return prisma.lecturer.findUnique({
        where: {id}
    })
}

export async function getAllLecturerAdmin() {
    return prisma.lecturer.findMany({
        orderBy: {createdAt: "desc"}
    })
}

export async function createLecturer(data) {
    return prisma.lecturer.create({
        data,
    })
}

export async function updateLecturer(id, data) {
    return prisma.lecturer.update({
        where: { id },
        data,
    })
}

export async function deleteLecturer(id) {
    return prisma.lecturer.delete({
        where: {id}
    })
}

export async function countLecturer() {
    return prisma.lecturer.count()
}