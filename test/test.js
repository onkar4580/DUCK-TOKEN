const { expect } = require("chai");
const { base58 } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

describe("My Duck Token", function () {

  let duckToken;
  let admin;
  let addr1;
  let addr2;

  beforeEach(async function() {
  // We get the contract to deploy
  const DuckToken = await hre.ethers.getContractFactory("DuckToken");
  duckToken = await DuckToken.deploy('DuckToken', 'DCKT');
  await duckToken.deployed();

  //console.log("Duck Token deployed to : ", duckToken.address);

  [admin, addr1, addr2] = await ethers.getSigners();

  });
  
  it("Should should successfully deploy", async function () {
    console.log("success!");
  });

  it("Should deploy with 1000 of supply for the admin of the contract", async function() {
    const balance = await duckToken.balanceOf(admin.address);
    expect( balance == 1000);
  });
  
  
  it("Should let you send tokens to another address", async function() {
    await duckToken.transfer(addr1.address, 100);
    //console.log("balance of addr1",await duckToken.balanceOf(addr1.address));
    expect(await duckToken.balanceOf(addr1.address)).to.equal(100);
  });
  
  it("Should let you give another address the approval to send on your behalf", async function() {
    await duckToken.connect(addr1).approve(admin.address, 10);
    await duckToken.transfer(addr1.address, 10);
    await duckToken.transferFrom(addr1.address, addr2.address, 10);
    expect(await duckToken.balanceOf(addr2.address)).to.equal(10);
  })

});
