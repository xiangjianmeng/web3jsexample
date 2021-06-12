const TestEvent = artifacts.require("TestEvent");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(TestEvent);
};
