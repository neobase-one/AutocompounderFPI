import "dotenv/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy("StrategyNeo", {
    from: deployer,
    args: [
      "0x826551890Dc65655a0Aceca109aB11AbDbD7a07B",
      "0xc0d6574b2fe71eed8cd305df0da2323237322557",
      "0x30838619C55B787BafC3A4cD9aEa851C1cfB7b19",
      "0xb0750a6f12343Ce7199A567D43D6ecDB3F93524e",
      "0xa252eee9bde830ca4793f054b506587027825a8e",
      process.env.ADDRESS_STRATEGIST,
      "0x826551890Dc65655a0Aceca109aB11AbDbD7a07B",
      "0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265",
      process.env.ADDRESS_STRATEGIST,
    ],
    log: true,
  });
};
export default func;
func.tags = ["StrategyNeo"];
