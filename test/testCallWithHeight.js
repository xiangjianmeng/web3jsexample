const fs = require('fs');
const Web3 = require('Web3');
// const ERC20 = artifacts.require("MyToken");


// test1 on condition that you have deployed contract and know the address
//
const MyTokenJson = JSON.parse(fs.readFileSync('../build/contracts/MyToken.json', 'utf8'));
console.log(JSON.stringify(MyTokenJson.abi));
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
var MyContract = new web3.eth.Contract(MyTokenJson.abi, "0x1d29789a81aa381fE5830cd378Bb8F5c76E8C8a7");
// MyContract.getPastEvents('Test', {fromBlock: 2012177, toBlock: 'latest'}, function(error, events){ console.log(events); });
MyContract.methods.balanceOf("0x2CF4ea7dF75b513509d95946B43062E26bD88035").call({}, 100)
    .then(console.log);




// contract("ksnMaker", function (accounts) {
//     describe("get balance by height", function () {
//         it("get balance", async function () {
//             ERC20Inst = await ERC20.at("0x0d021d10ab9E155Fc1e8705d12b73f9bd3de0a36");
//             console.log("balance ==================== ", web3.utils.fromWei(await ERC20Inst.methods.balanceOf("0x2CF4ea7dF75b513509d95946B43062E26bD88035").call({}, 98)))
//         });
//     });
// });