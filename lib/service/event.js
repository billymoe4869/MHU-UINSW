import { prisma } from "@/lib/prisma";

export async function getUpcomingEvent() {
    return prisma.event.findMany({
      where: { status: "PUBLISHED", eventDate: { gt: new Date() } },
      orderBy: { publishedAt: "desc" },
      take: 4,
    });
};

export async function getAllEvent(page = 1) {
    const perPage = 9

    return prisma.event.findMany({
        where: { status: "PUBLISHED" },
        orderBy: {eventDate: "asc"},
        skip: (page - 1) * perPage,
        take: perPage
    })
}