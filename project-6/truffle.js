const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "3a4acd0dbe83454a9dc0f9b6ce338001";
const mnemonic = "coast test brush gallery broccoli frame letter entire topic digital fit chapter";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },

    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};