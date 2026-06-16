import "dotenv/config";
import { PrismaClient, Role } from "../app/generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash("admin1234", 10);

  await prisma.user.create({
    data: {
      name: "SUPER_ADMIN",
      email: "seedawal@gmail.com",
      password: hashedPassword,
      role: Role.SUPER_ADMIN,
    },
  });
  console.log("seed data berhasil");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
