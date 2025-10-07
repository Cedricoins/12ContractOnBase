// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BienContract {
    event MessageEnvoye(address indexed expediteur, string message);

    function dire() public returns (string memory) {
        emit MessageEnvoye(msg.sender, "bien");
        return "bien";
    }
}
