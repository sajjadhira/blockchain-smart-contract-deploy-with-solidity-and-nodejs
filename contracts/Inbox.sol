/// @title A learning contact name is Inbox
/// @author Sajjad Hossain
/// @notice Learning Solidity and Practicing on it.
/// @dev I am the developer


pragma solidity ^0.8.17;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}