# KCNR Wiki

The pages of **[wiki.kcnr.net](https://wiki.kcnr.net)**, the player guide for Kar's Cops and Robbers. Anyone can
suggest a change; staff review every one before it goes live.

## Suggesting a change

**The easy way:** open the page on wiki.kcnr.net, press **Suggest an edit** at the bottom, sign in with Discord, make
your change and say why. Staff review it on Discord, and the KCNR Wiki bot DMs you when it's decided. You need to be
in the [KCNR Discord](https://discord.gg/015PUGNMp4fqHR1Wz).

**With a GitHub account:** edit the file here and open a pull request. A check runs on it, staff review it, and once
it's merged the site rebuilds itself within a few minutes.

## What is where

| Folder | Game | Address |
| --- | --- | --- |
| `kcnrv/` | KCNR V (FiveM) | `wiki.kcnr.net/<file name>/` |

A page's file name is its address: `kcnrv/fishing.md` is `wiki.kcnr.net/fishing/`. The site itself (layout, the
tables of game numbers, the editor) lives in a separate, private repo; only the words live here.

## Writing a page

Every page starts with a header between two `---` lines:

```yaml
---
title: Fishing
summary: Buy a rod and bait, find water, cast, fight the fish in, then sell it by weight.
section: jobs
order: 5
opens: From the start; the Large Cooler at Fishing level 7
tables: [fish]
---
```

| Field | |
| --- | --- |
| `title` | The page's name, also in the sidebar. |
| `summary` | One line: under the title, on the home page's cards, and in search results. |
| `section` | `start`, `progression`, `jobs`, `crime`, `teams` or `life`. |
| `order` | Its place in the section. *Start here* and *Your progression* are read in this order. |
| `opens` | Optional: when a player can first do it ("Total level 3", "Police"). |
| `tables` | Optional: tables of game numbers drawn after the text: `levels`, `skills`, `fish`, `lester`, `hacking`. |

Then the text, in Markdown:

- **Write for players**: plain English, "you", no code or file names.
- **Every number comes from the game.** Say where you got it when you suggest a change, so it can be checked.
- **Keys** are `<kbd>E</kbd>`. That is the only HTML a page may use.
- **Links** to other pages are relative: `[Fishing](../fishing/)`.
- A page on the reading path (Start here, Your progression) ends with a **Next:** line; a feature page names the
  related ones at the bottom.

`node scripts/check.mjs` checks every page the way the pull-request check does.
