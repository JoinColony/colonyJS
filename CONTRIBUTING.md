# Contributing

We welcome all contributions to colonyJS! Here are a few ways you can contribute:

Improving the colonyJS documentation:

* Adding new pages to the [colonyJS Documentation](https://docs.colony.io/colonyjs/)
* Fixing and updating pages in the [colonyJS Documentation](https://docs.colony.io/colonyjs/)

Extending the functionality of colonyJS:

* New Loaders
* New Adapters

Maintaining the functionality of colonyJS:

* Keeping clients in sync with [colonyNetwork](https://github.com/JoinColony/colonyNetwork)
* Fixing bugs throughout the colonyJS packages

When making a larger change, please consult with the team on [Discord](https://discord.gg/feVZWwysqM).

## Code of Conduct

If you have not read our [Code of Conduct](https://github.com/JoinColony/colonyJS/blob/master/CODE_OF_CONDUCT.md), please do so before submitting an issue or pull request.

## Issues

To report an issue, use [GitHub Issues](https://github.com/JoinColony/colonyJS/issues).

## Pull Requests

When submitting a pull request, please fork off of the `develop` branch and create a feature branch that will include your changes. Please keep your branch up-to-date with the `develop` branch by using `rebase` instead of `merge`.

### Branches

Use the following naming schema for your feature branch:
* [feature/fix/maintenance/...]/[issue-#]-[a-short-description-in-kebab-case]
* For example: `feature/113-add-big-number-param-type`.

### Commits

* When adding or updating existing tests, the changes should go on the same commit as the code that requires the test to be added or updated.

### Commit Messages

* Please be specific in the first line. For example, "Add BigNumber param type" instead of "Update params".
* Please use the 50/72 rule for all commit messages. The first line should be capitalized and no longer than 50 chars and the following lines should be wrapped at 72 characters.
* Please use indentation for bullet points. You can choose between asterisks or hyphens.
