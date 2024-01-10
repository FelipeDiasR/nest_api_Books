-- CreateTable
CREATE TABLE "rentedBooks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "rented" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "rentedBooks_bar_code_key" ON "rentedBooks"("bar_code");

-- CreateIndex
CREATE UNIQUE INDEX "rentedBooks_cpf_key" ON "rentedBooks"("cpf");
