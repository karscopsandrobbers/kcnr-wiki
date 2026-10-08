---
title: Police
summary: Ticket the lightly wanted, arrest the heavily wanted, search pockets, chase, and escort the Gruppe Sechs trucks.
section: teams
order: 2
opens: From the start, if you're not wanted and owe no fines
---

Join at any of the four police desks: Mission Row, La Mesa, Sandy Shores or Paleto Bay (see [Joining a team](../joining-a-team/)).
Only **Mission Row** has the rest of the station; **La Mesa** has a garage too:

- **Locker**: a police outfit, or one of the cop, sheriff, ranger, highway patrol, marine, SWAT or FIB characters.
- **Armoury**: free weapons with full ammo. Which ones you can take depends on your police rank.
- **Garage**: police cars, bikes and the Police Maverick helicopter, free, one at a time: taking another takes your
  last one away once nobody is in it, and it goes when you leave the police. Ten seconds between two.

Every police desk also has **Crime scenes** and **Tickets**, and for officers **Armoured runs**.

## Finding the work

- **Dispatch lines** in your chat.
- **Reported crime scenes** as hollow circles on your map; `/scenes` or the desk's **Crime scenes** menu lists them
  and sets a waypoint.
- **911 calls** from civilians, as blips. A call clears when an officer gets within 150 m of it.
- **Backup calls** from other officers, as blips.
- **Ringing alarms.** An alarm you can hear flashes its building on your map from anywhere in the city, for up to 2
  minutes. Silent alarms don't.
- **Every Gruppe Sechs truck run** is on your map: blue on its rounds, flashing red once somebody has attacked it. When
  a run leaves the depot, every officer gets a message with its run number, how many stops it makes, the first stop, and
  what escorting pays. Nobody else is told.

## Visual contact

Press the middle mouse button or <kbd>B</kbd>, or type `/vc [name]`, to take visual contact of a suspect you can see:
120 m by day, 80 m at night, 50 m more from the air. It starts a pursuit. When five officers are in range of the same
suspect, they're put on an all-points bulletin (APB).

**While you're on them:**

- A suspect an officer can see **pulses** on the officers' map. A solid blip means wanted but unwatched.
- With **two or more officers** on one suspect, their blip also names the way they're heading and their speed.
- After a few minutes of pursuit, dispatch keeps calling out their street, with how many officers are on them and
  the car they're in.

**When you lose them.** If every officer loses sight of a suspect for long enough, the pursuit is lost. You keep a
faded **ghost** on the map where they were last seen, in the colour their blip had, and nothing that follows them. The
ghost lasts a few minutes, and fewer the more stars the suspect has.

It ends early if anything finds them again, such as a plate-reader hit or a fresh sighting. When it runs out, dispatch
announces a sighting and their live blip comes back.
The suspect sees the same clock: see [Wanted level and heat](../wanted-level-and-heat/).

## Ticket or arrest: the stars decide

- **1 to 3 stars** is a **ticket**. You must be within 15 m.
- **4 or more stars** is an **arrest**. You must be within 4.5 m on foot, 4 m more if they're in a vehicle, 1 m less
  indoors. You both have to be on foot, or in the same vehicle.

The middle mouse button does whichever applies; `/ticket` (`/tk`) and `/arrest` (`/ar`) work too.

**A ticket**: the driver has 30 seconds to pay it to an officer within 15 m with `/payticket` (`/pay`), which clears
their stars. The fine depends on their recent crimes. If they don't pay, it becomes **Unpaid Ticket**, 4 stars, and
they're arrestable.

**An arrest**: the cuffs go on and the arrest completes about 9.5 seconds later. A cuffed suspect can try
`/breakcuffs`. They serve 30 seconds in a cell, 60 with an APB, and their personal vehicle, if it's nearby, goes to the impound. If a tow driver of rank 3 is on duty nearby, the car
waits at the kerb for up to 2 minutes as a live tow call, and you're told a tow has been called. Nobody can drive it
away meanwhile. If no driver comes, the lot sends its own truck. See [Tow dispatch](../tow-dispatch/).

