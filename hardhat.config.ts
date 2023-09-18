import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    astarMainnet: {
      url: `https://astar-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY as string],
    }
  },
  etherscan: {
    apiKey: {
      astarMainnet: process.env.ASTAR_API_KEY as string
    },
    customChains: [
      {
        network: "astarMainnet",
        chainId: 592,
        urls: {
          apiURL: "https://blockscout.com/astar/api",
          browserURL: "https://blockscout.com/astar"
        }
      }
    ]
  },
  
};

export default config;
