pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./interfaces/IHoneyFarm.sol";
import "./interfaces/IUniswapV2Router02.sol";
import "./interfaces/IERC20.sol";

//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  IHoneyFarm public HoneyFarm;
  IUniswapV2Router02 public UniRouter;
  IERC20 public CombToken;
  IERC20 public PairToken;

  event SetPurpose(address sender, string purpose);

  constructor(
    address _farm,
    address _router, 
    address _comb, 
    address _pair
  ) {
    HoneyFarm = IHoneyFarm(_farm);
    UniRouter = IUniswapV2Router02(_router);
    CombToken = IERC20(_comb);
    PairToken = IERC20(_pair);
  }
}