**A takedown**: killing a civilian with 4 or more stars counts as an arrest. It pays the full arrest money but only
three quarters of the XP.

## Your tools

| Key | Tool | |
| --- | --- | --- |
| <kbd>X</kbd> | The interaction menu on a civilian | Frisk (within 1.5 m), Handcuff, Remove Handcuffs, Grab someone who's given up, Check Licence on somebody fishing (no licence is 1 star) |
| <kbd>M</kbd> | Megaphone | A stop order to a pursued suspect within 30 m: 5 seconds to pull over, or kneel or surrender on foot; ignoring it is Evading Police, one more star. Once a minute per suspect. If they comply, your arrest pays 25% more |
| <kbd>Left Alt</kbd> | Police tech | Cones, flares, barriers, stingers or an oil slick, on foot or from a police vehicle on all four wheels. How long it stays down grows with your rank; up to 15 of yours can be down at once |
| <kbd>1</kbd> | Plate reader | In a police vehicle, reads cars up to 40 m ahead. A car flagged at a crime scene names its driver, gives you contact on them and goes out on dispatch |
| <kbd>;</kbd> | Searchlight | The Police Maverick's spotlight locks onto a suspect in sight. With a helicopter in the pursuit, a suspect's escape clock runs at half speed |
| <kbd>J</kbd> | Silence the siren | In any emergency vehicle you're driving with its siren on |
| <kbd>G</kbd> / <kbd>X</kbd> | Fishing pots | At a pot's buoy: **Inspect** it, or **Seize** it |

`/leo [text]` talks to the other officers, and `/backup [10-code]` puts a backup blip on every officer's map.

**Drugs.** **Drug Test** in the menu on a civilian next to you shows anything they have taken in the last three hours:
positive at the wheel is Driving Under the Influence, plainly high on foot Public Intoxication. Seeing somebody take a
dose, sell on a corner or hand drugs over charges them, and drugs you book in a frisk charge Drug Possession, or Drug
Trafficking for a dealer's amount. See [Drugs](../drugs/).

**Frisking** is a contest: see [Jail and the law](../jail-and-the-law/) for how a search plays out from both sides.
What you find is your choice: send it into evidence for a bounty, or keep it and take the risk. Something a suspect holds in their hands, like a briefcase, falls to the ground when you frisk them, and you pick it up from there: see [Carrying things](../carrying-things/).

**Fishing pots.** At a pot's buoy, <kbd>G</kbd> reads it: how long it has been down, how many fish are in it, and its
condition, and it says so when the pot is ghost gear that has been fishing itself for hours. <kbd>X</kbd> **seizes** it.
The pot and its catch are destroyed, and the city pays you **$150** in cash. See [Fishing](../fishing/).

**Alarms and statements.**

- **At a building's alarm panel,** press <kbd>E</kbd> at **Reset the alarm**. A ringing alarm goes quiet, it pays 20 XP,
  and dispatch is told you answered it.
- **The panel also reads you the tape**, ringing or not: the latest sightings of anyone there, each as a masked
  suspect or by name, what they were carrying, and how many minutes ago.
- **After a robbery,** a statement prompt waits 15 minutes; stand near it to take it. It pays 20 XP.
  A witness who saw a face names the robber. A witness who saw only a mask gives you a description of the mask.

**Gruppe Sechs escorts.** Sign up at the desk under **Armoured runs**, or `/escort` next to a truck
(`/escort off` stands you down). Up to three officers escort a run, and you can be on one run at a time.

- **The desk's menu** lists every run on the road: where it's heading, how many officers are on it out of three, and
  which one is yours. If no truck is within reach of `/escort`, you're told so, and the desk lists them all.
- **Your run turns green** on the map with a route to its truck. Timer bars show the run, its next stop, how far you are
  from the truck (green when you're close enough, red when you're too far) and how far through the leg and the whole run you are.
  The bars turn green once you've been near enough to be paid.
