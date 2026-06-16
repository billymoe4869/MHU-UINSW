-- CreateTable
CREATE TABLE "Lecturer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nidn" TEXT,
    "photoUrl" TEXT,
    "position" TEXT NOT NULL,
    "education" TEXT,
    "email" TEXT,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Lecturer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_nidn_key" ON "Lecturer"("nidn");

-- AddForeignKey
ALTER TABLE "Lecturer" ADD CONSTRAINT "Lecturer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
