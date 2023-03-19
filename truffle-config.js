const HDWalletProvider = require("truffle-hdwallet-provider");

const path = require("path");

const mnemonic ="furnace desert admit response dial fancy kind curious family depend tragic team";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {

    develop: {
      port: 8545
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/005c2671e45c4eebbb6a725324d9ecc7"),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },compilers:{
    solc:{
      version:"0.8.1"
    }
  },
 

};
