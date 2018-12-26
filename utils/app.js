const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/83d5d2cdfe0f4e6f839df5e1660c28e5')

// Avg gas price
// web3.eth.getGasPrice().then((result) => {
//     console.log(web3.utils.fromWei(result, 'ether'))
// })


// Hashing functions
// console.log(web3.utils.sha3('123'))
// console.log(web3.utils.keccak256('123')) // alias of sha3

// Solidity compatible hashing functions
// console.log(web3.utils.soliditySha3('123'))

// Random hex string
// console.log(web3.utils.randomHex(0))
// console.log(web3.utils.randomHex(1))
// console.log(web3.utils.randomHex(32))

// _ library (re: UNDERSCORE.JS)
// console.log(web.utils._)
const _ = web3.utils._
_.each({ key1: 'value1', key2: 'value2'}, (value, key) => {
    console.log(key)
})

