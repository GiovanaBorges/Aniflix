/*
  Warnings:

  - You are about to drop the column `imageId` on the `Movie` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "release_date" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("coverImage", "durationMinutes", "id", "image", "release_date", "studio", "synopsis", "title") SELECT "coverImage", "durationMinutes", "id", "image", "release_date", "studio", "synopsis", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
