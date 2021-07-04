// deploy/00_deploy_your_contract.js

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // XDAI STUFF
  const router = "0x1C232F01118CB8B424793ae03F870aa7D0ac7f77"
  const farm = "0xB44825cF0d8D4dD552f2434056c41582415AaAa1"
  const comb = "0x38Fb649Ad3d6BA1113Be5F57B927053E97fC5bF7"
  const pair = "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d"

  await deploy("YourContract", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [farm, router, comb, pair],
    log: true,
  });

  /*
    // Getting a previously deployed contract
    const YourContract = await ethers.getContract("YourContract", deployer);
    await YourContract.setPurpose("Hello");
    
    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */
};
module.exports.tags = ["YourContract"];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
