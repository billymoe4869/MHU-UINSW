import "dotenv/config";
import { PrismaClient, Role } from "../app/generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const admins = [
    {
      name: "Developer",
      email: "billymoe4869@gmail.com",
      password: "Bakerstreet221b",
      role: Role.SUPER_ADMIN,
    },
  ];

  for (const admin of admins) {
    const hashedPassword = await bcrypt.hash(admin.password, 10);

    await prisma.user.upsert({
      where: { email: admin.email },
      update: { password: hashedPassword },
      create: {
        name: admin.name,
        email: admin.email,
        password: hashedPassword,
        role: admin.role,
      },
    });
  }

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