- **You're paid for a leg** if you stayed close to the truck for most of it, and it goes into your paycheck. The
  clock for a leg starts when the leg does, whoever has signed up, so joining late gets you less of it. You're told what a
  leg paid, or that it didn't and how much of it you were there for.
- **Officers can't hurt a run.** Its guards, and its truck and escorts while Gruppe Sechs has them, take no damage from
  you, and you can't fire on them. Nothing you do to a run counts as an attack.
- **Cargo.** Cargo you find in a frisk goes the frisk's way. Using a piece of G6 cargo from your inventory asks whether
  to **book it into evidence** or **force it open** for the cash (dirty, and a Corruption mark on your record). At the
  back of a truck that robbers took, you can book everything left in it for a tenth of its worth; a truck Gruppe Sechs
  still has, or one nobody robbed, gives you nothing. You can't drill a truck or take cargo from one.

See [Gruppe Sechs trucks](../gruppe-sechs-trucks/).

**Speed cameras** run on their own and fine civilian drivers $200 or $300, half as much again for driving against
traffic. A driver with an unpaid camera fine can't join the police until it's paid.

## Pay

All police money goes into your [paycheck](../joining-a-team/), except evidence bounties, the deficit bonus and a seized fishing pot, which
are cash on the spot.

| Work | Pay |
| --- | --- |
| An arrest | $400 + $150 a star, counting up to 6 stars ($1,000 at 4 stars, $1,300 at 6) |
| The suspect obeyed your stop order | +25% |
| You searched them in the 3 minutes before | +$50 |
| Another officer's arrest from your pursuit | 10% to 60% of their arrest money, by how long you held contact |
| ...each of your stingers that got their tyres | +$100 |
| ...holding them in the spotlight | +$75 |
| A ticket collected | The whole fine |
| A fine collected while the city is in deficit | +25% of the fine, in cash, to you |
| An item booked into evidence | $250 cash. Loose drugs: a quarter of what a corner sells them for, with no minimum. A crate, or a box of drugs: half its price, at least $250. Gruppe Sechs cargo: a tenth of its worth, at least $250 |
| A Gruppe Sechs escort | $400 a leg, $1,200 for seeing the run to the depot |
| A fishing pot seized | $150 cash |

| Work | XP |
| --- | --- |
| An arrest | 40 + 10 a star, counting up to 6 stars |
| ...with an APB on them | +30%, between 5 and 30 more |
| ...they surrendered / knelt | +5 to 15 / +3 to 8 |
| ...the pursuit before it | +1 for every 10 seconds, up to 40 |
| ...searched first | +10 |
| A takedown | Three quarters of the arrest XP |
| A ticket issued / collected | 5 to 15 / 5 to 15 |
| An alarm reset / a statement taken | 20 / 20 |
| Gruppe Sechs: a leg escorted / the run completed / first on scene of an attack / each piece of cargo booked | 15 / 40 / 20 / 10 |

## Rank

Police rank opens the armoury's weapons and keeps your tech down longer, from a minute at rank 0 to an hour at rank
30. The full lists are on [What unlocks when](../what-unlocks-when/).

## Corruption

Keeping what you find instead of booking it puts a dirty mark on your record (it's a leaderboard column) and
Corruption on your crime record, and the person you searched is told. Three searches in an hour that find nothing on
people who weren't wanted bring a complaint: the city pays $5,000 to settle it, out of the same treasury your wages come
from.

## Tips

- **Cuff before you search**: a cuffed suspect can't pull away from the frisk.
- **Bring them in alive**: a takedown pays only three quarters of the XP.
- **Search before you arrest**: it's worth $50 and 10 XP on top.
- **Free guns are only at Mission Row.** The other stations just have a desk.

Related: [Joining a team](../joining-a-team/) · [Wanted level and heat](../wanted-level-and-heat/) ·
[Jail and the law](../jail-and-the-law/) · [Gruppe Sechs trucks](../gruppe-sechs-trucks/) · [Carrying things](../carrying-things/)
