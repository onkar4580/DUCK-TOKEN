// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract DuckToken is ERC20 {
    
    address public admin;
    constructor(string memory name, string memory symbol) ERC20 ('DuckToken', 'DCKT') {
        _mint(msg.sender, 1000);
        admin = msg.sender;
        console.log("The token name : ",name);
        console.log("Symbol : ",symbol);

    }
}
