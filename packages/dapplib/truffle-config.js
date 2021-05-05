require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain method hockey kitten bubble slide'; 
let testAccounts = [
"0x635579b72be071cb4e6380bff2d30cab1ea8563a492226734a2bf4bc187316f5",
"0x5ebd0af74fc48bd5c6d8d468075fe02f5b164985367528e62680dc74d5f7e1e9",
"0x6bb9aeeb699dd90b71741416f9ec0d01e0862ea89e1654308741dac87f42b90f",
"0xb8c8baa008996e48f638e1c891e2237a0133f7d6722bce8287a5038c24ad3be6",
"0x637fe3a96b2018bc210e8f1faaf47d05d9a52706950f63ebbbc5ec28f7dcfa7f",
"0xa0f0295815bee05a3eae46a1601b68a9815362ebb35583e0231223629384674d",
"0xc125914021de50bb263a55a4e493350b77d9104b975de3d2d6894bbef96f085f",
"0xfc517bea3e8f2aa0b50bdcb6149cc76102bcae4a466fbac4400e52e5a5c67960",
"0xf493db53facb1188d4958f204d6dbea135ad65797272fd255d36288b547dd015",
"0x9614aa32d9592da552383138f9c136900c6a563cce6aac485cc5d115c4d41f66"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
