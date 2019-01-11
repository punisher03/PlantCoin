const path=require('path');
const fs=require('fs');
const solc=require('solc');

const Path = path.resolve(__dirname,'contracts','PlantCoin.sol');
const source= fs.readFileSync(Path,'utf8');
// import and extract the contract to compile it

const output = solc.compile(source, 1);

module.exports=output.contracts[':MyToken'];
// and javascript ABI
