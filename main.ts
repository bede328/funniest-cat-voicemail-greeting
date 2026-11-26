import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one voicemail greeting, recorded by the cat herself.
// Gate: 1-120 UTF-8 characters, a single line, no trailing newline.
const line = "Hi, it's Biscuit. I knocked your glass off the table and I'm not sorry. Leave a message, I'll knock that off too.";
const OUTPUT_PATH = "/output/entry.txt";
if (line.length < 1 || line.length > 120) throw new Error(`entry must be 1-120 characters, got ${line.length}`);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
