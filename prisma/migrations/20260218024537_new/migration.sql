/*
  Warnings:

  - Added the required column `icon` to the `SkillCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SkillCategory" ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "icon" TEXT NOT NULL;
