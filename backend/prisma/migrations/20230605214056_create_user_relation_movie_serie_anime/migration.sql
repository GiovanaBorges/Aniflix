-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL
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
    "genreMovie" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Movie" ("coverImage", "durationMinutes", "genreMovie", "id", "image", "release_date", "synopsis", "title") SELECT "coverImage", "durationMinutes", "genreMovie", "id", "image", "release_date", "synopsis", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");
CREATE TABLE "new_Serie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "EpQuantity" INTEGER NOT NULL,
    "TempQuantity" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Serie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Serie" ("EpQuantity", "TempQuantity", "coverImage", "genre", "id", "image", "release_date", "synopsis", "title") SELECT "EpQuantity", "TempQuantity", "coverImage", "genre", "id", "image", "release_date", "synopsis", "title" FROM "Serie";
DROP TABLE "Serie";
ALTER TABLE "new_Serie" RENAME TO "Serie";
CREATE UNIQUE INDEX "Serie_title_key" ON "Serie"("title");
CREATE TABLE "new_Anime" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "EpQuantity" INTEGER NOT NULL,
    "TempQuantity" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Anime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Anime" ("EpQuantity", "TempQuantity", "coverImage", "genre", "id", "image", "release_date", "studio", "synopsis", "title") SELECT "EpQuantity", "TempQuantity", "coverImage", "genre", "id", "image", "release_date", "studio", "synopsis", "title" FROM "Anime";
DROP TABLE "Anime";
ALTER TABLE "new_Anime" RENAME TO "Anime";
CREATE UNIQUE INDEX "Anime_title_key" ON "Anime"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
