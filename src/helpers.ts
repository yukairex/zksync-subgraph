import { log, BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts';
import { ERC20 } from '../generated/Governance/ERC20';
import { ERC20SymbolBytes } from '../generated/Governance/ERC20SymbolBytes';
import { ERC20NameBytes } from '../generated/Governance/ERC20NameBytes';

export function fetchTokenSymbol(tokenAddress: Address): string {
  // hard coded overrides
  if (
    tokenAddress.toHexString() == '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'
  ) {
    return 'DGD';
  }
  if (
    tokenAddress.toHexString() == '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
  ) {
    return 'AAVE';
  }

  let contract = ERC20.bind(tokenAddress);
  let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress);

  // try types string and bytes32 for symbol
  let symbolValue = 'unknown';
  let symbolResult = contract.try_symbol();
  if (symbolResult.reverted) {
    let symbolResultBytes = contractSymbolBytes.try_symbol();
    if (!symbolResultBytes.reverted) {
      // for broken pairs that have no symbol function exposed
      if (!isNullEthValue(symbolResultBytes.value.toHexString())) {
        symbolValue = symbolResultBytes.value.toString();
      }
    }
  } else {
    symbolValue = symbolResult.value;
  }

  return symbolValue;
}

export function isNullEthValue(value: string): boolean {
  return (
    value ==
    '0x0000000000000000000000000000000000000000000000000000000000000001'
  );
}

export function fetchTokenName(tokenAddress: Address): string {
  // hard coded overrides
  if (
    tokenAddress.toHexString() == '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'
  ) {
    return 'DGD';
  }
  if (
    tokenAddress.toHexString() == '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
  ) {
    return 'Aave Token';
  }

  let contract = ERC20.bind(tokenAddress);
  let contractNameBytes = ERC20NameBytes.bind(tokenAddress);

  // try types string and bytes32 for name
  let nameValue = 'unknown';
  let nameResult = contract.try_name();
  if (nameResult.reverted) {
    let nameResultBytes = contractNameBytes.try_name();
    if (!nameResultBytes.reverted) {
      // for broken exchanges that have no name function exposed
      if (!isNullEthValue(nameResultBytes.value.toHexString())) {
        nameValue = nameResultBytes.value.toString();
      }
    }
  } else {
    nameValue = nameResult.value;
  }

  return nameValue;
}
