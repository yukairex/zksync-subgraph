import {
  NewToken,
  ValidatorStatusUpdate,
} from '../generated/Governance/Governance';
import {
  BlockCommit,
  BlockVerification,
  FactAuth,
} from '../generated/ZkSync/ZkSync';
import { Token, Validator, Block, User } from '../generated/schema';
import { fetchTokenSymbol, fetchTokenName } from './helpers';
import { log } from '@graphprotocol/graph-ts';

export function handleNewToken(event: NewToken): void {
  let token = new Token(event.params.token.toHex());
  token.tokenId = event.params.tokenId;
  token.symbol = fetchTokenSymbol(event.params.token);
  token.name = fetchTokenName(event.params.token);
  token.save();
}

export function handleValidatorStatusUpdate(
  event: ValidatorStatusUpdate
): void {
  log.info('validator event triggered: {}', [
    event.params.validatorAddress.toHex(),
  ]);
  let validator = Validator.load(event.params.validatorAddress.toHex());
  if (validator === null) {
    validator = new Validator(event.params.validatorAddress.toHex());
  }
  validator.isActive = event.params.isActive;
  validator.save();
}

export function handleBlockCommit(event: BlockCommit): void {
  let block = new Block(event.params.blockNumber.toString());
  block.isCommited = true;
  block.isVerified = false;
  block.save();
}

export function handleBlockVerification(event: BlockVerification): void {
  let block = Block.load(event.params.blockNumber.toString());
  if (block === null) {
    block = new Block(event.params.blockNumber.toString());
    block.isCommited = true;
  }
  block.isVerified = true;
  block.save();
}

export function handleFactAuth(event: FactAuth): void {
  let user = User.load(event.params.sender.toHex());
  if (user === null) {
    user = new User(event.params.sender.toHex());
  }
  user.pubkeyHash = event.params.fact;
  user.save();
}
