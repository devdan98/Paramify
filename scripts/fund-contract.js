const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // Replace with new Paramify address
  const amount = ethers.parseEther("2");

  console.log("Funding contract with:", deployer.address);
  const tx = await deployer.sendTransaction({
    to: contractAddress,
    value: amount,
  });
  await tx.wait();
  console.log("Funded contract with 2 ETH, tx:", tx.hash);

  const contract = await ethers.getContractAt("Paramify", contractAddress);
  const balance = await contract.getContractBalance();
  console.log("New Contract Balance:", ethers.formatEther(balance), "ETH");
}

main().catch(console.error);
