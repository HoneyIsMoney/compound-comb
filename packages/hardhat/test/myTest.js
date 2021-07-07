const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);


// XDAI STUFF
const router = "0x1C232F01118CB8B424793ae03F870aa7D0ac7f77"
const farm = "0xB44825cF0d8D4dD552f2434056c41582415AaAa1"
const comb = "0x38Fb649Ad3d6BA1113Be5F57B927053E97fC5bF7"
const pair = "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d"

describe("Test Suite", function () {
  let myContract;

  describe("Your Contract", function ()  {
    it("should deploy the contract", async function () {
      const [owner] = await ethers.getSigners();
      const yourContractFactory = await ethers.getContractFactory("YourContract");
      const yourContract = await yourContractFactory.deploy(
        farm,
        router,
        comb,
        pair
      );
      await yourContract.deployed()

      expect(await yourContract.HoneyFarm()).to.equal(farm);
    })
  })
});
