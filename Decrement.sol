// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/// Contrat 2 : un decrementeur
contract Decrementeur {
    int256 public valeur;

    constructor(int256 _initial) {
        valeur = _initial;
    }

    function decrementer() public {
        valeur -= 1;
    }

    function decrementerDe(int256 _n) public {
        valeur -= _n;
    }
}
