// In artifacts we require name of contract which we made;
var T2 = artifacts.require("Trying2");
module.exports = function (deployer) {
  deployer.deploy(T2);
};
