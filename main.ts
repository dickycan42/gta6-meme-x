// gta6-meme-x-01 entry program (Node, standard library only).
//
// The entry itself is the post on X: the house reads the meme picture and
// the post text straight from X, so this program does not need to say
// anything about either of them. Its entire job is to carry POST.json
// from the repository into the output folder, where the gate picks it up.
//
// Run it exactly the way the grader does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// It prints nothing when it succeeds. The copy is byte for byte: the
// file is read as raw bytes and written back unchanged, so running the
// program twice always produces the same output. No network, no clock,
// no files outside the repository.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

let post;
try {
  post = readFileSync(join(botDir, 'POST.json'));
} catch (err) {
  console.error(`could not read POST.json from ${botDir}: ${err.message}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), post);
