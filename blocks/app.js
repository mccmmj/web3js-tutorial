const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/83d5d2cdfe0f4e6f839df5e1660c28e5')

// web3.eth.getBlockNumber().then(console.log)
// web3.eth.getBlock('latest').then((block) => {
//     console.log({
//         blockHash: block.hash,
//         blockNumber: block.number,
//     }) 
// })
// web3.eth.getBlockNumber().then((latest) => {
//     for (let i =0; i < 10; i++ ) {
//         web3.eth.getBlock(latest -i).then((block) => {
//             console.log(block.hash)
//         })
//     }
// })

web3.eth.getBlock('latest').then(console.log)
