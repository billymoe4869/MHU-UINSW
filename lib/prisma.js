import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/index.js";

const globalForPrisma = globalThis;

const connectionString = process.env.DATABASE_URL;



let prisma;

if (globalForPrisma.prisma) {
    prisma = globalForPrisma.prisma
} else {
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    prisma = new PrismaClient({ adapter })
    
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prisma;
    }

}

export {prisma}