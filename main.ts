import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the gadget I use every day: my phone.
// Its battery treats the last fifth of charge as beneath it and
// clocks out before lunch — a device with one job, quitting early.
const ROAST =
  "My phone's battery hits 20% and acts like the last fifth is beneath it — one job, stay alive, and it clocks out before lunch every single day.";

// The gate allows 1–200 characters of UTF-8 text; fail loudly if
// a future edit ever breaks that limit instead of shipping it.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1–200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
