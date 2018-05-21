# Contributing

We welcome all contributions to ColonyJS! Here are a few ways you can contribute:

Extending the functionality of ColonyJS:
* New Loaders
* New Adapters

Maintaining and Improving existing functionality:
* Keeping `ColonyClient` and `ColonyNetworkClient` in sync with their on-chain counterparts in [colonyNetwork](https://github.com/JoinColony/colonyNetwork)
* Squashing bugs

Improving Documentation:
* Adding or improving any pages in the [Docs](https://joincolony.github.io/colonyjs/)

When making a larger change, please consult with the team on the [Gitter channel](http://gitter.im/JoinColony/colonyJS).

## How to report issues

To report an issue, use the [GitHub issues tracker](https://github.com/JoinColony/colonyJS/issues).

## Workflow for Pull Requests

In order to contribute, please fork off of the `master` branch and make your changes there. Keep your branch up to date with master by using `rebase` instead of `merge`.

### Branch naming
Use the following naming schema for your PR branch: [feature/fix/maintenance/...]/[issue-#]-[a-meaningful-description-in-kebab-case] e.g. `feature/84-voting-on-disputes`

### Commit messages
- The 50/72 rule. The first line should be capitalized and can go up to 50 chars, following lines should preferably be wrapped at 72
- Bullet points are good, please use indentation though. For the bullet, you can choose between asterisks or hyphens
For the first line, try to be specific. e.g: "Ensure colony keys are unique" instead of "Fix a bug with contract setup"
If you're adding or changing existing tests, they should go on the same commit.

## Code of Conduct
Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.
