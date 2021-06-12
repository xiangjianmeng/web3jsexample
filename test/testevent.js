const fs = require('fs');
const Web3 = require('Web3');


// test1 on condition that you have deployed contract and know the address

const testEventJson = JSON.parse(fs.readFileSync('../build/contracts/TestEvent.json', 'utf8'));
console.log(JSON.stringify(testEventJson.abi));
let web3 = new Web3(new Web3.providers.WebsocketProvider("wss://exchaintestws.okex.org:8443"));
var MyContract = new web3.eth.Contract(testEventJson.abi, "0xC3393C3bFC0481B004FC82448fE6Cdd4E23ac395");
MyContract.getPastEvents('Test', {fromBlock: 2012177, toBlock: 'latest'}, function(error, events){ console.log(events); });


// test2 deploy and get events
// must run `truffle test test/testevent.js` for test2

// const testEvent = artifacts.require('TestEvent');
// contract('testEvent', accounts => {
//
//     before(async function () {
//         // init
//         this.testEvent = await testEvent.deployed();
//     });
//
//     it('test getLogs', async function () {
//
//         // console.log(this.contract.account);
//         await this.testEvent.emitTest({from:accounts[0]})
//         await this.testEvent.getPastEvents('Test', {fromBlock: 1, toBlock: 'latest'}, function(error, events){ console.log(events); }).then(function(events){console.log(events)});
//     })
//
// })


