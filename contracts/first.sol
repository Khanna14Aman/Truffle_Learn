// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract Trying{
    uint public age;
    function setter(uint _a)public{
        age = _a;
    }
    function getter()public view returns(uint){
        return age;
    }
}