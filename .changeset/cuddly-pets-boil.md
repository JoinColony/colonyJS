---
"@colony/sdk": major
---

Calling `getBalance` on a Colony without specifying a `teamId` will now return the total balance of the specified token across the whole Colony (including not-yet-claimed funds)
