/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");

 const ALCHEMY_API_KEY = "fri-PEmgNQ--TWDj_VkYn80Dem00o4HH";
 const RINKEBY_PRIVATE_KEY = "b51f495bc0f768c5ec2fc03f44cdfbf21c4e6aa61aed9ec016f66e97ee50c142";
 module.exports = {
   solidity: "0.8.1",
 
   networks: {
     rinkeby: {
       url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
       accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
       gasPrice: 8000000000,
     },
   },
 };;