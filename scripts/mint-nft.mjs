const CONTRACT_ADDRESS = "0xe8519A2C9f5bD5492eECa023e10BbB6c72CC4947";
const META_DATA_URL = "ipfs://bafyreiawp4nsohg6ugywecupj5ozblvacgyjh3fx4gshoy62zqxw32ndom/metadata.json";

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
 const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
 const [owner] = await ethers.getSigners();
 await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
 console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
