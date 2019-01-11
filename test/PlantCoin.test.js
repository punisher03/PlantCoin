const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const plantpath = require('../compile');

let lottery;
let accounts;
const GAS_LIMIT=1000000;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  PlantCoin = await new web3.eth.Contract(JSON.parse(plantpath.abi))
    .deploy({ data: plantpath.bytecode })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('PlantCoin contract', () => {
  it('deploys a contract', () => {
    assert.ok(PlantCoin.options.address);
  });

  it('allows transfer of tokens', async () => {
    let recipient = web3.eth.accounts[1];
    let tokenWei = 1000;

    await PlantCoin.methods.transfer(recipient, tokenWei).send({
        from: accounts[0],
        gas: GAS_LIMIT
      });
    let recipientBalance = await PlantCoin.methods.balanceOf.call(recipient);
    assert.strictEqual(recipientBalance.toNumber(), tokenWei);
  });
});
