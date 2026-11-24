import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Two days on Earth: locals drink bean soup to stay awake, " +
  "leaf soup to calm down, then lie awake complaining they cannot sleep — " +
  "and call it a routine. 4/5 — chaotic, delicious, would visit again.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
