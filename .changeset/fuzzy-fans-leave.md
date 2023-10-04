---
"@colony/contractor": major
"@colony/colony-js": major
"@colony/core": major
"@colony/sdk": major
"@colony/events": minor
"@colony/tokens": minor
---

This changes the way `colony-js` clients are typed. We retain only the types of the last 5 versions of the types, all older versions will go untyped. This will give us some breathing room, at least for the amount of extensions that we have now.

Furthermore the most recent (upcoming) contract changes were included in ColonyJS.

Some changes were made to fix builds.
