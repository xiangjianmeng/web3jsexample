pragma solidity =0.6.0;

contract TestEvent {
    event Test(address indexed newAdmin);

    constructor() public {
        emit Test(msg.sender);
    }

    function emitTest() public {
        emit Test(msg.sender);
    }
}