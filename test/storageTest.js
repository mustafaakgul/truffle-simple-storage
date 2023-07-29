const truffleContract = require('truffle-contract');
const storageContract = require('../build/contracts/SimpleStorage.json');

const web3provider = "http://127.0.0.1:7545";

const storage = truffleContract(storageContract);
storage.setProvider(web3provider);

contract('SimpleStorage', (accounts) => {
    let storageInstance;
    const owner = accounts[0];  //ilk hesap sahip
    const user = accounts[1];  //bseyleri atmak icin

    before(async () => {
        storageInstance = await storage.deployed();
    });
    it('should set and get a value', async () =>{
        const settingValue = 32;
        await storageInstance.set(32, {from: owner});

        const storedValue = await storageInstance.get();
        assert.equal(settingValue, storedValue, "Set ile get esit degil");
    });
});