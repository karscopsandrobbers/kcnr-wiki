---
title: Wanted level and heat
summary: Crimes give you stars and leave a red circle on your map. Your stars only fade once you're out of every circle and out of sight.
section: crime
order: 2
---

Only civilians carry stars; officers, medics and firefighters never do.

## Stars

- **1 to 3 stars**: you're a **Suspect**, shown in yellow. An officer can only write you a ticket.
- **4 to 6 stars**: you're a **Criminal**, shown in orange. An officer can arrest you, or kill you for a takedown.

| What you did | Stars | Shown as |
| --- | --- | --- |
| A shop hold-up, noticed | 1 | Robbery |
| A shop hold-up that took nothing, noticed | 1 | Attempted Robbery |
| An ATM | 2 | Robbery |
| Holding up a pedestrian | 2 | Robbery |
| Pickpocketing, when they notice and the call gets through | 1 | Robbery |
| Shaking down a dealer who pays / who refuses | 4 / 2 | Robbery |
| Robbing a player with an officer within 60 m | 5 (4 if you took nothing) | Robbery |
| Killing a player | 4, or 5 with an officer nearby | Murder |
| Driving off in a police or emergency vehicle | 2 | Theft |
| Aiming at an officer within 60 m on foot | 2 | Domestic Violence |
| Firing a gun, with no stars, where an officer can see | 2 | Disturbing The Peace |
| Ignoring a megaphone stop order | 1 | Evading Police |
| Pulling away from a search, or failing to break cuffs | 1 | Escape |
| Not paying a ticket within 30 seconds | 4 | Unpaid Ticket |
| Three reported incidents in an hour | 1 | Disturbing The Peace |

**Reports.** When somebody phones a crime in, or an officer sees it, it's worth one more star, never past 6.

## The red circle: your crime scene

Every crime that gives stars drops a circle where you were seen. **Inside it your stars never drop.** A mask halves its
size; a new crime close to it joins it, moves it to where you just were and grows it; you never have more than three. A circle
closes after 10 minutes with no new crime in it, and they all go when your stars reach zero.

| Crime | Circle | Masked |
| --- | --- | --- |
| Robbery (shops, stick-ups) | 250 m | 125 m |
| A bank | 400 m | 200 m |
| An ATM | 150 m | 75 m |
| Murder, Disturbing The Peace | 300 m | 150 m |
| Theft, Domestic Violence, Escape | 150 m | 75 m |
| Evading Police | 200 m | 100 m |
| Unpaid Ticket | 100 m | 50 m |

The police only see a circle once it's been reported.

## How stars fade

Stars drop one at a time, and only while **all** of these are true:

- you're outside all your circles and not in a chase;
- you're not masked in the open (on foot, on a bike, or in a car with the roof down);
- no officer has had you in sight for 2 minutes;
- no officer is near you: 120 m by day, 80 m at night, 50 m more for one in the air.

| Stars now | Time to drop one, near your circle |
| --- | --- |
| 6 | 6 min 48 s |
| 5 | 5 min 40 s |
| 4 | 4 min 32 s |
| 3 | 3 min 24 s |
| 2 | 2 min 16 s |
| 1 | 1 min 8 s |

Distance shortens it: right beside your nearest circle it runs at full time, and far from it, or with no circle left,
at half time. <kbd>F1</kbd> (or <kbd>Z</kbd>) shows a heat bar: green **LOWERING**, or red **HOLDING** with the
reason.

## Witnesses

- **Passers-by** nearby may phone it in, less often if you're masked. The call takes 12 seconds;
  aim at them or shoot them and it never gets through. Driving away doesn't hang up their phone. Somebody on the
  phone shows as a red dot on the map to robbers and wanted players only ("Witness on the phone"), with a red marker
  over their head when you're near and a countdown once you're close.
- **The clerk** phones once every gun is off him and the robbers have left, if nobody else did. Aiming at him doesn't
  stop a call already running; shooting him, killing him, gassing the building or a blast near him does.
- **Customers** may call after a hold-up: 45% if they saw your face, 30% if you were masked. The ones who ran out call
  a quarter of the time, and you can't reach them. Regulars of the shop are likelier to call. **After a bank or Vangelico
  job every customer calls**, masked or not.
