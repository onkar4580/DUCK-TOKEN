const hre = require("hardhat");

async function main() {
 
  // We get the contract to deploy
  const DuckToken = await hre.ethers.getContractFactory("DuckToken");
  const duckToken = await DuckToken.deploy('DuckToken', 'DCKT');
  await duckToken.deployed();

  console.log("Duck Token deployed to : ", duckToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
