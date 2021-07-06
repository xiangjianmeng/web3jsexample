pragma solidity =0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("GameItem", "ITM") public { }

    function mint(address account, uint256 amount) public {
        super._mint(account, amount);
    }
}