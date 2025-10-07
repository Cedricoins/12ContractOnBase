// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Salut {
    event MessageEnvoye(address indexed expediteur, string message);

    function dire() public returns (string memory) {
        emit MessageEnvoye(msg.sender, "salut");
        return "salut";
    }
}
