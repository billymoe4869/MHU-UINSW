import { prisma } from "@/lib/prisma";

export async function getLatestAnnouncement() {
    return prisma.announcement.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { publishedAt: "desc" },
        take: 3
    })
};

export async function getAllAnnouncement(page = 1) {
    const perPage = 10

    return prisma.announcement.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * perPage,
        take: perPage
    })
}