import { prisma } from "@/lib/prisma";

export async function getMonthlyContentStats() {
  const sixMonthAgo = new Date();
  sixMonthAgo.setMonth(sixMonthAgo.getMonth() - 6);

    const [news, announcements, events, products] = await Promise.all([
        prisma.news.findMany({
            where: { createdAt: { gte: sixMonthAgo } },
            select: {createdAt: true}
        }),
        prisma.announcement.findMany({
            where: { createdAt: { gte: sixMonthAgo } },
            select: {createdAt: true}
        }),
        prisma.event.findMany({
            where: { createdAt: { gte: sixMonthAgo } },
            select: {createdAt: true}
        }),
        prisma.products.findMany({
            where: { createdAt: { gte: sixMonthAgo } },
            select: {createdAt: true}
        }),
        
    ])
    
    const datas = [...news, ...announcements, ...events, ...products]

    const groupData = {}

    datas.forEach((item) => {
        const label = item.createdAt.toLocalDateString("id-ID", {
            month: "short",
            year: "numeric"
        })

        if (!groupData[label]) {
            groupData[label] = 0
        }

        groupData[label] = groupData[label] + 1
    })

    const hasilData = Object.entries(groupData).map(([bulan, jumlah]) => ({
        bulan,
        jumlah
    }))

    return hasilData
}
