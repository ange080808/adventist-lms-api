/*
  Warnings:

  - A unique constraint covering the columns `[content]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[content]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkUrl]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Activity_content_key" ON "Activity"("content");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_content_key" ON "Lesson"("content");

-- CreateIndex
CREATE UNIQUE INDEX "Video_linkUrl_key" ON "Video"("linkUrl");
