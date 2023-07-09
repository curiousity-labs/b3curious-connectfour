import { FractalRegistry, GnosisSafe } from '@fractal-framework/fractal-contracts';
import { ConnectFourS, ConnectFourSFactory } from 'b3-curious-contracts/typechain';

export type ContractAddresses = {
  connectFourAddress: string,
  connectFourFactoryAddress: string,
  fractalRegistryAddress: string;
  gnosisSafeAddress: string,
}

export type NetworkConfig = {
  safeBaseURL: string;
  chainId: number;
  contractAddresses: ContractAddresses
  baseContracts?: BaseContracts
}

export type BaseContracts = {
  connectFourBase: ConnectFourS,
  connectFourFactoryBase: ConnectFourSFactory,
  fractalRegistryBase: FractalRegistry;
  gnosisSafeBase: GnosisSafe;
}