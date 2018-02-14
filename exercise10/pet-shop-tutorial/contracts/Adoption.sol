pragma solidity ^0.4.17;
contract Adoption {
    address[16] public adopters;
    uint[16] public adoptionPrices;

    function adopt(uint petId) public payable returns(uint) {
        require(petId>=0 && petId<=15);
        require(msg.value>adoptionPrices[petId]);
        adopters[petId] = msg.sender;
        adoptionPrices[petId] = msg.value;
        return petId;
    }

    function getAdopters() public view returns(address[16]) {
        return adopters;
    }
    function getAdoptionPrices() public view returns(uint[16]) {
        return adoptionPrices;
    }

  function getBalance() public view returns(uint) {
    return this.balance;
  }
}