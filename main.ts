import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I would rename Earth 'Oops' — because every time someone says 'we have a plan for the planet,' that is exactly what it sounds like.";

function formatEntry(): string {
  return ENTRY;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", formatEntry() + "\n", "utf8");
