// In artifacts we require name of contract which we made;
var T1 = artifacts.require("Trying");
module.exports = function (deployer) {
  deployer.deploy(T1);
};
