/*
  Warnings:

  - Added the required column `operator` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paiementEmail` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paiementPhoneNumber` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "operator" TEXT NOT NULL,
ADD COLUMN     "paiementEmail" TEXT NOT NULL,
ADD COLUMN     "paiementPhoneNumber" TEXT NOT NULL;
