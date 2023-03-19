// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract voting{
address public owner;
uint256 public countcandidat = 0;
uint256 public countpeople = 0;
uint256 public AllVoting = 2200000 ;

constructor() {
    owner = msg.sender;
}

mapping(uint256 => candidat) public candidateDetails;

struct candidat{
    string nume;
    string prenume;
    string nationalitate;
    uint256 votingcount;
    uint256 candidatId;
}

modifier veryaddcandidat() {
    require(owner == msg.sender, "Doar administratia poate adaga candidati");
    _;
}

uint256 openingTime = 1644932721;

modifier onlyWhileOpen(){ 
        require(block.timestamp >= openingTime);
        _;
    } 

event viewCandidat(uint256 _indexId, string  _nume, string _prenume, string _nationalitate);

//add candidat 
function addCandidate(string memory _nume, string memory _prenume, string memory _nationalitate) public veryaddcandidat  {
    countcandidat++;
    candidateDetails[countcandidat] = candidat(_nume, _prenume, _nationalitate,0,countcandidat);
    emit viewCandidat(countcandidat, _nume, _prenume, _nationalitate);
    
}

function AllCandidat () public view returns (uint256){
    return countcandidat;
}

mapping(address => bool) public voters;


function AllPeople() public view returns (uint256){
    return countpeople;
}

event votedEvent (uint256 indexed _candidateId);

function vote (uint _candidateId) public {

    require(!voters[msg.sender], "Deja persoana a votat ");

    require(_candidateId >= 1 && _candidateId <= countcandidat, "Nu exista asa candidat");

    voters[msg.sender] = true;

    candidateDetails[_candidateId].votingcount ++;
    countpeople++;
    emit votedEvent(_candidateId);
}

function PeopleVoting() public returns(uint256) {
    AllVoting-=countpeople;
    return AllVoting;
}

}