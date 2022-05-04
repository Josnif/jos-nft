const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env'});


const main = async () => {
    const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants');

    const NFTCollectionsContract = await ethers.getContractFactory('NFTCollections');
    const NFTCollectionsDeployed = await NFTCollectionsContract.deploy(
        METADATA_URL,
        WHITELIST_CONTRACT_ADDRESS
    );

    // print the address of the deployed contract
    console.log(
        "Josnif NFT Collection Contract Address:",
        NFTCollectionsDeployed.address
    );

}

main()
    .then(()=> process.exit(0))
    .catch((error)=> {
        console.error(error);
        process.exit(1);
    })