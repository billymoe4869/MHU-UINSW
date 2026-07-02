import { prisma } from "@/lib/prisma";

export async function getLatestAnnouncement() {
  return prisma.announcement.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });
}

export async function getAllAnnouncement(page = 1) {
  const perPage = 10;

  return prisma.announcement.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    skip: (page - 1) * perPage,
    take: perPage,
  });
}

export async function getAllAnnouncementAdmin() {
  return prisma.announcement.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function deleteAnnouncement(id) {
  return prisma.announcement.delete({
    where: { id },
  });
}

export async function getAnnouncementById(id) {
  return prisma.announcement.findUnique({
    where: { id },
  });
}

export async function createAnnouncement(data) {
  return prisma.announcement.create({
    data,
  });
}

export async function updateAnnouncement(id, data) {
  return prisma.announcement.update({
    where: { id },
    data,
  });
}

export async function countAnnouncement() {
  return prisma.announcement.count();
}

export async function getRecentAnnounAdmin() {
  return prisma.announcement.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
}