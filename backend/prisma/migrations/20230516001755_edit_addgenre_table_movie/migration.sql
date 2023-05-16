/*
  Warnings:

  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `studio` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `genreMovie` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Anime" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "EpQuantity" INTEGER NOT NULL,
    "TempQuantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Serie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "EpQuantity" INTEGER NOT NULL,
    "TempQuantity" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "genre" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "release_date" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "genreMovie" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("coverImage", "durationMinutes", "id", "image", "release_date", "synopsis", "title") SELECT "coverImage", "durationMinutes", "id", "image", "release_date", "synopsis", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Anime_title_key" ON "Anime"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Serie_title_key" ON "Serie"("title");
