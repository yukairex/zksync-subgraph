import { NewToken } from '../generated/Governance/Governance';
import { Token } from '../generated/schema';
import { fetchTokenSymbol, fetchTokenName } from './helpers';

export function handleNewToken(event: NewToken): void {
  let token = new Token(event.params.token.toHex());
  token.tokenId = event.params.tokenId;
  token.symbol = fetchTokenSymbol(event.params.token);
  token.name = fetchTokenName(event.params.token);
  token.save();
}
