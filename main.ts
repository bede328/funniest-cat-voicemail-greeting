import { mkdirSync, writeFileSync } from "node:fs";

const line = "Hi, it's Biscuit. I knocked your glass off the table and I'm not sorry. Leave a message, I'll knock that off too.";
if (line.length < 1 || line.length > 120) throw new Error(`entry must be 1-120 characters, got ${line.length}`);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
