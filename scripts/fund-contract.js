const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x9A676e781A523b5d0C0e43731313A708CB607508"; // Replace with new Insuracle address
  const amount = ethers.parseEther("2");

  console.log("Funding contract with:", deployer.address);
  const tx = await deployer.sendTransaction({
    to: contractAddress,
    value: amount,
  });
  await tx.wait();
  console.log("Funded contract with 2 ETH, tx:", tx.hash);

  const contract = await ethers.getContractAt("Insuracle", contractAddress);
  const balance = await contract.getContractBalance();
  console.log("New Contract Balance:", ethers.formatEther(balance), "ETH");
}

main().catch(console.error);
