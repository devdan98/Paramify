const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"; // Replace with new Paramify address
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
