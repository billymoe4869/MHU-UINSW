import { prisma } from "@/lib/prisma";

export async function getLatestProduct() {
  return prisma.product.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 4,
  });
}

export async function getAllProduct(page = 1) {
  const perPage = 12;

  return prisma.product.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    skip: (page - 1) * perPage,
    take: perPage,
  });
}

export async function getAllProductAdmin() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductById(id) {
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function deleteProduct(id) {
  return prisma.product.delete({
    where: { id },
  });
}

export async function createProduct(data) {
    return prisma.product.create({
        data,
    })
}

export async function updateProduct(id, data) {
    return prisma.product.update({
        where: { id },
        data
    })
}