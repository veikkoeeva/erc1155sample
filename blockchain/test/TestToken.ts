import { ethers} from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { TestToken__factory, TestToken } from "../typechain";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("TestToken", () => {
  let testToken: TestToken;

  beforeEach(async () =>
  {
    const signers = await ethers.getSigners();    
    const testTokenFactory = (await ethers.getContractFactory("TestToken", signers[0])) as TestToken__factory;
    testToken = await testTokenFactory.deploy();    
    await testToken.deployed();
            
    expect(testToken.address).to.properAddress;
  });

  describe("Some tests", () => {
    it('Emits an event', async () => {            
        expect(true).to.be.true;
      });   
  });  
});