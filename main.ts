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
//
// Before copying, the program checks that POST.json is well-formed
// structured text carrying a web address, so a damaged file is rejected
// with a clear error instead of slipping into the output folder. After
// copying, it reads the copy back and compares it byte for byte with
// the original, so a faulty write is caught at once.

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

// Check the file is valid structured text with a web address field.
let parsed;
try {
  parsed = JSON.parse(post.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${err.message}`);
  process.exit(1);
}
if (
  parsed === null ||
  typeof parsed !== 'object' ||
  Array.isArray(parsed) ||
  typeof parsed.url !== 'string' ||
  parsed.url.trim().length === 0
) {
  console.error(
    'POST.json failed validation: expected a JSON object with a non-empty string "url" field',
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), post);

// Read the copy back and make sure it matches the original exactly.
let copied;
try {
  copied = readFileSync(join(outDir, 'POST.json'));
} catch (err) {
  console.error(`could not read back the copied POST.json: ${err.message}`);
  process.exit(1);
}
if (!post.equals(copied)) {
  console.error(
    'copied POST.json does not match the original byte for byte; refusing to continue',
  );
  process.exit(1);
}
