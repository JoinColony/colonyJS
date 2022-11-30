# How to create transactions with Colony SDK

Within Colony, there are a few ways to do an action. As a colony is a permissioned contract, not everyone can just do anything they like, users (or contracts) have to have the right permission in the relevant team to do so.
If a governance extension is installed for the colony, this behaviour changes. Using [Motions & Disputes](../api/classes/VotingReputation.md) for example, it is possible to propose an action without having the appropriate permissions.
As permissioned functions and governance functions take the same arguments, we have unified this in one API, that could be extended in the future.

## Creating transactions and motions

So what does this mean? Let's look at an example. We would like to create a team using Colony SDK. If we have the right permissions, we can just do:

```typescript
// Immediately executing async function
(async function() {
  // Create a new team (domain) within our colony (using sheer force ;) )
  const [{ domainId }] = await colony.createTeam().force();
})();
```

**Note the `force()`** at the end.** That's where we tell Colony SDK to create a transaction that will take its action immediately, given we have the right permissions.

If we wanted to create a motion instead (see [[VotingReputation]]) to create a new team, we'd replace `force()` with `motion(motionTeam)`:

```typescript
import { Id } from '@colony/sdk';
// Immediately executing async function
(async function() {
  // Create a motion in the Root team to create a new team. Will have to go through the whole motion workflow
  const [{ motionId }] = await colony.createTeam().motion(Id.RootDomain);
})();
```

Note that you have to supply a `motionTeam` when creating a motion. This is the id of the team in which the motion will be created. This will have an effect on who will be able to object or vote and with how much reputation.

**If the `motionTeam` is not specified it will default to the Root domain**


## Creating gasless transactions and motions (MetaTransactions)

Colony SDK supports another way of sending off transactions or motions which we call *MetaTransactions*. These are gasless transactions (which makes them entirely free for the user) and are signed by the user who wants to issue them and send off by a Colony server. To send a MetaTransaction, just use `forceMeta()` instead of `force()` and `motionMeta()` instead of `motion()`. The wallet then needs to sign a message instead of a transaction, which will be transferred to the Colony MetaTransaction broadcaster. The broadcaster will send back a transaction id from which the receipt and event data will be retrieved as usual.

Here's an example on how to file a motion through a metatransaction:

```typescript
import { Id } from '@colony/sdk';
// Immediately executing async function
(async function() {
  // Create a motion in the Root team to create a new team using a metatransaction
  const [{ motionId }] = await colony.createTeam().motionMeta();
})();
```

## tl;dir

Okay, what did we learn? Here's a little overview:

### Force a transaction

- [[TxCreator.force]]: force a Colony transaction, knowing you have the permissions to do so
- [[TxCreator.forceMeta]]: same as `force()`, but send as a gasless metatransaction

### Create a motion to trigger an action once it passes

- [[TxCreator.motion]]: create a motion (needs the motion's domain as a parameter)
- [[TxCreator.forceMeta]]: same as `motion()`, but sends a gasless metatransaction

Also refer to the [[TxCreator]] documentation if you'd like to learn more.
