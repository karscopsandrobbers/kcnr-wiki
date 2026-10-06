---
title: Houses
summary: Buy a house to wake up in, lock friends in or out of, and keep a dog or a cat. Up to five, with property tax about once a day.
section: life
order: 3
opens: From the start, with the price in cash
---

There's no level. Your first house pays the **Buy a house** goal: $2,500 and 400 XP.

## Finding one

There are hundreds of houses, and they are the only property you can buy: the apartments, hotels and motels on the
map aren't for sale. At each door a label shows "Unowned House" and its price (green if your cash and bank
cover it and the stamp duty, red if not), or the owner's name for it. Yours show on the map as "My House". Walk onto
the door's marker and its menu opens:

- an unowned house: **Preview house for purchase**;
- your house: **Enter House**;
- somebody else's: **Enter House** if it's unlocked, or **Enter House Access Password** if it has one;
- police on duty: **Enter House (duty)**.

## Buying

1. **Preview it.** You tour the inside on your own.
2. **Press <kbd>H</kbd>** when you're ready: **Purchase House** or **Decline & Exit**. Purchase House buys at once,
   with no second question.
3. The price comes from your cash, plus **2% stamp duty** from cash, then bank.

You can own **5 houses**. A new one is named "*your name*'s new house".

## Your house

<kbd>H</kbd> inside your own house opens its menu:

- **Statistics:** its number, name and purchase date.
- **Evaluation:** what it's worth on the market, and selling it back to the city (below).
- **Pets.**
- **Settings:** lock or unlock it, **Spawn in house**, change the name, set or remove an access password.

**Spawn in house** puts you inside it when you log in; after a death you still wake at a hospital. The exit marker
inside takes you out. Houses don't store items yet: a personal vehicle's boot is the place to keep things.

## Selling it back

**Evaluation**, then **Sell house to government**, sells it to the city for **80% of its market price**, paid in cash at
once. It asks you to confirm first, and it can't be undone. You're put outside, the house is unlocked, its name and
password are cleared, and nobody spawns in it any more. Its pets go with it.

## Pets

| Pet | Price | What it does |
| --- | --- | --- |
| Big dog (Rottweiler, Shepherd, Husky, Retriever) | $12,500 | Barks a moment, then goes for an intruder, and it can kill |
| Small dog (Poodle, Pug, Westie) | $5,000 | Barks the house down and warns you |
| Cat, up to 2 | $4,000 each | Bolts away from an intruder, and you hear about it wherever you are |

A house keeps one dog. 6% sales tax goes on top, and rehoming a pet gives nothing back.

- **Buy them from the Pets row** of the house menu (<kbd>H</kbd>). You choose whether it's a he or a she, and it gets a
  name that fits. Rename it from the same menu: type the name in chat, up to 24 letters.
- **They live in the house.** They only appear while somebody is inside, and they belong to the house: they're sold
  with it, and cleared when it changes hands.
- **Anybody inside can pet them.** A floating prompt on the animal lets you pet a dog, or send it to sit or lie down.
  An intruder gets nothing: "It will not come anywhere near you."
- **Who counts as an intruder:** somebody who walked in through an **unlocked door**, or who used the **password
  while no owner was home**. You, a friend you let in, a tenant, a police officer on duty and a staff member on duty
  never are. A password entry with you standing inside is a guest, not an intruder.

## Property tax

Each house is billed at most once every 24 real hours, when the game week turns. The bill comes from your cash, then
your bank. If you're offline or short, what's left is added to your next bill with 5% on top. If you're online when
it's taken, you're told what was paid and what is still owed. Once the debt grows large you're also
told "A lien is on this property", which for now is a warning and nothing more.

How it's worked out: the first $250,000 of the house's value is untaxed; above that, value up to $1,000,000 counts at
0.8, then 1.0, 1.2 and 1.4; that's taxed at the district's rate, 0.02% in the cheapest district to 0.06% in the
dearest; and the bill always lands between 0.01% and 0.25% of the value.

| House price | Cheapest district | Dearest district |
| --- | --- | --- |
| $250,000 | $25 | $25 |
| $500,000 | $50 | $120 |
| $1,000,000 | $120 | $360 |
| $2,500,000 | $410 | $1,230 |
| $5,000,000 | $980 | $2,940 |

`/taxzone [price]` tells you the district you're standing in and what a house at that price would be billed. City
Hall's **Property tax** page lists every district, cheapest first.

## Tips

- **Read the price colour at the door** before you preview.
- **Preview first, then decide**: Purchase House doesn't ask twice.
- **Check the tax before you buy** with `/taxzone`.
- **Give friends the password** instead of leaving the door unlocked.
- **Keep money in the bank**: an unpaid bill grows 5% each time.
- **Dying indoors** wakes you at a hospital in the open world, never inside the house: see
  [Death and respawn](../death-and-respawn/).

Related: [Money](../money/) · [Vehicles](../vehicles/) · [Death and respawn](../death-and-respawn/) · [Wildlife](../wildlife/) · [Your first hour](../your-first-hour/) ·
[Bank robberies](../bank-robberies/)
