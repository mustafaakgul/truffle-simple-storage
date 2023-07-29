pragma solidity >=0.4.22 <0.8.0;

contract SimpleStorage {
	uint storedData;

	function set(uint x) public {
		storedData = x;
	}

	//view only read for this value
	function get() public view returns (uint) {
		return storedData;
	}
}