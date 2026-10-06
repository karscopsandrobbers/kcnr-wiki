---
title: Houses
summary: Buy a house to wake up in, lock friends in or out of, and keep a dog or a cat. Up to five, with property tax about once a day.
section: life
order: 3
opens: From the start, with the price in cash
---

There's no level. Your first house pays the **Buy a house** goal: $2,500 and 400 XP.

## Finding one

There are hundreds of houses. At each door a label shows "Unowned House" and its price (green if your cash and bank
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
- **Evaluation:** what it's worth on the market.
- **Pets.**
- **Settings:** lock or unlock it, **Spawn in house**, change the name, set or remove an access password.

**Spawn in house** puts you inside it when you log in; after a death you still wake at a hospital. The exit marker
inside takes you out. Houses don't store items yet: your own car's boot is the place to keep things.

## Pets

| Pet | Price | What it does |
| --- | --- | --- |
| Big dog (Rottweiler, Shepherd, Husky, Retriever) | $12,500 | Barks, then goes for anybody you didn't let in, and it can kill |
| Small dog (Poodle, Pug, Westie) | $5,000 | Barks the house down and warns you |
| Cat, up to 2 | $4,000 each | Runs from intruders, and you hear about it wherever you are |

A house keeps one dog. 6% sales tax goes on top, and rehoming a pet gives nothing back.

## Property tax

Each house is billed at most once every 24 real hours, when the game week turns. The bill comes from your cash, then
your bank. If you're offline or short, what's left is added to your next bill with 5% on top.

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

Related: [Money](../money/) · [Vehicles](../vehicles/) · [Your first hour](../your-first-hour/) ·
[Banks and hacking](../banks-and-hacking/)
