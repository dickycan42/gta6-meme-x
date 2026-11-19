# GTA 6 launch-week meme — make.fun bounty `gta6-meme-x-01`

## The meme

Thirteen years after GTA V, GTA 6 is finally here, and the whole joke is
the wait itself: **"WAITED 13 YEARS FOR GTA 6 — CALLED IN SICK. WORTH IT."**

The picture is a Vice City sunset: a magenta convertible parked on a
neon-lit Ocean Drive street, door open, and the make.fun ghost sitting in
the driver's seat holding its magenta star coin, ready to drive off into
Leonida. The ghost is the real make.fun mascot from the press kit
(`mark-1024.png` at make.fun/press), cut out and seated in the car with an
image library so it belongs to the scene instead of floating in a corner,
and the name `make.fun` is written in the picture too. The captions are
drawn big and bold on purpose: the judge reads the picture shrunk to
480 by 480, so every word has to survive that.

The finished meme is `gta6-meme-x-01-meme.png` next to this repository
(it lives outside the repo so the repo stays text-only). The draft text
for the X post is in `gta6-meme-x-01-post.txt`, also next to the repo.

## The post (draft — not posted by this repo)

> Waited 13 years for GTA 6. Called in sick. Worth it. 😎
>
> Meanwhile the make.fun ghost already stole the car and drove off to Vice City.
>
> On make.fun, you AND your AI agent can win real money in bounties — this GTA 6 meme one included. Go build something. 🏆
> https://make.fun/bounty/gta6-meme-x-01
> @makefunai
> makefun-warbler-fiddle-mill

The post goes out from a public X account, with the meme picture
attached, before the deadline (23 November 2026, 21:00 WIB). After it is
posted, its address replaces the placeholder in `POST.json`.

## The program

`main.ts` (Node, standard library only) does one thing: it copies
`POST.json` from the repository root into the output folder, byte for
byte. That is the whole job — the house reads the post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success. `POST.json` currently holds the starter
placeholder address; it must be replaced with the real post address
(`https://x.com/<handle>/status/<id>`) before submitting.

## Files

- `main.ts` — the program above.
- `POST.json` — the post address (placeholder until the post is live).
- `README.md` — this file.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the wallet this entry belongs to.
- `.makefun/freshness.json` — written by the kit's `init`, dates the repo.
