//https://eth-ropsten.alchemyapi.io/v2/kBRHYaaxEXTKfjIGqgkSG12Oc8rMet3f

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/kBRHYaaxEXTKfjIGqgkSG12Oc8rMet3f",
      accounts: ['8eadbebc8ff566b36bfb34c85da9bacdc7ccd1e5eace43dd82dad3fa627aaa5c']
    }
  }
}