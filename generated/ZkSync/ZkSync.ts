// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BlockCommit extends ethereum.Event {
  get params(): BlockCommit__Params {
    return new BlockCommit__Params(this);
  }
}

export class BlockCommit__Params {
  _event: BlockCommit;

  constructor(event: BlockCommit) {
    this._event = event;
  }

  get blockNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class BlockVerification extends ethereum.Event {
  get params(): BlockVerification__Params {
    return new BlockVerification__Params(this);
  }
}

export class BlockVerification__Params {
  _event: BlockVerification;

  constructor(event: BlockVerification) {
    this._event = event;
  }

  get blockNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class BlocksRevert extends ethereum.Event {
  get params(): BlocksRevert__Params {
    return new BlocksRevert__Params(this);
  }
}

export class BlocksRevert__Params {
  _event: BlocksRevert;

  constructor(event: BlocksRevert) {
    this._event = event;
  }

  get totalBlocksVerified(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalBlocksCommitted(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DepositCommit extends ethereum.Event {
  get params(): DepositCommit__Params {
    return new DepositCommit__Params(this);
  }
}

export class DepositCommit__Params {
  _event: DepositCommit;

  constructor(event: DepositCommit) {
    this._event = event;
  }

  get zkSyncBlockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get accountId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ExodusMode extends ethereum.Event {
  get params(): ExodusMode__Params {
    return new ExodusMode__Params(this);
  }
}

export class ExodusMode__Params {
  _event: ExodusMode;

  constructor(event: ExodusMode) {
    this._event = event;
  }
}

export class FactAuth extends ethereum.Event {
  get params(): FactAuth__Params {
    return new FactAuth__Params(this);
  }
}

export class FactAuth__Params {
  _event: FactAuth;

  constructor(event: FactAuth) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nonce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fact(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class FullExitCommit extends ethereum.Event {
  get params(): FullExitCommit__Params {
    return new FullExitCommit__Params(this);
  }
}

export class FullExitCommit__Params {
  _event: FullExitCommit;

  constructor(event: FullExitCommit) {
    this._event = event;
  }

  get zkSyncBlockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get accountId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NewPriorityRequest extends ethereum.Event {
  get params(): NewPriorityRequest__Params {
    return new NewPriorityRequest__Params(this);
  }
}

export class NewPriorityRequest__Params {
  _event: NewPriorityRequest;

  constructor(event: NewPriorityRequest) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get serialId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get opType(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get pubData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get expirationBlock(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OnchainDeposit extends ethereum.Event {
  get params(): OnchainDeposit__Params {
    return new OnchainDeposit__Params(this);
  }
}

export class OnchainDeposit__Params {
  _event: OnchainDeposit;

  constructor(event: OnchainDeposit) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OnchainWithdrawal extends ethereum.Event {
  get params(): OnchainWithdrawal__Params {
    return new OnchainWithdrawal__Params(this);
  }
}

export class OnchainWithdrawal__Params {
  _event: OnchainWithdrawal;

  constructor(event: OnchainWithdrawal) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PendingWithdrawalsAdd extends ethereum.Event {
  get params(): PendingWithdrawalsAdd__Params {
    return new PendingWithdrawalsAdd__Params(this);
  }
}

export class PendingWithdrawalsAdd__Params {
  _event: PendingWithdrawalsAdd;

  constructor(event: PendingWithdrawalsAdd) {
    this._event = event;
  }

  get queueStartIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get queueEndIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PendingWithdrawalsComplete extends ethereum.Event {
  get params(): PendingWithdrawalsComplete__Params {
    return new PendingWithdrawalsComplete__Params(this);
  }
}

export class PendingWithdrawalsComplete__Params {
  _event: PendingWithdrawalsComplete;

  constructor(event: PendingWithdrawalsComplete) {
    this._event = event;
  }

  get queueStartIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get queueEndIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ZkSync__balancesToWithdrawResult {
  value0: BigInt;
  value1: i32;

  constructor(value0: BigInt, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    return map;
  }
}

export class ZkSync__blocksResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: Bytes;
  value4: Bytes;
  value5: Bytes;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: Bytes,
    value4: Bytes,
    value5: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromFixedBytes(this.value3));
    map.set("value4", ethereum.Value.fromFixedBytes(this.value4));
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
    return map;
  }
}

export class ZkSync__pendingWithdrawalsResult {
  value0: Address;
  value1: i32;

  constructor(value0: Address, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    return map;
  }
}

export class ZkSync__priorityRequestsResult {
  value0: i32;
  value1: Bytes;
  value2: BigInt;

  constructor(value0: i32, value1: Bytes, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class ZkSync extends ethereum.SmartContract {
  static bind(address: Address): ZkSync {
    return new ZkSync("ZkSync", address);
  }

  EMPTY_STRING_KECCAK(): Bytes {
    let result = super.call(
      "EMPTY_STRING_KECCAK",
      "EMPTY_STRING_KECCAK():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EMPTY_STRING_KECCAK(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EMPTY_STRING_KECCAK",
      "EMPTY_STRING_KECCAK():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  authFacts(param0: Address, param1: BigInt): Bytes {
    let result = super.call(
      "authFacts",
      "authFacts(address,uint32):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBytes();
  }

  try_authFacts(param0: Address, param1: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "authFacts",
      "authFacts(address,uint32):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balancesToWithdraw(param0: Bytes): ZkSync__balancesToWithdrawResult {
    let result = super.call(
      "balancesToWithdraw",
      "balancesToWithdraw(bytes22):(uint128,uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new ZkSync__balancesToWithdrawResult(
      result[0].toBigInt(),
      result[1].toI32()
    );
  }

  try_balancesToWithdraw(
    param0: Bytes
  ): ethereum.CallResult<ZkSync__balancesToWithdrawResult> {
    let result = super.tryCall(
      "balancesToWithdraw",
      "balancesToWithdraw(bytes22):(uint128,uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ZkSync__balancesToWithdrawResult(
        value[0].toBigInt(),
        value[1].toI32()
      )
    );
  }

  blocks(param0: BigInt): ZkSync__blocksResult {
    let result = super.call(
      "blocks",
      "blocks(uint32):(uint32,uint64,uint32,bytes32,bytes32,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ZkSync__blocksResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBytes(),
      result[4].toBytes(),
      result[5].toBytes()
    );
  }

  try_blocks(param0: BigInt): ethereum.CallResult<ZkSync__blocksResult> {
    let result = super.tryCall(
      "blocks",
      "blocks(uint32):(uint32,uint64,uint32,bytes32,bytes32,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ZkSync__blocksResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBytes(),
        value[4].toBytes(),
        value[5].toBytes()
      )
    );
  }

  exited(param0: BigInt, param1: i32): boolean {
    let result = super.call("exited", "exited(uint32,uint16):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param1))
    ]);

    return result[0].toBoolean();
  }

  try_exited(param0: BigInt, param1: i32): ethereum.CallResult<boolean> {
    let result = super.tryCall("exited", "exited(uint32,uint16):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param1))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  exodusMode(): boolean {
    let result = super.call("exodusMode", "exodusMode():(bool)", []);

    return result[0].toBoolean();
  }

  try_exodusMode(): ethereum.CallResult<boolean> {
    let result = super.tryCall("exodusMode", "exodusMode():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  firstPendingWithdrawalIndex(): BigInt {
    let result = super.call(
      "firstPendingWithdrawalIndex",
      "firstPendingWithdrawalIndex():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_firstPendingWithdrawalIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "firstPendingWithdrawalIndex",
      "firstPendingWithdrawalIndex():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  firstPriorityRequestId(): BigInt {
    let result = super.call(
      "firstPriorityRequestId",
      "firstPriorityRequestId():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_firstPriorityRequestId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "firstPriorityRequestId",
      "firstPriorityRequestId():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBalanceToWithdraw(_address: Address, _tokenId: i32): BigInt {
    let result = super.call(
      "getBalanceToWithdraw",
      "getBalanceToWithdraw(address,uint16):(uint128)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_tokenId))
      ]
    );

    return result[0].toBigInt();
  }

  try_getBalanceToWithdraw(
    _address: Address,
    _tokenId: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBalanceToWithdraw",
      "getBalanceToWithdraw(address,uint16):(uint128)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_tokenId))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNoticePeriod(): BigInt {
    let result = super.call(
      "getNoticePeriod",
      "getNoticePeriod():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNoticePeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNoticePeriod",
      "getNoticePeriod():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isReadyForUpgrade(): boolean {
    let result = super.call(
      "isReadyForUpgrade",
      "isReadyForUpgrade():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isReadyForUpgrade(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isReadyForUpgrade",
      "isReadyForUpgrade():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  numberOfPendingWithdrawals(): BigInt {
    let result = super.call(
      "numberOfPendingWithdrawals",
      "numberOfPendingWithdrawals():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_numberOfPendingWithdrawals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberOfPendingWithdrawals",
      "numberOfPendingWithdrawals():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingWithdrawals(param0: BigInt): ZkSync__pendingWithdrawalsResult {
    let result = super.call(
      "pendingWithdrawals",
      "pendingWithdrawals(uint32):(address,uint16)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ZkSync__pendingWithdrawalsResult(
      result[0].toAddress(),
      result[1].toI32()
    );
  }

  try_pendingWithdrawals(
    param0: BigInt
  ): ethereum.CallResult<ZkSync__pendingWithdrawalsResult> {
    let result = super.tryCall(
      "pendingWithdrawals",
      "pendingWithdrawals(uint32):(address,uint16)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ZkSync__pendingWithdrawalsResult(
        value[0].toAddress(),
        value[1].toI32()
      )
    );
  }

  priorityRequests(param0: BigInt): ZkSync__priorityRequestsResult {
    let result = super.call(
      "priorityRequests",
      "priorityRequests(uint64):(uint8,bytes,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ZkSync__priorityRequestsResult(
      result[0].toI32(),
      result[1].toBytes(),
      result[2].toBigInt()
    );
  }

  try_priorityRequests(
    param0: BigInt
  ): ethereum.CallResult<ZkSync__priorityRequestsResult> {
    let result = super.tryCall(
      "priorityRequests",
      "priorityRequests(uint64):(uint8,bytes,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ZkSync__priorityRequestsResult(
        value[0].toI32(),
        value[1].toBytes(),
        value[2].toBigInt()
      )
    );
  }

  totalBlocksCommitted(): BigInt {
    let result = super.call(
      "totalBlocksCommitted",
      "totalBlocksCommitted():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalBlocksCommitted(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalBlocksCommitted",
      "totalBlocksCommitted():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalBlocksVerified(): BigInt {
    let result = super.call(
      "totalBlocksVerified",
      "totalBlocksVerified():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalBlocksVerified(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalBlocksVerified",
      "totalBlocksVerified():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalCommittedPriorityRequests(): BigInt {
    let result = super.call(
      "totalCommittedPriorityRequests",
      "totalCommittedPriorityRequests():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalCommittedPriorityRequests(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalCommittedPriorityRequests",
      "totalCommittedPriorityRequests():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalOpenPriorityRequests(): BigInt {
    let result = super.call(
      "totalOpenPriorityRequests",
      "totalOpenPriorityRequests():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalOpenPriorityRequests(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalOpenPriorityRequests",
      "totalOpenPriorityRequests():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  triggerExodusIfNeeded(): boolean {
    let result = super.call(
      "triggerExodusIfNeeded",
      "triggerExodusIfNeeded():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_triggerExodusIfNeeded(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "triggerExodusIfNeeded",
      "triggerExodusIfNeeded():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  upgradePreparationActivationTime(): BigInt {
    let result = super.call(
      "upgradePreparationActivationTime",
      "upgradePreparationActivationTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_upgradePreparationActivationTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "upgradePreparationActivationTime",
      "upgradePreparationActivationTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  upgradePreparationActive(): boolean {
    let result = super.call(
      "upgradePreparationActive",
      "upgradePreparationActive():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_upgradePreparationActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "upgradePreparationActive",
      "upgradePreparationActive():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  withdrawERC20Guarded(
    _token: Address,
    _to: Address,
    _amount: BigInt,
    _maxAmount: BigInt
  ): BigInt {
    let result = super.call(
      "withdrawERC20Guarded",
      "withdrawERC20Guarded(address,address,uint128,uint128):(uint128)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(_maxAmount)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdrawERC20Guarded(
    _token: Address,
    _to: Address,
    _amount: BigInt,
    _maxAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawERC20Guarded",
      "withdrawERC20Guarded(address,address,uint128,uint128):(uint128)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(_maxAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CancelOutstandingDepositsForExodusModeCall extends ethereum.Call {
  get inputs(): CancelOutstandingDepositsForExodusModeCall__Inputs {
    return new CancelOutstandingDepositsForExodusModeCall__Inputs(this);
  }

  get outputs(): CancelOutstandingDepositsForExodusModeCall__Outputs {
    return new CancelOutstandingDepositsForExodusModeCall__Outputs(this);
  }
}

export class CancelOutstandingDepositsForExodusModeCall__Inputs {
  _call: CancelOutstandingDepositsForExodusModeCall;

  constructor(call: CancelOutstandingDepositsForExodusModeCall) {
    this._call = call;
  }

  get _n(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelOutstandingDepositsForExodusModeCall__Outputs {
  _call: CancelOutstandingDepositsForExodusModeCall;

  constructor(call: CancelOutstandingDepositsForExodusModeCall) {
    this._call = call;
  }
}

export class CommitBlockCall extends ethereum.Call {
  get inputs(): CommitBlockCall__Inputs {
    return new CommitBlockCall__Inputs(this);
  }

  get outputs(): CommitBlockCall__Outputs {
    return new CommitBlockCall__Outputs(this);
  }
}

export class CommitBlockCall__Inputs {
  _call: CommitBlockCall;

  constructor(call: CommitBlockCall) {
    this._call = call;
  }

  get _blockNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _feeAccount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _newBlockInfo(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _publicData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _ethWitness(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _ethWitnessSizes(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }
}

export class CommitBlockCall__Outputs {
  _call: CommitBlockCall;

  constructor(call: CommitBlockCall) {
    this._call = call;
  }
}

export class CompleteWithdrawalsCall extends ethereum.Call {
  get inputs(): CompleteWithdrawalsCall__Inputs {
    return new CompleteWithdrawalsCall__Inputs(this);
  }

  get outputs(): CompleteWithdrawalsCall__Outputs {
    return new CompleteWithdrawalsCall__Outputs(this);
  }
}

export class CompleteWithdrawalsCall__Inputs {
  _call: CompleteWithdrawalsCall;

  constructor(call: CompleteWithdrawalsCall) {
    this._call = call;
  }

  get _n(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CompleteWithdrawalsCall__Outputs {
  _call: CompleteWithdrawalsCall;

  constructor(call: CompleteWithdrawalsCall) {
    this._call = call;
  }
}

export class DepositERC20Call extends ethereum.Call {
  get inputs(): DepositERC20Call__Inputs {
    return new DepositERC20Call__Inputs(this);
  }

  get outputs(): DepositERC20Call__Outputs {
    return new DepositERC20Call__Outputs(this);
  }
}

export class DepositERC20Call__Inputs {
  _call: DepositERC20Call;

  constructor(call: DepositERC20Call) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _franklinAddr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DepositERC20Call__Outputs {
  _call: DepositERC20Call;

  constructor(call: DepositERC20Call) {
    this._call = call;
  }
}

export class DepositETHCall extends ethereum.Call {
  get inputs(): DepositETHCall__Inputs {
    return new DepositETHCall__Inputs(this);
  }

  get outputs(): DepositETHCall__Outputs {
    return new DepositETHCall__Outputs(this);
  }
}

export class DepositETHCall__Inputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }

  get _franklinAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DepositETHCall__Outputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }
}

export class ExitCall extends ethereum.Call {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }

  get _accountId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenId(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _proof(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class FullExitCall extends ethereum.Call {
  get inputs(): FullExitCall__Inputs {
    return new FullExitCall__Inputs(this);
  }

  get outputs(): FullExitCall__Outputs {
    return new FullExitCall__Outputs(this);
  }
}

export class FullExitCall__Inputs {
  _call: FullExitCall;

  constructor(call: FullExitCall) {
    this._call = call;
  }

  get _accountId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class FullExitCall__Outputs {
  _call: FullExitCall;

  constructor(call: FullExitCall) {
    this._call = call;
  }
}

export class GetNoticePeriodCall extends ethereum.Call {
  get inputs(): GetNoticePeriodCall__Inputs {
    return new GetNoticePeriodCall__Inputs(this);
  }

  get outputs(): GetNoticePeriodCall__Outputs {
    return new GetNoticePeriodCall__Outputs(this);
  }
}

export class GetNoticePeriodCall__Inputs {
  _call: GetNoticePeriodCall;

  constructor(call: GetNoticePeriodCall) {
    this._call = call;
  }
}

export class GetNoticePeriodCall__Outputs {
  _call: GetNoticePeriodCall;

  constructor(call: GetNoticePeriodCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get initializationParameters(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class IsReadyForUpgradeCall extends ethereum.Call {
  get inputs(): IsReadyForUpgradeCall__Inputs {
    return new IsReadyForUpgradeCall__Inputs(this);
  }

  get outputs(): IsReadyForUpgradeCall__Outputs {
    return new IsReadyForUpgradeCall__Outputs(this);
  }
}

export class IsReadyForUpgradeCall__Inputs {
  _call: IsReadyForUpgradeCall;

  constructor(call: IsReadyForUpgradeCall) {
    this._call = call;
  }
}

export class IsReadyForUpgradeCall__Outputs {
  _call: IsReadyForUpgradeCall;

  constructor(call: IsReadyForUpgradeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RevertBlocksCall extends ethereum.Call {
  get inputs(): RevertBlocksCall__Inputs {
    return new RevertBlocksCall__Inputs(this);
  }

  get outputs(): RevertBlocksCall__Outputs {
    return new RevertBlocksCall__Outputs(this);
  }
}

export class RevertBlocksCall__Inputs {
  _call: RevertBlocksCall;

  constructor(call: RevertBlocksCall) {
    this._call = call;
  }

  get _maxBlocksToRevert(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevertBlocksCall__Outputs {
  _call: RevertBlocksCall;

  constructor(call: RevertBlocksCall) {
    this._call = call;
  }
}

export class SetAuthPubkeyHashCall extends ethereum.Call {
  get inputs(): SetAuthPubkeyHashCall__Inputs {
    return new SetAuthPubkeyHashCall__Inputs(this);
  }

  get outputs(): SetAuthPubkeyHashCall__Outputs {
    return new SetAuthPubkeyHashCall__Outputs(this);
  }
}

export class SetAuthPubkeyHashCall__Inputs {
  _call: SetAuthPubkeyHashCall;

  constructor(call: SetAuthPubkeyHashCall) {
    this._call = call;
  }

  get _pubkey_hash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _nonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetAuthPubkeyHashCall__Outputs {
  _call: SetAuthPubkeyHashCall;

  constructor(call: SetAuthPubkeyHashCall) {
    this._call = call;
  }
}

export class TriggerExodusIfNeededCall extends ethereum.Call {
  get inputs(): TriggerExodusIfNeededCall__Inputs {
    return new TriggerExodusIfNeededCall__Inputs(this);
  }

  get outputs(): TriggerExodusIfNeededCall__Outputs {
    return new TriggerExodusIfNeededCall__Outputs(this);
  }
}

export class TriggerExodusIfNeededCall__Inputs {
  _call: TriggerExodusIfNeededCall;

  constructor(call: TriggerExodusIfNeededCall) {
    this._call = call;
  }
}

export class TriggerExodusIfNeededCall__Outputs {
  _call: TriggerExodusIfNeededCall;

  constructor(call: TriggerExodusIfNeededCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpgradeCall extends ethereum.Call {
  get inputs(): UpgradeCall__Inputs {
    return new UpgradeCall__Inputs(this);
  }

  get outputs(): UpgradeCall__Outputs {
    return new UpgradeCall__Outputs(this);
  }
}

export class UpgradeCall__Inputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }

  get upgradeParameters(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class UpgradeCall__Outputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }
}

export class UpgradeCanceledCall extends ethereum.Call {
  get inputs(): UpgradeCanceledCall__Inputs {
    return new UpgradeCanceledCall__Inputs(this);
  }

  get outputs(): UpgradeCanceledCall__Outputs {
    return new UpgradeCanceledCall__Outputs(this);
  }
}

export class UpgradeCanceledCall__Inputs {
  _call: UpgradeCanceledCall;

  constructor(call: UpgradeCanceledCall) {
    this._call = call;
  }
}

export class UpgradeCanceledCall__Outputs {
  _call: UpgradeCanceledCall;

  constructor(call: UpgradeCanceledCall) {
    this._call = call;
  }
}

export class UpgradeFinishesCall extends ethereum.Call {
  get inputs(): UpgradeFinishesCall__Inputs {
    return new UpgradeFinishesCall__Inputs(this);
  }

  get outputs(): UpgradeFinishesCall__Outputs {
    return new UpgradeFinishesCall__Outputs(this);
  }
}

export class UpgradeFinishesCall__Inputs {
  _call: UpgradeFinishesCall;

  constructor(call: UpgradeFinishesCall) {
    this._call = call;
  }
}

export class UpgradeFinishesCall__Outputs {
  _call: UpgradeFinishesCall;

  constructor(call: UpgradeFinishesCall) {
    this._call = call;
  }
}

export class UpgradeNoticePeriodStartedCall extends ethereum.Call {
  get inputs(): UpgradeNoticePeriodStartedCall__Inputs {
    return new UpgradeNoticePeriodStartedCall__Inputs(this);
  }

  get outputs(): UpgradeNoticePeriodStartedCall__Outputs {
    return new UpgradeNoticePeriodStartedCall__Outputs(this);
  }
}

export class UpgradeNoticePeriodStartedCall__Inputs {
  _call: UpgradeNoticePeriodStartedCall;

  constructor(call: UpgradeNoticePeriodStartedCall) {
    this._call = call;
  }
}

export class UpgradeNoticePeriodStartedCall__Outputs {
  _call: UpgradeNoticePeriodStartedCall;

  constructor(call: UpgradeNoticePeriodStartedCall) {
    this._call = call;
  }
}

export class UpgradePreparationStartedCall extends ethereum.Call {
  get inputs(): UpgradePreparationStartedCall__Inputs {
    return new UpgradePreparationStartedCall__Inputs(this);
  }

  get outputs(): UpgradePreparationStartedCall__Outputs {
    return new UpgradePreparationStartedCall__Outputs(this);
  }
}

export class UpgradePreparationStartedCall__Inputs {
  _call: UpgradePreparationStartedCall;

  constructor(call: UpgradePreparationStartedCall) {
    this._call = call;
  }
}

export class UpgradePreparationStartedCall__Outputs {
  _call: UpgradePreparationStartedCall;

  constructor(call: UpgradePreparationStartedCall) {
    this._call = call;
  }
}

export class VerifyBlockCall extends ethereum.Call {
  get inputs(): VerifyBlockCall__Inputs {
    return new VerifyBlockCall__Inputs(this);
  }

  get outputs(): VerifyBlockCall__Outputs {
    return new VerifyBlockCall__Outputs(this);
  }
}

export class VerifyBlockCall__Inputs {
  _call: VerifyBlockCall;

  constructor(call: VerifyBlockCall) {
    this._call = call;
  }

  get _blockNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _proof(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _withdrawalsData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class VerifyBlockCall__Outputs {
  _call: VerifyBlockCall;

  constructor(call: VerifyBlockCall) {
    this._call = call;
  }
}

export class WithdrawERC20Call extends ethereum.Call {
  get inputs(): WithdrawERC20Call__Inputs {
    return new WithdrawERC20Call__Inputs(this);
  }

  get outputs(): WithdrawERC20Call__Outputs {
    return new WithdrawERC20Call__Outputs(this);
  }
}

export class WithdrawERC20Call__Inputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawERC20Call__Outputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }
}

export class WithdrawERC20GuardedCall extends ethereum.Call {
  get inputs(): WithdrawERC20GuardedCall__Inputs {
    return new WithdrawERC20GuardedCall__Inputs(this);
  }

  get outputs(): WithdrawERC20GuardedCall__Outputs {
    return new WithdrawERC20GuardedCall__Outputs(this);
  }
}

export class WithdrawERC20GuardedCall__Inputs {
  _call: WithdrawERC20GuardedCall;

  constructor(call: WithdrawERC20GuardedCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _maxAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class WithdrawERC20GuardedCall__Outputs {
  _call: WithdrawERC20GuardedCall;

  constructor(call: WithdrawERC20GuardedCall) {
    this._call = call;
  }

  get withdrawnAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawETHCall extends ethereum.Call {
  get inputs(): WithdrawETHCall__Inputs {
    return new WithdrawETHCall__Inputs(this);
  }

  get outputs(): WithdrawETHCall__Outputs {
    return new WithdrawETHCall__Outputs(this);
  }
}

export class WithdrawETHCall__Inputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawETHCall__Outputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }
}
