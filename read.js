const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/d2bb30c675c847c994ece76f3502b255`);

const query = async () => {
  const block = await provider.getBlockNumber();
console.log("Current block number: " + block);

const  balance = await provider.getBalance("0x742d35Cc6634C0532925a3b844Bc454e4438f44e");
console.log("Balance: " + ethers.formatEther(balance) + " ETH");


}

query();