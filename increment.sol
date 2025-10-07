// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// Contrat 1 : un incrementeur
contract Incrementeur {
    int256 public valeur;

    constructor(int256 _initial) {
        valeur = _initial;
    }

    function incrementer() public {
        valeur += 1;
    }

    function incrementerDe(int256 _n) public {
        valeur += _n;
    }
}
