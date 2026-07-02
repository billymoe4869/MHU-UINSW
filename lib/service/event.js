import { prisma } from "@/lib/prisma";

export async function getUpcomingEvent() {
  return prisma.event.findMany({
    where: { status: "PUBLISHED", eventDate: { gt: new Date() } },
    orderBy: { publishedAt: "desc" },
    take: 4,
  });
}

export async function getAllEvent(page = 1) {
  const perPage = 9;

  return prisma.event.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { eventDate: "asc" },
    skip: (page - 1) * perPage,
    take: perPage,
  });
}

export async function getEventById(id) {
  return prisma.event.findUnique({
    where: { id },
  });
}

export async function getAllEventAdmin() {
  return prisma.event.findMany({
    orderBy: { eventDate: "desc" },
  });
}

export async function createEvent(data) {
  return prisma.event.create({
    data,
  });
}

export async function updateEvent(id, data) {
  return prisma.event.update({
    where: { id },
    data,
  });
}

export async function deleteEvent(id) {
  return prisma.event.delete({
    where: { id },
  });
}

export async function countEvent() {
  return prisma.event.count()
}

export async function getUpcomingEventAdmin() {
  return prisma.event.findMany({
    where: { eventDate: { gte: new Date() } },
    orderBy: { eventDate: "asc" },
    take: 5,
  });
}
