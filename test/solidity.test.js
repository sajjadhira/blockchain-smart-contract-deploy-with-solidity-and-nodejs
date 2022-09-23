const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { abi, evm } = require("../compile");

let accounts;
let inbox;
// let message;
let welcome = "Hello Web3!";
let infura = "https://rinkeby.infura.io/v3/6188e41b231048e4a6e0a5810dffb5ce";

const result = async () => {
  accounts = await web3.eth.getAccounts();

  // use one of the account
  // use contract

  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [welcome] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log(inbox.options.address);
};

result();

/*
beforeEach(async () => {
  // get a list of all accounts
  // web3.eth.getAccounts().then((feeacthdAccounts) => {
  //   console.log(feeacthdAccounts);
  // });

  accounts = await web3.eth.getAccounts();

  // use one of the account
  // use contract

  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [welcome] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploy a contract", () => {
    // deploy here
    console.log(inbox);
    // assert.ok(inbox.options.address);
  });

  // it("has default message", async () => {
  //   const message = await inbox.methods.message().call();
  //   assert.equal(welcome, message);
  //   // console.log(await inbox.methods.message().call());
  // });

  // it("update message", async () => {
  //   await inbox.methods.setMessage("Work Please").send({
  //     from: accounts[0],
  //     gas: "1000000",
  //   });
  //   const message = await inbox.methods.message().call();
  //   assert.equal(message, "Work Please");
  // });

  // it("has default message", async () => {
  //   const message = await inbox.methods.getMessage().call();
  //   console.log(message, "Work Please");
  //   // console.log(await inbox.methods.message().call());
  // });

  // console.log(mes);
  // 0x45781C18b5775ccE59A33d7E00B786f081BA6256
});
*/
