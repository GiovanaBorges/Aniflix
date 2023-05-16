-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "release_date" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    CONSTRAINT "Movie_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "MovieImage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MovieImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
