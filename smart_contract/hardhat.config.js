require("@nomiclabs/hardhat-waffle");

const SPEEDY_NODE =
  "https://speedy-nodes-nyc.moralis.io/dc928f82268836bfb2562409/eth/rinkeby";

const ACCOUNT_PRIVATE_KEY =
  "36dfbe821a2801d1a056ee6c5334ee29186224be22ddb3b9fda9644880012d5d";
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: SPEEDY_NODE,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
};
