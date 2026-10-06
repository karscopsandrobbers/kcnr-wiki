---
title: Police
summary: Ticket the lightly wanted, arrest the heavily wanted, search pockets, chase, and escort the Gruppe Sechs trucks.
section: teams
order: 2
opens: From the start, if you're not wanted and owe no fines
---

Join at any of the three police desks: Mission Row, Sandy Shores or Paleto Bay (see [Joining a team](../joining-a-team/)).
Only **Mission Row** has the rest of the station:

- **Locker**: a police outfit, or one of the cop, sheriff, ranger, highway patrol, marine, SWAT or FIB characters.
- **Armoury**: free weapons with full ammo. Which ones you can take depends on your police rank.
- **Garage**: police cars, bikes and the Police Maverick helicopter, free, one every 5 seconds.

Every police desk also has **Crime scenes**, **Armoured runs** and **Tickets**.

## Finding the work

- **Dispatch lines** in your chat.
- **Reported crime scenes** as hollow circles on your map; `/scenes` or the desk's **Crime scenes** menu lists them
  and sets a waypoint.
- **911 calls** from civilians, as blips. A call clears when an officer gets within 150 m of it.
- **Backup calls** from other officers, as blips.
- **Every Gruppe Sechs truck run** is on your map.

## Visual contact

Press the middle mouse button or <kbd>B</kbd>, or type `/vc [name]`, to take visual contact of a suspect you can see:
120 m by day, 80 m at night, 50 m more from the air. It starts a pursuit. When five officers are in range of the same
suspect, they're put on an all-points bulletin (APB).

## Ticket or arrest: the stars decide

- **1 to 3 stars** is a **ticket**. You must be within 15 m.
- **4 or more stars** is an **arrest**. You must be within 4.5 m on foot, 4 m more if they're in a vehicle, 1 m less
  indoors. You both have to be on foot, or in the same vehicle.

The middle mouse button does whichever applies; `/ticket` (`/tk`) and `/arrest` (`/ar`) work too.

**A ticket**: the driver has 30 seconds to pay it to an officer within 15 m with `/payticket` (`/pay`), which clears
their stars. The fine depends on their recent crimes. If they don't pay, it becomes **Unpaid Ticket**, 4 stars, and
they're arrestable.

**An arrest**: the cuffs go on and the arrest completes about 9.5 seconds later. A cuffed suspect can try
`/breakcuffs`. They serve 30 seconds in a cell, 60 with an APB, and their own car within 60 m goes to the impound.

**A takedown**: killing a civilian with 4 or more stars counts as an arrest. It pays the full arrest money but only
three quarters of the XP.

## Your tools

| Key | Tool | |
| --- | --- | --- |
| <kbd>X</kbd> | The interaction menu on a civilian | Frisk (within 1.5 m), Handcuff, Remove Handcuffs, Grab someone who's given up, Check Licence on somebody fishing (no licence is 1 star) |
| <kbd>M</kbd> | Megaphone | A stop order to a pursued suspect within 30 m: 5 seconds to pull over, or kneel or surrender on foot; ignoring it is Evading Police, one more star. Once a minute per suspect. If they comply, your arrest pays 25% more |
| <kbd>Left Alt</kbd> | Police tech | Cones, flares, barriers, stingers or an oil slick, on foot or from a police vehicle on all four wheels. How long it stays down grows with your rank |
| <kbd>1</kbd> | Plate reader | In a police vehicle, reads cars up to 40 m ahead. A car flagged at a crime scene names its driver, gives you contact on them and goes out on dispatch |
| <kbd>;</kbd> | Searchlight | The Police Maverick's spotlight locks onto a suspect in sight. With a helicopter in the pursuit, a suspect's escape clock runs at half speed |

`/leo [text]` talks to the other officers, and `/backup [10-code]` puts a backup blip on every officer's map.

**Frisking** is a contest: see [Jail and the law](../jail-and-the-law/) for how a search plays out from both sides.
What you find is your choice: send it into evidence for a bounty, or keep it and take the risk.

**Alarms and statements.** Resetting a ringing alarm at its panel pays 20 XP. After a robbery, a statement prompt
waits 15 minutes; stand within 20 m of it to take it. It pays 20 XP and can name the robber.

**Gruppe Sechs escorts.** Sign up at the desk under **Armoured runs**, or `/escort` within 100 m of a truck
(`/escort off` stands you down). Up to three officers escort a run, and you're paid for a leg if you stay within 120 m
of the truck for 60% of it. See [Gruppe Sechs trucks](../gruppe-sechs-trucks/).

**Speed cameras** run on their own and fine civilian drivers $200 or $300, half as much again for driving against
traffic. A driver with an unpaid camera fine can't join the police until it's paid.

## Pay

All police money goes into your [paycheck](../joining-a-team/), except evidence bounties and the deficit bonus, which
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
| An item booked into evidence | $250 cash (Gruppe Sechs cargo: a tenth of its worth, at least $250) |
| A Gruppe Sechs escort | $400 a leg, $1,200 for seeing the run to the depot |

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
[Jail and the law](../jail-and-the-law/) · [Gruppe Sechs trucks](../gruppe-sechs-trucks/)
