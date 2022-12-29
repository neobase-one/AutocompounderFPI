import "dotenv/config";
import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {},
    canto: {
      chainId: 7700,
      url: "https://canto.slingshot.finance",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  paths: {
    sources: "src",
  },
};
export default config;
