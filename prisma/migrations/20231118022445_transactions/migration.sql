-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trasaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "seller" TEXT NOT NULL
);
INSERT INTO "new_Trasaction" ("date", "id", "product", "seller", "type", "value") SELECT "date", "id", "product", "seller", "type", "value" FROM "Trasaction";
DROP TABLE "Trasaction";
ALTER TABLE "new_Trasaction" RENAME TO "Trasaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
