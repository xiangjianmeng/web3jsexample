# web3jsexample

## 1. clone the code 

```
git clone https://github.com/xiangjianmeng/web3jsexample.git
cd web3jsexample
npm install
```

## 2. compile the contracts and generate TestEvent.json in build/contracts

```
truffle compile
```

## 3. deploy contract TestEvent.sol in contracts through remix. replace `0xC3393C3bFC0481B004FC82448fE6Cdd4E23ac395` with the contract address of that you have deployed.

```
var MyContract = new web3.eth.Contract(testEventJson.abi, "0xC3393C3bFC0481B004FC82448fE6Cdd4E23ac395");
```
