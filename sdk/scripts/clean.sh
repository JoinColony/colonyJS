# Remove build
rm -rf build

# Remove node_modules
rm -rf node_modules

# Move to packages
cd packages

# Loop through packages
for d in */ ; do

  # Remove node_modules
  rm -rf $d/node_modules

  # Remove jest coverage
  rm -rf $d/coverage

  # Remove jest snapshots
  rm -rf $d/src/__snapshots__

  # Remove cypress videos
  rm -rf $d/tests/e2e/videos

  # Remove temporary files
  rm -rf $d/tmp

done

# Remove lib from colony-cli
rm -rf colony-cli/lib

# Remove ganache-accounts from colony-cli
rm -f colony-cli/ganache-accounts.json
