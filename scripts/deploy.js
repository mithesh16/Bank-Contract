
const {ethers}=require('hardhat');
const { ContractFunctionVisibility } = require('hardhat/internal/hardhat-network/stack-traces/model');

async function main(){

  const contractfactory=await hre.ethers.getContractFactory('sendmoney')
  const contract= await contractfactory.deploy();
 
    await contract.deployed();
    console.log("Contract deployed to:",contract.address);
   
  //   owner = await provider.getSigner(7)
  //   privatekey="0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356";
  //   wallet=new ethers.Wallet(privatekey,provider);

  //   add1=await provider.getSigner(8).getAddress();
  //   gasprice=(await provider.getGasPrice()).toString();
    


  // async function contractbalance(){
  //     bal=(await contract.getbalance()).toString()
  //     console.log(bal);
  //   }
    
  //   let amount=100
  //   //printing initial balance
  //   contractbalance();
  //   //sending money to contract
  //   await contract.connect(wallet).receivemoney({value:amount});
  //   //printing balance after sending money
  //   contractbalance()

  //   //sending money to addr
  //   await contract.connect(owner).sendmoneytoaddr(add1,amount)
  //   //printing acc balance
  //   accbal=(await contract.getaccbalance(add1)).toString();
  //   console.log("Balance:"+accbal);
   
   
  //   //printing contract balance after sendtoaddr function
  //   bal=(await contract.getbalance()).toString()
  //   console.log(bal);

  //   //sending money to contract
  //   await contract.connect(wallet).receivemoney({value:amount});
  //   //printing balance after sending money
  //   bal=(await contract.getbalance()).toString()
  //   console.log(bal);
    
  //   //sending money to own account
  //   await contract.connect(owner).sendmoneytome(amount);
   
  //   //printing contract balance after sendtoaddr function
  //   bal=(await contract.getbalance()).toString()
  //   console.log(bal);
  
}






const runMain = async () => {

    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();