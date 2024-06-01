-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('CREATION_GRAPHIQUE');

-- CreateEnum
CREATE TYPE "GraphicServPackType" AS ENUM ('BASIQUE', 'STANDARD', 'PREMIUM');

-- CreateEnum
CREATE TYPE "CheckoutType" AS ENUM ('CASH', 'HALF');

-- CreateEnum
CREATE TYPE "CheckoutStatus" AS ENUM ('ACCEPTED', 'PENDING', 'CANCELLED', 'REFUSED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('COMPLETED', 'PENDING', 'IN_PROCESS', 'CANCELLED');

-- CreateTable
CREATE TABLE "impressOrder" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "transactionRef" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "orderingAt" TIMESTAMP(3),
    "impressable" TEXT NOT NULL,
    "impressableType" TEXT,
    "impressableFormat" TEXT,
    "quantity" INTEGER NOT NULL,
    "checkoutType" "CheckoutType" NOT NULL,
    "checkoutStatus" "CheckoutStatus" NOT NULL,
    "orderStatus" "OrderStatus" NOT NULL,
    "metaData" JSONB NOT NULL,

    CONSTRAINT "impressOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "typeUser" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicServ" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "fullDescription" TEXT NOT NULL,
    "covers" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GraphicServ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicServOrder" (
    "id" SERIAL NOT NULL,
    "orderRef" TEXT NOT NULL,
    "packType" "GraphicServPackType" NOT NULL,
    "deliveryDelay" INTEGER NOT NULL,
    "orderStatus" "OrderStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "GraphicServOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderService" (
    "graphicServOrderId" INTEGER NOT NULL,
    "graphicServId" INTEGER NOT NULL,

    CONSTRAINT "OrderService_pkey" PRIMARY KEY ("graphicServOrderId","graphicServId")
);

-- CreateTable
CREATE TABLE "GraphicServPack" (
    "id" SERIAL NOT NULL,
    "libelle" "GraphicServPackType" NOT NULL,
    "subTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "graphicServId" INTEGER,

    CONSTRAINT "GraphicServPack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExecutionDeadline" (
    "id" SERIAL NOT NULL,
    "numberOfDay" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "GraphicServPackType" NOT NULL,
    "graphicServPackId" INTEGER NOT NULL,

    CONSTRAINT "ExecutionDeadline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpressExecutionDeadline" (
    "id" SERIAL NOT NULL,
    "numberOfDay" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "GraphicServPackType" NOT NULL,
    "graphicServPackId" INTEGER NOT NULL,

    CONSTRAINT "ExpressExecutionDeadline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionRef" TEXT NOT NULL,
    "paiementType" "CheckoutType" NOT NULL,
    "paiementStatus" "CheckoutStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicServOptionalItem" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER,
    "graphicServId" INTEGER,

    CONSTRAINT "GraphicServOptionalItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicServItemValue" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "valueType" "GraphicServPackType" NOT NULL,
    "optionalItemId" INTEGER,
    "graphicServItemId" INTEGER,

    CONSTRAINT "GraphicServItemValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicServItem" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "GraphicServPackType" NOT NULL,
    "graphicServId" INTEGER NOT NULL,

    CONSTRAINT "GraphicServItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "graphicServId" INTEGER NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GraphicServCategory" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "type" "CategoryType" NOT NULL,
    "icon" TEXT NOT NULL,
    "cover" TEXT NOT NULL,

    CONSTRAINT "GraphicServCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "impressOrder_orderNumber_key" ON "impressOrder"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ExecutionDeadline_graphicServPackId_key" ON "ExecutionDeadline"("graphicServPackId");

-- CreateIndex
CREATE UNIQUE INDEX "GraphicServItemValue_optionalItemId_graphicServItemId_key" ON "GraphicServItemValue"("optionalItemId", "graphicServItemId");

-- AddForeignKey
ALTER TABLE "GraphicServ" ADD CONSTRAINT "GraphicServ_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "GraphicServCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServOrder" ADD CONSTRAINT "GraphicServOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderService" ADD CONSTRAINT "OrderService_graphicServOrderId_fkey" FOREIGN KEY ("graphicServOrderId") REFERENCES "GraphicServOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderService" ADD CONSTRAINT "OrderService_graphicServId_fkey" FOREIGN KEY ("graphicServId") REFERENCES "GraphicServ"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServPack" ADD CONSTRAINT "GraphicServPack_graphicServId_fkey" FOREIGN KEY ("graphicServId") REFERENCES "GraphicServ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExecutionDeadline" ADD CONSTRAINT "ExecutionDeadline_graphicServPackId_fkey" FOREIGN KEY ("graphicServPackId") REFERENCES "GraphicServPack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpressExecutionDeadline" ADD CONSTRAINT "ExpressExecutionDeadline_graphicServPackId_fkey" FOREIGN KEY ("graphicServPackId") REFERENCES "GraphicServPack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "GraphicServOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServOptionalItem" ADD CONSTRAINT "GraphicServOptionalItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "GraphicServOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServOptionalItem" ADD CONSTRAINT "GraphicServOptionalItem_graphicServId_fkey" FOREIGN KEY ("graphicServId") REFERENCES "GraphicServ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServItemValue" ADD CONSTRAINT "GraphicServItemValue_optionalItemId_fkey" FOREIGN KEY ("optionalItemId") REFERENCES "GraphicServOptionalItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServItemValue" ADD CONSTRAINT "GraphicServItemValue_graphicServItemId_fkey" FOREIGN KEY ("graphicServItemId") REFERENCES "GraphicServItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GraphicServItem" ADD CONSTRAINT "GraphicServItem_graphicServId_fkey" FOREIGN KEY ("graphicServId") REFERENCES "GraphicServ"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faq" ADD CONSTRAINT "Faq_graphicServId_fkey" FOREIGN KEY ("graphicServId") REFERENCES "GraphicServ"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
