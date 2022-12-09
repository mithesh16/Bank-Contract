// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "hardhat/console.sol";
contract sendmoney {

     uint public balancerecieved;
     address public owner;
     constructor (){
          owner=msg.sender;    
     }
     function getowner()public view returns (address){
      return owner;
     }
     function receivemoney()public payable{
      balancerecieved+=msg.value;
     }

    //   receive() external payable{
    //       balancerecieved += msg.value;
    // }

      function getbalance () public view returns(uint){
            return address(this).balance;
    } 

      function getaccbalance(address accaddress) public view returns (uint){
          return accaddress.balance;
    }


      function sendmoneytoaddr(address payable _sendmoneyto,uint amount) public payable{
          _sendmoneyto.transfer(amount);
      }

    
    function sendmoneytome(uint amount) public{ 
         address payable to = payable(msg.sender);
            to.transfer(amount);
        }
    }