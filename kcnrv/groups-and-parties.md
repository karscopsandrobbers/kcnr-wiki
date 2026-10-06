---
title: Groups and parties
summary: A party is who you're doing something with right now. A group is who you belong to, and what you own together.
section: life
order: 6
opens: A party from the start; making a group at total level 5
---

## Parties

**Inviting:** `/party` lists people within 25 m to invite; or look at a player, press <kbd>X</kbd> and **Invite To
Party** (within 5 m); or `/party invite [name or ID]` reaches anyone online. They answer with <kbd>Y</kbd> on the card
within 30 seconds.

A party invite and a job offer are the **same card**, so you only ever have one card at a time. A second one is refused
("try again"), and a card lapses after 30 seconds.

**Size and leading:** up to 4 people. Whoever invited first leads, and only the leader invites or kicks. If the leader
leaves, the next person takes over; when one of the last two leaves, the party ends. `/party leave` to go, `/party kick
[player]` if you lead. If someone disconnects they're out of the party, and the others are told "(name) left the
party".

You can't invite someone who's already in a party, someone who isn't in the city yet, or anyone once the party is full.

**What a party is for:**

- When the leader takes a crew job, everyone in the party is offered a place (<kbd>Y</kbd> joins).
- A business's jobs can only be crewed by the holder's party. See [Businesses](../businesses/).
- A crew's pot is the solo fee plus half again for each extra person, split evenly: 1 gets 100%, 2 get 75% each, 3
  about 67%, 4 get 62.5%. **Pay is all or nothing.** The leader is always paid. A crewmate is paid their full share if
  they were in for 60 seconds, or for half of the job when it ran under two minutes. Anyone who joined later gets
  nothing, and is told "You joined too late to be cut in".
- `/jm` joins a crew job within 40 m without a party.
- The [pimp](../the-pimp/) jobs are for civilians only and take 2 people. They close to new people once the fight starts,
  and again once the work is done and only the call is left.
- If a crewmate leaves (`/mission leave`), dies or drops out, the rest carry on with the count one lower, and the lead
  passes on. The job only ends when nobody is left or the one who left was the job itself.
- Everyone in a crew works the same clock, and a joiner's clock starts at the seconds left.
- On a crew job the CREW bar is the bottom timer bar, and every enemy the crew fights has a red dot on the map.

A party has no chat of its own (see [Chat and Discord](../chat-and-discord/) for how to talk) or shared map markers, doesn't stop you hurting each other, and isn't invited to races: only jobs
and business jobs use it.

## Groups

**Making one:** `/creategroup [name]` (up to 32 characters), from total level 5, while you're in no group. Pick a type
and Create. It's free, and one account can own one group.

`/group` opens the menu: Invite Player, Group Bank, Manage Group (owner only), List Group Members.

- **Inviting:** any member can invite somebody within 10 m who's in no group. They answer `/group accept` or `/group
  deny` within 2 minutes.
- **Ranks:** the owner is rank 10, a new member rank 0, and the owner names up to nine ranks between. Each rank gets
  its own permissions (lease business slots, withdraw from the bank, manage business slots, kick, change ranks), and
  you only act on people ranked below you.
- **Kicking:** it needs the kick permission and only reaches people ranked below you. A kicked member who's online is
  removed at once and told who kicked them.
- **The group bank:** any member deposits cash, a permitted rank withdraws it. It holds up to $50,000,000 and keeps a
  20-line statement. The group's business slots (up to three) pay into it. It also pays the lease for a group slot, and
  refunds a sold-back lease; if it doesn't hold the money, the lease fails.
- **Leaving:** `/leavegroup`. When the owner leaves, the group is disbanded, which is refused while the bank holds
  money or the group holds a business slot.

## Tips

- Get your friends into the party before the leader takes the job.
- Only give trusted ranks the right to withdraw.

Related: [Businesses](../businesses/) · [The pimp](../the-pimp/) · [Money](../money/) ·
[Keys and menus](../keys-and-menus/)
