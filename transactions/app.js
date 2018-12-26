var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
// Ropsten is a test network on ethereum
const web3 = new Web3('https://ropsten.infura.io/v3/83d5d2cdfe0f4e6f839df5e1660c28e5')

const account1 = '0x427220cF49aeF23537eCc000663eF2B1d5377E95'
const account2 = '0x990BE86E52087a9Fa89889be047923a9627904b7'

console.log(process.env.PRIVATE_KEY_1)
console.log(process.env.PRIVATE_KEY_2)

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')
console.log('privateKey1:', privateKey1)
console.log('privateKey2:', privateKey2)

web3.eth.getBalance(account1, (err, bal) => {
   console.log('account 1 balance:', web3.utils.fromWei(bal, 'ether'))
})
web3.eth.getBalance(account2, (err, bal) => {
   console.log('account 2 balance:', web3.utils.fromWei(bal, 'ether'))
})

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//     // Build the transaction
//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         to: account1,
//         value: web3.utils.toHex(web3.utils.toWei('1000', 'gwei')),
//         gasLimit: web3.utils.toHex(21000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
//     }
//     // { noether:                                 '0',
//     //   wei:                                     '1',
//     //   kwei:                                 '1000',
//     //   Kwei:                                 '1000',
//     //   babbage:                              '1000',
//     //   femtoether:                           '1000',
//     //   mwei:                              '1000000',
//     //   Mwei:                              '1000000',
//     //   lovelace:                          '1000000',
//     //   picoether:                         '1000000',
//     //   gwei:                           '1000000000',
//     //   Gwei:                           '1000000000',
//     //   shannon:                        '1000000000',
//     //   nanoether:                      '1000000000',
//     //   nano:                           '1000000000',
//     //   szabo:                       '1000000000000',
//     //   microether:                  '1000000000000',
//     //   micro:                       '1000000000000',
//     //   finney:                   '1000000000000000',
//     //   milliether:               '1000000000000000',
//     //   milli:                    '1000000000000000',
//     //   ether:                 '1000000000000000000',
//     //   kether:             '1000000000000000000000',
//     //   grand:              '1000000000000000000000',
//     //   mether:          '1000000000000000000000000',
//     //   gether:       '1000000000000000000000000000',
//     //   tether:    '1000000000000000000000000000000' },

//     // Sign the transaction
//     const tx = new Tx(txObject)
//     tx.sign(privateKey2)

//     const serializedTransaction = tx.serialize()
//     const raw = '0x' + serializedTransaction.toString('hex')

//     // Broadcast the transaction
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//         console.log('txHash:', txHash)
//     })


// })
