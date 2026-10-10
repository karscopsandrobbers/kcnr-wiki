---
title: Jail and the law
summary: At 1 to 3 stars an officer writes you a ticket. At 4 or more you can be arrested, or killed for a takedown, and you spend time in a cell.
section: crime
order: 3
---

## Tickets (1 to 3 stars)

An officer within 15 m writes it. The fine depends on how serious your recent crimes were. You have **30 seconds** to
pay it with `/payticket` (`/pay`) within 15 m of an officer, which clears your stars and your circles. Not paying in time
is **Unpaid Ticket, 4 stars**.

**Speed cameras** are separate: crossing one too fast costs $200 or $300, half as much again driving against traffic.
Pay it at any police station desk. You can't join the police while one is unpaid.

## Arrest (4 stars or more)

The officer has to be within 4.5 m of you (more if you're in the same vehicle, less indoors). You put your hands up and
kneel, and you're cuffed on the ground; with an APB you're tackled where you stand instead. Then you're stood up and
walked into the back of a police car (any emergency vehicle, or the officer's own car) if one is near, and the arrest completes once you're in it; with none near, a few
seconds after the cuffs. You're held still until it does. `/breakcuffs` (`/bc`) gives you a 5 in 16 chance of breaking free, every 10 seconds; a failed try
is **Escape**, 1 star, and the whole server hears about it.

The arrest is off if you break free, or the officer goes down, goes off duty, leaves or walks away from you. **Quitting
is not a way out**: quit mid-arrest and you're arrested as you go, and you log back in to your cell. Quitting in jail
doesn't end your sentence either.

**In cuffs** you walk like a prisoner, hands behind your back. You can't run, jump, fight, aim, shoot, switch weapons,
take cover or get in or out of a vehicle. Only somebody wanted can be cuffed, and an officer cuffs you the same way, on
your knees first, even when it isn't an arrest.

**Takedown:** killed by an officer while you have 4 or more stars, you go to a cell just as if you'd been arrested. Not
while you're already being arrested: dying then just ends the arrest.

## Stopping when told

An officer's megaphone reaches you within 30 m. You have 5 seconds to pull over, or on foot to kneel (`/kneel`) or
surrender (`/surrender`, `/handsup`); <kbd>G</kbd> gets you back on your feet. Ignoring it is Evading Police, one
more star.

## Being searched

An officer can frisk a civilian within 1.5 m, and for six seconds you're playing different games:

- **You** see a clock and a key. Every six taps of <kbd>E</kbd> hides one whole pile where the search won't reach it,
  up to three (contraband first). A worn duffel bag costs two of the three. <kbd>Backspace</kbd> pulls away instead,
  which ends the search and is Escape, 1 star; so is walking more than 3 m off. Cuffs take that option away.
- **The officer** sees nothing for those six seconds, then a list: contraband in red, legal items in white. Contraband
  goes into evidence, or the officer keeps it and takes the risk. Drugs sent into evidence charge you: Drug Possession,
  1 star, or Drug Trafficking, 2 stars, for more than 20 doses (see [Drugs](../drugs/)).

You can't be searched again for 45 seconds.

## Jail

- **Sentence: 30 seconds, or 60 with an APB.** You get an APB from walking out of a bank or Vangelico with the take,
  or when five officers have you in sight at once.
- After the sentence, a **$1,000 bail** counts down by $50 or $100 a second; at zero you walk free. `/bail` pays what's
  left, and `/bail [name]` pays somebody else's.
- You serve it in a prison outfit in a cell at Mission Row, and walk out on its front steps.
- **Arrested or taken down, you lose a quarter of your rounds**: a quarter of every kind of ammo you carry is taken and
  booked into evidence. You keep your guns.
- Dying while jailed puts you back in a cell, with no hospital bill.
- Dying while cuffed takes the cuffs off before you respawn.

## What you lose

- Your stars, your circles, and any robbery you were in the middle of.
- **Till cash** from a hold-up, if you're arrested inside that job's circle while an officer is online.
- **Your personal vehicle**, if it's within 60 m when you're arrested: it's impounded, and getting it back costs $1,000 a star,
  plus $10,000 with an APB, up to $100,000. If a Contracted tow driver is on duty nearby, the car waits at the kerb for 2 minutes as
  a tow call, and nobody can drive it; if nobody comes, the lot sends its own truck.

## Tips

- At 1 to 3 stars, paying the ticket straight away is usually cheapest.
- Cuffs stop you pulling away from a search, so break them before the officer starts one.

Related: [Wanted level and heat](../wanted-level-and-heat/) · [Police](../police/) · [Shop robberies](../shop-robberies/)
