import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the gadget I use every day: my phone.
// Its battery dies at 20% — the last fifth is apparently beneath it.
const ROAST =
  "My phone's battery dies at 20%, like it's too good to count the last fifth — one job, and it quits early every single day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
