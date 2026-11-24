// One-Liner Marathon entry: writes a single one-line comedy joke to /output/entry.txt.
// The joke inverts the premise — the book that is supposed to help you wants
// nothing to do with you. No trailing newline, so the file is exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const joke = "My self-help book filed a restraining order against me.";

// Guard the gate: one line, 1–280 characters, not only whitespace.
if (!joke || joke.length > 280 || joke.trim().length === 0 || joke.includes("\n")) {
  throw new Error("joke fails the one-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