- **Gas** stops a call already running, refuses new ones, and nobody who is down in it can call; the customers' calls
  die with the clerk's.

## Being named

The police get your name, and your blip and nametag show your stars, when you commit a crime unmasked, an officer has
you in sight, a camera sees your bare face, a customer who saw your face phones it in, a plate reader reads a car
reported at your scene, or an officer takes statements at the shop and somebody saw your face. Masked with nobody
watching, they know a crime happened, and what you drove, but not who you are. Once you're named at 4 stars or more, a
report puts your name in the news. A statement from a room that only saw a mask gives the officer a description of the
mask, not a name; and a robbery done masked, or in a building gassed so nobody saw, leaves nothing to take a statement
about.

## Masks

Tap <kbd>Right Alt</kbd> to put your mask on or take it off; hold it for a wheel of every mask you carry. Your nametag
reads **Masked**. Any mask that covers the face counts, Ammu-Nation's gas masks included: it always stocks the plain Gas Mask and
rotates the rest (a rebreather, a gray gas mask, visor respirators, the Cerberus mask). The masks you can find include a balaclava, a scruffy and a loose blue mask, a bandit knit, a knit balaclava in many colours, two tape looks, two
bandanas, a ski mask and a stocking mask. The wheel opens when you hold <kbd>Right Alt</kbd>, and lists every mask you carry, the
mask you own as clothing, and a bare face. Balaclavas turn up in parked cars, in dumpsters and off gang members; no
shop sells them. The clothing store won't sell you a mask, and won't change your mask slot while you wear a mask item
(take it off first). Wanted and masked outside your own circle, a passer-by nearby may phone you in now and then.
Only a civilian is ever **Masked**: an officer, a medic or a firefighter keeps their name on their nametag whatever they
wear, and on duty a gas mask is all they can put on.

## Cameras

A camera sees a short way ahead, and only watches during a robbery or while you're wanted. Then every camera
nearby wears a marker: yellow, red when it has you, grey when shot out. The screen reads "ON CAMERA" with
how many cameras have you. Your bare face names you;
masked, it only gives a description. Shooting a camera out is a gunshot indoors, which sets off the alarm unless your gun
is suppressed.

## Chases

A chase starts when an officer takes visual contact. You see "PURSUIT" and how many officers are on you, then "out of
sight" with the seconds left to lose them. Losing and regaining contact show as on-screen alerts for both sides. After a few
minutes dispatch keeps announcing your street, with the officers on you and your car. When the last officer loses sight of you, a clock runs, 20 seconds
at 1 star up to 90 at 6: a helicopter halves its speed, hiding indoors with no officer around doubles it, switching cars
out of sight takes 10 seconds off, and a shot near a chasing officer restarts it. Five officers on you at once puts an
all-points bulletin (APB) on you.

**Shaking them isn't a clean escape.** When every officer has lost you, they lose your live blip and keep a faded ghost
where they last had you, in your blip's colour (what the officers see is on [Police](../police/)), for a few minutes, less the more stars you have.
Anything that finds you again ends it early; when it runs out, dispatch announces a fresh sighting and your blip
returns. You see the same clock.

## Incidents and strikes

Speeding past a camera, driving against traffic, carrying a gun openly for 10 seconds in someone's sight and shoplifting
give no stars: they leave an orange 100 m circle for 5 minutes. One that's reported is a **strike**, and three strikes
in an hour give you a star. Strikes survive a relog.

- **Against traffic:** driving on the wrong side at speed for a few seconds, then a passer-by may phone it in. Only a
  call that gets through counts.
- **Carrying a gun openly:** on foot, outdoors, in somebody's sight. A passer-by may reach for the phone. Melee weapons, the stun gun and tools don't count.

## Tips

- Mask on before the door, off once you're clear and out of sight.
- Leave the circle: distance is what speeds the fade.
- A closed car hides your mask from the fade, but not from being identified.

Related: [Shop robberies](../shop-robberies/) · [Jail and the law](../jail-and-the-law/) · [Police](../police/) · [Death and respawn](../death-and-respawn/) ·
[The Purge](../the-purge/)
