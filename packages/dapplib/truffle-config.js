require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea nature tail sign strong response soccer punch install brave slot gate'; 
let testAccounts = [
"0x5489bed3a87c3af05a295a82a54e833f34701c879bd3b168af401ca271a72591",
"0x5983ea26b8ae963d7714820f68b2f479924789427037ce55c9ab47c7fd87c7d6",
"0x4b940ca388c411f3c95171d385cdde8227dc665ee212dc04077ae9c82f86e5d7",
"0x39d21cdf247d014c6d7e49b2201c6b76e90a6470f7d2d1dac672b1fb18419ead",
"0xab6520f8b486c68feb16c7b3339b0157d4adf38b9c8efddffc79f16a65e46dc8",
"0x778f314502c5e1b5106b2dbc09f75becf7b0ede7a6a1bddd6785d1aa929f4a03",
"0xfa4ac95e9c9b8d8748a5d742e97b41cfc71fcaec0cffe061cffa0ef99fbcbe1e",
"0xa5887c728067fa719ad130705c1858dd7b5f4a8c1c3dacbf4709c211d039af84",
"0x11737f690c9605e32dd62db2ef0d2904367d9c6ef0b9f65a32e72568333436ed",
"0xb7e2be55b6fe2280136237d5f60a2b3b5efd993752829312d26c7d44a0150819"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

