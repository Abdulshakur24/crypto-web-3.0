require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/8DAmY7W6FQAUJYTakr52guDGR7zP2Ytt",
      accounts: [
        "d7f5c0d0648e12f2cdc62f35e005adcda47c0f044194eb6a6f47f8f90c2fc985",
      ],
    },
  },
};
