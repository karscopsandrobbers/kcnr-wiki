---
title: Banks and hacking
summary: Get into a bank vault for cash trolleys and deposit-box jewellery. Drill the door quietly, hack it or blow it open.
section: crime
order: 5
opens: Total level 3
tables: [hacking]
---

## When you can start

- A civilian, out of cuffs and jail, not on a mission, past the walkthrough, at **total level 3**.
- **Gear:** a **Big Rotary Drill** for the vault door and the deposit boxes (24/7 and gas station counters stock it);
  a **duffel bag on your back**, for the boxes only; **sticky bombs** if you want to blow the door. Hacking gear helps
  but is never needed.
- **Crew:** optional, up to 12. Whoever joins is in.
- **Gear shops:** the drill is on the counter of every 24/7 and gas station, which also sell the blow torch. Ammu-Nation
  always stocks the blow torch and the gas mask.

## The banks

| Bank | How it starts | Door strength | Inside | Closed after a job |
| --- | --- | --- | --- | --- |
| Six Fleeca branches | Walk up to the vault door with a drill, or use the terminal | 10 | 3 cash trolleys, 9 deposit boxes | 15 minutes |
| Blaine County Savings (Paleto Bay) | Walk up, like a Fleeca | 12 | 3 cash piles | 24 minutes |
| Pacific Standard | Only from `/heists`, typed inside a house you own | 15 | 6 cash piles | 1 hour |

The clock is **6 minutes**, or **12 at Pacific Standard**, from the moment the job starts.

## How it works

1. **Prepare (optional).**
   - **Disable the alarm**: <kbd>G</kbd> at the bank's terminal. It's a hack: win and the alarm and cameras are off for
     10 minutes; lose and the alarm goes off. Not once the job has started.
   - **Cut the power (Fleeca only)**: an electrical box on the street near the branch, with a knife, switchblade,
     dagger, machete, hatchet or battle axe, 30 seconds at the box. No alarm, cameras or lights for 60 seconds, but the
     police are told about the power cut.
   - **Mask up**: a camera that sees your face gives the police your name.
2. **Start the job.** At a Fleeca or Blaine County, <kbd>E</kbd> on the **Drill** marker at the vault door, or
   <kbd>Y</kbd> ("Open the vault") at the terminal. Pacific Standard: `/heists` inside a house you own.
3. **Get through the door, one of three ways:**
   - **Drill it** (<kbd>E</kbd>): feed the bit with <kbd>W</kbd> and <kbd>S</kbd> and watch
     the heat; <kbd>Q</kbd> and <kbd>E</kbd> change its speed. Overheat on the vault door and
     **the drill is destroyed**. This is the only way through without a sound.
   - **Hack the terminal** (<kbd>Y</kbd>, "Hack the vault"). The crew gets **two attempts** a job; every failure sets off
     the alarm, and walking away from the puzzle doesn't count as one. **A hacked-open vault sets off the alarm** unless
     you disabled it or cut the power first.
   - **Blow it**: sticky bombs on the door take 3 to 7 off its strength each. Every blast sets off the alarm.
4. **Empty the vault.**
   - **Trolleys** (Fleeca): press **Grab**. It takes about 37 seconds and brings its own bag. A ring closes on a mark at
     the bottom of the screen: press <kbd>E</kbd> as it meets the mark and you grab 1.5 times faster until the next one.
   - **Deposit boxes** (Fleeca): <kbd>G</kbd> at a box with the drill, a worn duffel bag and free arms. Six of the nine
     are worth drilling, different ones every job; about one in ten is empty, the rest hold a piece of jewellery.
   - **Cash piles** (Blaine County, Pacific Standard): press **Take**. One pile each.
5. **Get out.** Once the vault's open, the job ends when the whole crew is out of the building, or on the clock. If
   anything noticed you, each robber gets **2 stars and an APB**.

**Joining a job already running:** the drill or the terminal at that bank, or `/jr` near the vault door, up to 12, and
not once less than about a third of the clock is left. Dying, being jailed or changing team takes you out with nothing. Quitting the game with any of the loot from the job
  in a bag still counts as the robbery: you're charged, the cooldowns start on you, and the last robber leaving shuts the
  bank.

## Pay

| What | Pays |
| --- | --- |
| A Fleeca trolley | $15,000 to $30,000, three a branch |
| A Blaine County pile | $15,000 to $30,000, three piles |
| A Pacific Standard pile | $30,000 to $60,000, six piles |
| A deposit box | A piece of jewellery for the pawn shop, about nine boxes in ten |
| Finishing the job | 150 civilian XP and 100 Robbing XP, to every robber |
| Every successful hack | 40 civilian XP and 46 Hacking XP |

Vault cash is **split evenly at the end** between everyone still in the job; jewellery belongs to whoever bagged it.
**You can rob one bank an hour**, whichever branch, and each bank has its own cooldown. `/rcd` lists them.

**A clean job** (no alarm rang, nothing put a name to you, nobody in the bank saw it) gives no stars and no APB: you'll
see a **[CLEAN]** message.

## Hacking

You hack the terminal beside a vault and the jeweller's counter computer. Each bank is dealt one puzzle and keeps it
until the next job there, and its alarm panel asks the same one, so the panel tells you what the vault will ask.
Pacific Standard always uses the password terminal.

| Puzzle | What you do |
| --- | --- |
| Circuit breaker | Steer a line from port to port without touching anything (<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or the arrow keys) |
| Data crack | Stop seven sliding bars in the green |
| Brute force | Click the right letters as they roll past |
| Password terminal (Pacific Standard) | Find the password among the noise; each miss tells you how close you were |

With nothing, a bank's hacks are hard: the circuit breaker, the data crack and brute force all ask the most of you. Gear from [Lester](../lester/) and your Hacking level make them easier in
steps: see the table below. Hacking level 2 comes at 3 successful hacks, 3 at 6, 10 at 42 and 20 at 188. The alarm panel tells you what helped: your
laptop takes the most off, your hacking skill a little, and the USB drive in the laptop covers a failed attempt.
Gear and skill do **not** help the drill, the plasma cutter or a shop safe's dial.

While a puzzle is up, chat is hidden, your gun is holstered and nothing fires or swings. The circuit board always starts
from the left. One pair of hands: you can't start another hack, door, deposit box or trolley until the one you're on
ends.

## Tips

- Only the drill opens a vault door silently.
- With the alarm disabled, nothing inside sets it off for 10 minutes: not the door, the bombs or gunshots.
- A suppressed shot doesn't set the alarm off, but anyone within about 9 m still hears it.
- Don't all step outside while someone still wants the boxes: an empty building ends the job. The boxes stay open to the
  drill until the building empties, even after the last trolley.
- Relog while you're inside a bank vault and you come back where you were before you went in.
- The vault cash isn't yours until the job ends. Die halfway through and your share is gone.

Related: [Carrying things](../carrying-things/) · [Lester](../lester/) · [Selling stolen goods](../selling-stolen-goods/) · [The jeweller](../the-jeweller/) ·
[Wanted level and heat](../wanted-level-and-heat/) · [Groups and parties](../groups-and-parties/)
