import { prisma } from "@/lib/prisma";

export async function getLatestNews() {
  return prisma.news.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 3,
  });
}

export async function getAllNews(page = 1) {
  const perPage = 9

  return prisma.news.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    skip: (page - 1) * perPage,
    take: perPage
  });
};

export async function getNewsBySlug(slug) {
  return prisma.news.findUnique({
    where: { slug: slug, status: "PUBLISHED" },
  });
};
