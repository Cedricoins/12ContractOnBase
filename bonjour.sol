// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/// Contrat 3 : dire "bonjour"
contract Bonjour {
    function dire() public pure returns (string memory) {
        return "bonjour";
    }
}