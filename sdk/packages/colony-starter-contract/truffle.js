// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!

module.exports = {
  plugins: ["truffle-security"],
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gasPrice: 0,
      network_id: "*",
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.5.8",
    }
  }
};
