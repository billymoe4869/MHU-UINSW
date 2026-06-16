import { prisma } from "@/lib/prisma";

export async function getSiteSettings() {
    return prisma.siteSetting.findUnique({
        where: {id: 1}
    })
}