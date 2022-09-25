// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract Lottery{
    address public manager;
    address[] public players;

    constructor(){
        manager = msg.sender;
    }

    function enter() public payable{

        require(msg.value > .001 ether);
        players.push(msg.sender);
    }

    function random() public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,players)));
    }

    function pickWinner() public{
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
    }
    
}