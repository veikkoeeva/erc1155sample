import { ethers } from "hardhat";

async function main() {
  const counterFactory = await ethers.getContractFactory("Counter");
  const testTokenFactory = await ethers.getContractFactory("TestToken");

  // If we had constructor arguments, they would be passed into deploy()
  let counterContract = await counterFactory.deploy();
  let testTokenContract = await testTokenFactory.deploy();

  // The address the Contract WILL have once mined
  console.log(counterContract.address);
  console.log(testTokenContract.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log(counterContract.deployTransaction.hash);
  console.log(testTokenContract.deployTransaction.hash);

  // The contract is NOT deployed yet; we must wait until it is mined
  await counterContract.deployed();
  await testTokenContract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
