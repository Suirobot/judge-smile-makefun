// Make the Judge Smile — one line about a small good thing that happened today.
// Writes the entry line to /output/entry.txt (UTF-8, well under 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const line =
  "At 6:40 this morning, the coffee-stall cat who has ignored me for a solid year climbed into my lap, kneaded twice, and fell asleep — on my only clean shirt.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");
console.log(`wrote ${line.length} chars to ${OUT}`);
