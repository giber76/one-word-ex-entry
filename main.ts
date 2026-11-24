// One Word From Your Ex — make.fun bounty u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
// The entry is exactly one word: the word an ex would use to describe you.
// "manchild" — one word, instantly lands, painfully honest, and funny because
// the entrant plainly knows it. No explanation, no synonym swaps it without
// losing the edge: a grown man who still needs looking after.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "manchild";
// Guard: the entry must be exactly one word with no whitespace or newline.
if (!/^[^\s]+$/.test(ENTRY)) throw new Error("entry must be a single word");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
