---
title: Racing
summary: Race other drivers for a pot of cash, or race the clock on a built track for a place on the lap board.
section: life
order: 5
opens: From the start, as a civilian
---

Any civilian at the wheel of anything can race: there's no level and no car class. Officers, medics and firefighters
can't, and nobody can while on a job, in a robbery or stick-up, cuffed, being arrested or in jail. A racer counts as
being on a job: `/mission leave` or dying takes you out of the race, and everything else that refuses a driver on a job
refuses a racer.

Race distances are always shown in kilometres and metres, whatever your Measurement System setting.

## Four ways to race

| | Street race | Heads-up | Track race | Time trial |
| --- | --- | --- | --- | --- |
| Starts | Set a waypoint and type `/race [stake]` | Stop at a red light beside another driver | Staff host it at a track's start | Pull up on a track's start flag, pick **Time Trial** |
| Who's asked | Civilian drivers within 100 m | The two of you | Drivers within 150 m | Nobody |
| Time to join | 30 s | 12 s | 60 s | none |
| Stake | $0 to $50,000; $1,000 if you type none | Set for you | Set by staff, up to $50,000 | None |
| Course | One finish 400 m to 9 km away | The next traffic lights | The track's checkpoints: a sprint once, a circuit 2 to 20 laps | One lap |

**Every race card is answered with the horn.** You also have to be near the start to join, and again when the race
goes. Too far away and you're told, or dropped at the start with your stake back.

`/race start` starts a street race early, but only for **whoever opened it** ("Nobody else is in yet" if you're alone).
If the host leaves the lobby, the race is called off for everyone and the stakes are refunded. A full grid says the race
is full, and a track with a laid grid takes only as many cars as it has starting places (16 at most).

**Collisions off.** Staff hosting a track race can turn collisions off between the racers. Your car then drives through
the other racers' cars, which are drawn see-through, so lag can't put two cars that are apart into each other. Traffic
and everybody else are still solid.

**Heads-up:** the stake is $1,000 plus $200 a civilian level, up to $6,000, and never more than the poorer driver's
cash. You must be side by side, facing the same way, both stopped. The first horn hosts
(the other driver's card reads "Race" and the name, then "Waiting on" the name once you've pressed it), the second
matches, and the green light is the start. If either of you lets the card lapse, you're both asked again after 5
seconds. The finish is the next set of traffic lights ahead down your road, or failing that a point
further down it. If the game reports the light, the race starts on the real green; if not, a normal count starts it.

Track races take up to 16 cars. Every race starts with a 5-second count, checkpoints go in order, and rings in the air
are driven through, not under. Once the first car finishes, everyone else has 60 seconds; no race runs past 15
minutes. In a race the clock shows tenths of a second, the standings list the leaders, and the hint line reads "Wait for
the green" at a signal start and "Lap n of m" on a circuit.

**A time trial** puts you on the track's pole slot (or its start point), with the car held for the count; you need to be
on the mark when it goes. It's one lap, with no stake and nobody invited. Leaving the car for 12 seconds or
changing car ends it. On a track nobody has lapped, the notice says whatever you do is the record.

**You're out if** you're out of the car for 15 seconds (12 in a trial), you die, disconnect or type `/race leave`, you
swap cars in a trial, you sit stopped for 5 seconds after a heads-up start, or you aren't at the wheel near the line
when it starts.

## The money

The stake leaves your cash when you join, and comes back if the race is called off before the start or nobody
finishes.

| Cars that started | The pot |
| --- | --- |
| 2 | Winner takes all |
| 3 | 70% / 30% |
| 4 or more | 60% / 30% / 10% |

A place nobody finished in goes to the winner. **The city pays on top**, in any race with at least two starters:

| | Cash | Civilian XP |
| --- | --- | --- |
| Finishing | $150 | 40 |
| 1st / 2nd / 3rd, on top | $800 / $400 / $200 | 120 / 70 / 40 |
| A personal best on a track (any car) | $250 | 50 |
| A new track record | $2,500 | 200 |

The work board adds daily racing jobs and a weekly one (eight races): see [Your first hour](../your-first-hour/).

| Daily job | Cash | Civilian XP |
| --- | --- | --- |
| Finish two races | $1,200 | 100 |
| Win one | $2,000 | 150 |
| Set a lap worth keeping | $1,200 | 100 |

"Finish" and "win" only count in a race with at least two starters, so a time trial never counts for them. A **lap worth
keeping** is a personal best or a track record, not just any lap.

After calling a street race you wait 60 seconds before calling another, or 5
if nobody joined.

## Tracks and records

Every built track has a chequered flag on its start line with its name, length, laps and lap record; it shows from 70
m, and pulling up on it opens the track's page. `/race tracks` lists them all. A race lobby adds its stake, pot, number
in and seconds left to the track's flag, and a street race gets a flag at its start while its lobby lasts (a heads-up
gets none, and you see none while you're racing).

Each track keeps your best lap in every car, and its board shows the ten fastest, one row per driver and car, so one
driver can hold several places. A lap in a car you haven't raced before goes on the board but pays nothing unless it's
your best in any car. See the board on the flag, the track's page, or **<kbd>F10</kbd> > Leaderboards > Street
Racing** (more on [Achievements and leaderboards](../achievements-and-leaderboards/)). Every distance on a track or a board is in kilometres, whatever your unit setting. New records are announced in chat, and when staff move a track's checkpoints its board is wiped.

## The police

Street racing isn't a crime, and the police aren't told. Speed cameras still fine you mid-race.
## Tips

- There's no racing skill. Time trials are free, so learn tracks there.
- On a track with no laps set yet, your first lap is the record.
- Time trials don't count towards "Finish two races".
- Stay at the line while a race fills: anyone too far from it at the start is dropped, stake refunded.

Related: [Vehicles](../vehicles/) · [Money](../money/) · [Keys and menus](../keys-and-menus/) ·
[Achievements and leaderboards](../achievements-and-leaderboards/)
