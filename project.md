# Project
this is a compounder for `comb` tokens.

## Outline
due to the spec of `ERC721` and the need to initiate transactions, the code has been split up into onchain contract and a offchan controller

### Contract
- The compounder contract controls `COMB`, HoneyFarm deposits (`721`), and LP tokens.
- Its ownable
- It Exposes functions to 
    - compound()
        - withdraw()
        - swapHalfComb()
        - addLiquidity()
        - stake()
    - transferOwnership()
    - drain()

### Server
- maintains the token Id state
- calls the functions on the contract

### To Do
- [x] add contract interfaces
    - [x] IERC20
    - [x] IERC721
    - [x] IHoneyFarm
    - [x] IUniRouter

