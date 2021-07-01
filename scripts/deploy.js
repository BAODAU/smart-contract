const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
require('@openzeppelin/test-helpers/configure')({ provider: web3.currentProvider });

const { singletons } = require('@openzeppelin/test-helpers');

async function main() {
  // Retrieve accounts from the local node
  const accounts = await web3.eth.getAccounts();

  await singletons.ERC1820Registry(accounts[0]);
}

main();