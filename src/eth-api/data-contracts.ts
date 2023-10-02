/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ShortBlockResponseDto {
  /**
   * transactionRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  transaction_root: string;
  /**
   * receiptRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  receipt_root: string;
  /**
   * The block size
   * @example 500
   */
  size: number;
  /**
   * The difficulty of the block
   * @example 17179869184
   */
  difficulty: number;
  /**
   * The total difficulty
   * @example 17179869184
   */
  total_difficulty: number;
  /**
   * uncles
   * @example []
   */
  uncles: string[];
  /**
   * The block number
   * @example 9193266
   */
  block: number;
  /**
   * hash
   * @example "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3"
   */
  hash: string;
  /**
   * The block hash of the parent block
   * @example "0x0000000000000000000000000000000000000000000000000000000000000000"
   */
  parent_hash: string;
  /**
   * The nonce
   * @example "0x0000000000000042"
   */
  nonce: string;
  /**
   * sha3Uncles
   * @example "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"
   */
  sha3_uncles: string;
  /**
   * logsBloom
   * @example "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
   */
  logs_bloom: string;
  /**
   * transactionsRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  transactions_root: string;
  /**
   * stateRoot
   * @example "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"
   */
  state_root: string;
  /**
   * receiptsRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  receipts_root: string;
  /**
   * The address of the miner
   * @example "0x0000000000000000000000000000000000000000"
   */
  miner: string;
  /**
   * extraData
   * @example "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
   */
  extra_data: string;
  /**
   * The gas limit
   * @example 5000
   */
  gas_limit: number;
  /**
   * The gas used
   * @example 0
   */
  gas_used: number;
  /**
   * The block time of the block
   * @example "1970-01-19T12:04:31.492Z"
   */
  block_time: string;
  /**
   * The timestamp of the block
   * @example "1687064975"
   */
  timestamp: string;
  /**
   * base fee per gas
   * @example 100
   */
  base_fee_per_gas?: number;
}

export interface ListBlockResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Blocks */
  data: ShortBlockResponseDto[];
}

export interface TxLogResponseDto {
  /**
   * removed
   * @example false
   */
  removed: boolean;
  /**
   * The address of the contract
   * @example "0x0000000000000000000000000000000000001003"
   */
  address: string;
  /**
   * The data of the log
   * @example "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000"
   */
  data: string;
  /**
   * topic0
   * @example "0x5ac9b37d571677b80957ca05693f371526c602fd08042b416a29fdab7efefa49"
   */
  topic0: string;
  /**
   * topic1
   * @example "0x5ac9b37d571677b80957ca05693f371526c602fd08042b416a29fdab7efefa49"
   */
  topic1: string;
  /**
   * topic2
   * @example "0x5ac9b37d571677b80957ca05693f371526c602fd08042b416a29fdab7efefa49"
   */
  topic2: string;
  /**
   * topic3
   * @example "0x5ac9b37d571677b80957ca05693f371526c602fd08042b416a29fdab7efefa49"
   */
  topic3: string;
  /**
   * logIndex
   * @example 0
   */
  log_index: number;
  /**
   * transactionIndex
   * @example 2
   */
  transaction_index: number;
  /**
   * The hash of the transaction
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  transaction_hash: string;
  /**
   * The hash of the block
   * @example "0xd0bc67b50915467ada963c35ee00950f664788e47da8139d8c178653171034f1"
   */
  block_hash: string;
  /**
   * The block number
   * @example 1
   */
  block_number: number;
  /** The block timestamp */
  block_timestamp: number;
}

export interface InternalTransactionResponseDto {
  /**
   * The hash of the transaction
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  hash: string;
  /**
   * The sender
   * @example "0x35552c16704d214347f29fa77f77da6d75d7c752"
   */
  from: string;
  /**
   * The recipient
   * @example "0x0000000000000000000000000000000000001003"
   */
  to: string;
  /** The input */
  input: string;
  /**
   * The output
   * @example ""
   */
  output: string;
  /**
   * The value that was transferred (in wei)
   * @example "0"
   */
  value: string;
  /**
   * he gas of the transaction
   * @example "209665"
   */
  gas: string;
  /** The block timestamp */
  timestamp: number;
  /** The block time */
  block_time: number;
  /**
   * blockHash
   * @example "0xd0bc67b50915467ada963c35ee00950f664788e47da8139d8c178653171034f1"
   */
  block_hash: string;
  /**
   * blockNumber
   * @example 1
   */
  block_number: number;
  /**
   * Call type
   * @example "STATICCALL"
   */
  type: string;
  /**
   * The hash of the parent transaction
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  parent_tx_hash: string;
  /**
   * receiptGasUsed
   * @example 901693
   */
  gas_used: number;
  /**
   * status
   * @example true
   */
  status: boolean;
  /**
   * traceId
   * @example "0_1_1"
   */
  trace_id: string;
  /**
   * error
   * @example 901693
   */
  error: string;
}

export interface TransactionResponseDto {
  /**
   * The hash of the transaction
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  hash: string;
  /**
   * The transaction index
   * @example 1
   */
  transaction_index: number;
  /**
   * The sender
   * @example "0x35552c16704d214347f29fa77f77da6d75d7c752"
   */
  from: string;
  /**
   * The recipient
   * @example "0x0000000000000000000000000000000000001003"
   */
  to: string;
  /**
   * receiptContractAddress
   * @example null
   */
  receipt_contract_address: string;
  /**
   * cumulativeGasUsed
   * @example 901693
   */
  receipt_cumulative_gas_used: number;
  /**
   * receiptGasUsed
   * @example 901693
   */
  receipt_gas_used: number;
  /** The input */
  input: string;
  /**
   * The output
   * @example ""
   */
  output: string;
  /**
   * The value that was transferred (in wei)
   * @example "0"
   */
  value: string;
  /**
   * The nonce
   * @example 1
   */
  nonce: number;
  /** The gas price */
  gas_price: string;
  /**
   * he gas of the transaction
   * @example "209665"
   */
  gas: string;
  /** The block timestamp */
  timestamp: number;
  /** The block time */
  block_time: number;
  /**
   * blockHash
   * @example "0xd0bc67b50915467ada963c35ee00950f664788e47da8139d8c178653171034f1"
   */
  block_hash: string;
  /**
   * blockNumber
   * @example 1
   */
  block_number: number;
  /** receiptRoot */
  receipt_root: string;
  /**
   * status
   * @example true
   */
  status: boolean;
  /**
   * effectiveGasPrice
   * @example 0
   */
  effective_gas_price: string;
  /**
   * logsBloom
   * @example "0x08000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000"
   */
  logs_bloom: string;
  /** The logs of the transaction */
  logs: TxLogResponseDto[];
  /** The internal transactions of the transaction */
  internal_transactions: InternalTransactionResponseDto[];
}

export interface BaseBlockDto {
  /**
   * transactionRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  transaction_root: string;
  /**
   * receiptRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  receipt_root: string;
  /**
   * The block size
   * @example 500
   */
  size: number;
  /**
   * The difficulty of the block
   * @example 17179869184
   */
  difficulty: number;
  /**
   * The total difficulty
   * @example 17179869184
   */
  total_difficulty: number;
  /**
   * uncles
   * @example []
   */
  uncles: string[];
  /**
   * The block number
   * @example 9193266
   */
  block: number;
  /**
   * hash
   * @example "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3"
   */
  hash: string;
  /**
   * The block hash of the parent block
   * @example "0x0000000000000000000000000000000000000000000000000000000000000000"
   */
  parent_hash: string;
  /**
   * The nonce
   * @example "0x0000000000000042"
   */
  nonce: string;
  /**
   * sha3Uncles
   * @example "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"
   */
  sha3_uncles: string;
  /**
   * logsBloom
   * @example "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
   */
  logs_bloom: string;
  /**
   * transactionsRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  transactions_root: string;
  /**
   * stateRoot
   * @example "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"
   */
  state_root: string;
  /**
   * receiptsRoot
   * @example "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
   */
  receipts_root: string;
  /**
   * The address of the miner
   * @example "0x0000000000000000000000000000000000000000"
   */
  miner: string;
  /**
   * extraData
   * @example "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
   */
  extra_data: string;
  /**
   * The gas limit
   * @example 5000
   */
  gas_limit: number;
  /**
   * The gas used
   * @example 0
   */
  gas_used: number;
  /**
   * The block time of the block
   * @example "1970-01-19T12:04:31.492Z"
   */
  block_time: string;
  /**
   * The timestamp of the block
   * @example "1687064975"
   */
  timestamp: string;
  /**
   * base fee per gas
   * @example 100
   */
  base_fee_per_gas?: number;
  /**
   * The number of transactions in the block
   * @example 100
   */
  transaction_count: number;
  /** The transactions in the block */
  transactions: TransactionResponseDto[];
}

export interface ListTransactionResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: TransactionResponseDto[];
}

export interface LogResponseDto {
  /**
   * transactionHash
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  tx_hash: string;
  /**
   * txIndex
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  tx_index: string;
  /**
   * contractAddress
   * @example "0x0000000000000000000000000000000000001003"
   */
  contract_address: string;
  /**
   * blockHash
   * @example 1
   */
  block_hash: string;
  /**
   * blockNumber
   * @example 1
   */
  block_number: number;
  /**
   * Block timestamp
   * @example 1661314004
   */
  timestamp: number;
  /**
   * The block time of the block
   * @example "1970-01-19T12:04:31.492Z"
   */
  block_time: string;
  /**
   * logIndex
   * @example "0"
   */
  log_index: number;
  /**
   * data
   * @example "0"
   */
  data: string;
  /** topic 0 */
  topic0: string;
  /** topic 1 */
  topic1: string;
  /** topic 2 */
  topic2: string;
  /** topic 3 */
  topic3: string;
  /**
   * removed
   * @example "0"
   */
  removed: boolean;
}

export interface ListLogResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: LogResponseDto[];
}

export interface ErrorMessageDto {
  /** @example 400 */
  statusCode: number;
  /** @example ["message 1","message 2"] */
  message: string[];
  /** @example "Bad Request" */
  error: string;
}

export interface DecodedLogResponseDto {
  /**
   * transactionHash
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  tx_hash: string;
  /**
   * contractAddress
   * @example "0x0000000000000000000000000000000000001003"
   */
  contract_address: string;
  /**
   * blockNumber
   * @example 1
   */
  block_number: number;
  /**
   * Block timestamp
   * @example 1661314004
   */
  timestamp: number;
  /**
   * The block time of the block
   * @example "1970-01-19T12:04:31.492Z"
   */
  block_time: string;
  /**
   * signature
   * @example "0x8c7a005d0c03b6c696d46ebc8a6ea1a4ebf7593154ccc30e98b7388eb7a443a8"
   */
  signature: string;
  /**
   * logIndex
   * @example "0"
   */
  index: number;
  /**
   * data
   * @example "0"
   */
  data_decoded: string;
  /**
   * eventName
   * @example "0"
   */
  event_name: string;
}

export interface ListDecodedLogResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: DecodedLogResponseDto[];
}

export interface FragmentDto {
  /**
   * encode_signature
   * @example "0"
   */
  encode_signature: string;
  /**
   * signature
   * @example "0"
   */
  signature: string;
  /**
   * abi_item
   * @example "0"
   */
  abi_item?: string;
}

export interface DecodeLogBodyDto {
  /**
   * The ABI to decode log
   * @example [{}]
   */
  abi: FragmentDto[];
}

export interface SyncCollectionMetadataBodyDto {
  /** Collection address */
  collection_address: string;
}

export interface NftCollection {
  /** The address of the NFT contract */
  address: string;
  /** The type of NFT contract standard */
  type: string;
  /** The name of the NFT contract */
  name: string;
  /** The symbol of the NFT contract */
  symbol: string;
  /** The owner of the NFT contract */
  owner?: string;
  /** The base uri of the NFT contract */
  base_uri?: string;
  /** The total supply of the NFT contract */
  total_supply?: string;
}

export interface ListNftCollectionsResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: NftCollection[];
}

export interface NftTransferDto {
  /** The address of the NFT contract */
  token_address: string;
  /** The transaction hash */
  transaction_hash: string;
  /** The type of NFT contract standard */
  transaction_type: string;
  /** The type of NFT contract standard */
  contract_type: string;
  /** The token ID of the NFT */
  token_id: string;
  /** The value that was sent in the transaction (ETH/BNB/etc..) */
  value: string;
  /** The block hash of the transaction */
  block_hash: string;
  /** The block number when the amount or owner changed */
  block_number: number;
  /** The log index */
  log_index: number;
  /** The block timestamp */
  block_timestamp: number;
  /** The number of tokens transferred */
  amount: string;
  /** The address that sent the NFT */
  from_address: string;
  /** The address that received the NFT */
  to_address: string;
  /** The operator present only for ERC1155 transfers */
  operator: string;
  /**
   * The block time of the block
   * @example "1970-01-19T12:04:31.492Z"
   */
  block_time: string;
  /**
   * Block timestamp
   * @example 1661314004
   */
  timestamp: number;
}

export interface ListNftTransfersResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: NftTransferDto[];
}

export interface SyncNFTMetadataBodyDto {
  /** token id */
  token_id: string;
  /** Collection address */
  token_address: string;
}

export interface MetadataAttribute {
  /** The trait title or descriptor */
  trait_type: string;
  /** The value of the attribute */
  value: string;
  /** For numeric values, the upper range */
  max_value: number;
  /** The number of possible values for this trait */
  trait_count: number;
  /** Order the trait should appear in the attribute list. */
  order: number;
}

export interface Metadata {
  /** The name or title of the NFT */
  name: string;
  /** A detailed description of the NFT */
  description: string;
  /** The URL of the NFT's image */
  image: string;
  /** A link to additional information */
  external_link: string;
  /** An animated version of the NFT's image */
  animation_url: string;
  /** An animated version of the NFT's image */
  attributes: MetadataAttribute[];
}

export interface NftOwnerResponseDto {
  /** The address of the NFT contract */
  token_address: string;
  /** The type of NFT contract standard */
  contract_type: string;
  /** The token ID of the NFT */
  token_id: string;
  /** The wallet address of the owner of the NFT */
  owner_of: string;
  /** The wallet address of the minter */
  minter_address: number;
  /** The block number when the amount or owner changed */
  block_number: number;
  /** The block number when the NFT was minted */
  block_number_minted: number;
  /** The metadata of the token */
  metadata: Metadata;
  /** The number of this item the user owns (used by ERC1155) */
  amount: string;
  /** The name of the NFT contract */
  name: string;
  /** The symbol of the NFT contract */
  symbol: string;
  /** The token hash */
  token_hash: string;
  /** When the token_uri was last updated */
  last_token_uri_sync: number;
  /** When the metadata was last updated */
  last_metadata_sync: number;
  /** The URI to the metadata of the token */
  token_uri: string;
}

export interface ListNftOwnerResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: NftOwnerResponseDto[];
}

export interface NFTResponseDto {
  /** The address of the NFT contract */
  token_address: string;
  /** The type of NFT contract standard */
  contract_type: string;
  /** The token ID of the NFT */
  token_id: string;
  /** The wallet address of the owner of the NFT */
  owner_of: string;
  /** The wallet address of the minter */
  minter_address: number;
  /** The block number when the NFT was minted */
  block_number_minted: number;
  /** The metadata of the token */
  metadata: Metadata;
  /** The number of this item the user owns (used by ERC1155) */
  amount: string;
  /** The name of the NFT contract */
  name: string;
  /** The symbol of the NFT contract */
  symbol: string;
  /** The token hash */
  token_hash: string;
  /** When the token_uri was last updated */
  last_token_uri_sync: number;
  /** When the metadata was last updated */
  last_metadata_sync: number;
  /** The URI to the metadata of the token */
  token_uri: string;
}

export interface ListNFTResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  /** Array of documents */
  data: NFTResponseDto[];
}

export interface ERC20TokenBurnDto {
  /** The name or title of the token */
  token_name: string;
  /** The symbol of the token */
  token_symbol: string;
  /** The decimals of the token */
  token_decimals: number;
  /** The address of the token */
  contract_address: string;
  /** The transaction hash of the token */
  transaction_hash: string;
  /** The transaction index of the token */
  transaction_index: number;
  /** The log index of the token */
  log_index: number;
  /** The block hash of the token */
  block_hash: number;
  /** The block number of the token */
  block_number: number;
  /** The block timestamp of the token */
  block_timestamp?: number;
  /** The from wallet of the token */
  from_wallet: string;
  /** The value of the token */
  value: string;
  /** The value in decimal of the token */
  value_in_decimal: string;
  /** id */
  id: string;
}

export interface ERC20TokenBurnResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  data: ERC20TokenBurnDto[];
}

export interface ERC20TokenMetadata {
  /** The name or title of the token */
  name: string;
  /** The symbol of the token */
  symbol: string;
  /** The decimals of the token */
  decimals: string;
  /** The address of the token */
  contract_address: string;
  /** The total supply the token */
  total_supply: string;
  /** The description the token */
  description: string;
  /** The icon url the token */
  icon_url: string;
  /** The time last sync of the token */
  last_synced_at: number;
}

export interface ERC20TokenMetadataResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  data: ERC20TokenMetadata[];
}

export interface ERC20TokenMintDto {
  /** The name or title of the token */
  token_name: string;
  /** The symbol of the token */
  token_symbol: string;
  /** The decimals of the token */
  token_decimals: number;
  /** The address of the token */
  contract_address: string;
  /** The transaction hash of the token */
  transaction_hash: string;
  /** The transaction index of the token */
  transaction_index: number;
  /** The log index of the token */
  log_index: number;
  /** The block hash of the token */
  block_hash: number;
  /** The block number of the token */
  block_number: number;
  /** The block timestamp of the token */
  block_timestamp?: number;
  /** The to wallet of the token */
  to_wallet: string;
  /** The value of the token */
  value: string;
  /** The value in decimal of the token */
  value_in_decimal: string;
  /** id */
  id: string;
}

export interface ERC20TokenMintResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  data: ERC20TokenMintDto[];
}

export interface BaseToken {
  /** The name or title of the token */
  token_name: string;
  /** The symbol of the token */
  token_symbol: string;
  /** The decimals of the token */
  token_decimals: number;
  /** The address of the token */
  contract_address: string;
  /** The transaction hash of the token */
  transaction_hash: string;
  /** The transaction index of the token */
  transaction_index: number;
  /** The log index of the token */
  log_index: number;
  /** The block hash of the token */
  block_hash: number;
  /** The block number of the token */
  block_number: number;
  /** The block timestamp of the token */
  block_timestamp?: number;
  /** The from wallet of the token */
  from_wallet: string;
  /** The to wallet of the token */
  to_wallet: string;
  /** The value of the token */
  value: string;
  /** The value in decimal of the token */
  value_in_decimal: string;
  /** id */
  id: string;
}

export interface ERC20TokenTransferResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  data: BaseToken[];
}

export interface ERC20TokenApprovalResponseDto {
  /** Limit of results */
  limit: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Total returned result items */
  total_items: number;
  data: BaseToken[];
}

export interface GetBlocksParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetBlocksData = ListBlockResponseDto;

export interface GetBlockToBlockParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetBlockToBlockData = ListBlockResponseDto[];

export interface GetBlocksFromTimeToTimeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetBlocksFromTimeToTimeData = ListBlockResponseDto[];

export interface GetBlockByHashParams {
  /**
   * If the result should contain the internal transactions.
   * @example ""
   */
  include?: 'transactions' | 'internal_transactions';
  /**
   * The block number or block hash
   * @example "17639088"
   */
  blockNumberOrHash: string;
}

export type GetBlockByHashData = BaseBlockDto;

export interface GetTransactionsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetTransactionsData = ListTransactionResponseDto[];

export interface GetTransactionsFromBlockToBlockParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetTransactionsFromBlockToBlockData = ListTransactionResponseDto[];

export interface GetTransactionsFromTimeToTimeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetTransactionsFromTimeToTimeData = ListTransactionResponseDto[];

export type GetTransactionByTransactionHashData = TransactionResponseDto;

export type GetTransactionByBlockNumberData = TransactionResponseDto[];

export interface GetEventsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetEventsData = ListLogResponseDto[];

export interface GetEventsFromBlockToBlockParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetEventsFromBlockToBlockData = ListLogResponseDto[];

export interface GetEventsFromTimeToTimeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetEventsFromTimeToTimeData = ListLogResponseDto[];

export type GetEventsByTransactionHashData = LogResponseDto[];

export type GetEventsByTransactionHashError = ErrorMessageDto;

export type GetEventsByBlockNumberData = LogResponseDto[];

export interface GetDecodedEventsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetDecodedEventsData = ListDecodedLogResponseDto[];

export interface GetDecodedEventsFromBlockToBlockParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetDecodedEventsFromBlockToBlockData = ListDecodedLogResponseDto[];

export interface GetDecodedEventsFromTimeToTimeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetDecodedEventsFromTimeToTimeData = ListDecodedLogResponseDto[];

export type GetDecodedEventsByTxHashData = DecodedLogResponseDto[];

export type GetDecodedEventsByBlockNumberData = DecodedLogResponseDto[];

export type DecodeEventWithAbiData = DecodedLogResponseDto[];

export interface GetCollectionsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetCollectionsData = ListNftCollectionsResponseDto;

export type GetNftCollectionMetadataData = NftCollection;

export interface GetNftTransfersParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetNftTransfersData = ListNftTransfersResponseDto;

export interface GetNftTransfersByBlockParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * The block number or block hash
   * @example "17639088"
   */
  blockNumberOrHash: string;
}

export type GetNftTransfersByBlockData = ListNftTransfersResponseDto;

export interface GetNftTransfersFromBlockToBlockParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetNftTransfersFromBlockToBlockData = ListNftTransfersResponseDto;

export interface GetNftTransfersByTransactionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * Transaction hash
   * @example "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
   */
  transactionHash: string;
}

export type GetNftTransfersByTransactionData = ListNftTransfersResponseDto;

export interface GetNftTransfersByCollectionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
}

export type GetNftTransfersByCollectionData = ListNftTransfersResponseDto;

export interface GetNftTransfersOfCollectionFromBlockToBlockParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
}

export type GetNftTransfersOfCollectionFromBlockToBlockData = any;

export interface GetNftTransfersOfCollectionByTimeRangeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
}

export type GetNftTransfersOfCollectionByTimeRangeData = ListNftTransfersResponseDto;

export interface GetNftTransfersByTokenIdParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
  /**
   * The ID of the token
   * @format date-time
   * @example "nfts"
   */
  tokenId: string;
}

export type GetNftTransfersByTokenIdData = ListNftTransfersResponseDto;

export interface GetNftTransfersOfCollectionByBlockParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
  /**
   * Get NFT transfers of collections by block
   * @example "nft"
   */
  blockNumberOrHash: string;
}

export type GetNftTransfersOfCollectionByBlockData = ListNftTransfersResponseDto;

export interface GetNftTransfersOfCollectionByTransactionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
  /**
   * Transaction hash
   * @example "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
   */
  transactionHash: string;
}

export type GetNftTransfersOfCollectionByTransactionData = ListNftTransfersResponseDto;

export interface GetNftOwnersByCollectionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of Nft contract */
  address: string;
}

export type GetNftOwnersByCollectionData = ListNftOwnerResponseDto;

export type GetNftOwnerByTokenIdData = ListNftOwnerResponseDto;

export interface GetNftOwnedByAddressParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * The address of owner
   * @example "wallet_address"
   */
  walletAddress: string;
}

export type GetNftOwnedByAddressData = ListNftOwnerResponseDto;

export interface GetNftMetadataByTokenIdParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of contract */
  address: string;
  /**
   * The ID of the token
   * @format date-time
   * @example "nfts"
   */
  tokenId: string;
}

export type GetNftMetadataByTokenIdData = ListNFTResponseDto;

export interface GetErc20BurnsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20BurnsData = ERC20TokenBurnResponseDto;

export interface GetErc20BurnsByBlockParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * The block number or block hash
   * @example "17639088"
   */
  blockNumberOrHash: string;
}

export type GetErc20BurnsByBlockData = ERC20TokenBurnResponseDto;

export interface GetErc20BurnsByBlockRangeParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20BurnsByBlockRangeData = ERC20TokenBurnResponseDto;

export interface GetErc20BurnsByTimeRangeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20BurnsByTimeRangeData = ERC20TokenBurnResponseDto;

export interface GetErc20BurnsByTxHashParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * Transaction hash
   * @example "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
   */
  transactionHash: string;
}

export type GetErc20BurnsByTxHashData = ERC20TokenBurnResponseDto;

export interface GetErc20TokenMetadataParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /** The address of contract */
  address: string;
}

export type GetErc20TokenMetadataData = ERC20TokenMetadataResponseDto;

export interface GetErc20MetadataBySymbolParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  symbol: string;
}

export type GetErc20MetadataBySymbolData = ERC20TokenMetadataResponseDto;

export interface GetErc20MintsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20MintsData = ERC20TokenMintResponseDto;

export interface GetErc20MintsByBlockParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * The block number or block hash
   * @example "17639088"
   */
  blockNumberOrHash: string;
}

export type GetErc20MintsByBlockData = ERC20TokenMintResponseDto;

export interface GetErc20MintsByBlockRangeParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20MintsByBlockRangeData = ERC20TokenMintResponseDto;

export interface GetErc20MintsByTimeRangeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20MintsByTimeRangeData = ERC20TokenMintResponseDto;

export interface GetErc20MintsByTransactionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * Transaction hash
   * @example "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
   */
  transactionHash: string;
}

export type GetErc20MintsByTransactionData = ERC20TokenMintResponseDto;

export interface GetErc20TransfersParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20TransfersData = ERC20TokenTransferResponseDto;

export interface GetErc20TransfersByBlockParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * The block number or block hash
   * @example "17639088"
   */
  blockNumberOrHash: string;
}

export type GetErc20TransfersByBlockData = ERC20TokenTransferResponseDto;

export interface GetErc20TransfersByBlockRangeParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20TransfersByBlockRangeData = ERC20TokenTransferResponseDto;

export interface GetErc20TransfersByTimeRangeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20TransfersByTimeRangeData = ERC20TokenTransferResponseDto;

export interface GetErc20TransfersByTransactionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * Transaction hash
   * @example "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
   */
  transactionHash: string;
}

export type GetErc20TransfersByTransactionData = ERC20TokenTransferResponseDto;

export interface GetErc20ApprovalsParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20ApprovalsData = ERC20TokenApprovalResponseDto;

export interface GetErc20ApprovalsByBlockParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * The block number or block hash
   * @example "17639088"
   */
  blockNumberOrHash: string;
}

export type GetErc20ApprovalsByBlockData = ERC20TokenApprovalResponseDto;

export interface GetErc20ApprovalsByBlockRangeParams {
  /**
   * The minimum block number from which to get the transfers
   * @example 999
   */
  from_block: number;
  /**
   * The maximum block number from which to get the transfers
   * @example 1000
   */
  to_block: number;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20ApprovalsByBlockRangeData = ERC20TokenApprovalResponseDto;

export interface GetErc20ApprovalsByTimeRangeParams {
  /** The start date in seconds or a date string (any format that is accepted by momentjs) */
  from_date: string;
  /** The end date in seconds or a date string (any format that is accepted by momentjs) */
  to_date: string;
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
}

export type GetErc20ApprovalsByTimeRangeData = ERC20TokenApprovalResponseDto;

export interface GetErc20ApprovalsByTransactionParams {
  /** The cursor returned in the previous response (used for getting the next page). */
  cursor?: string;
  /** Number of items returned, default: 20 */
  limit?: number;
  /**
   * Transaction hash
   * @example "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741"
   */
  transactionHash: string;
}

export type GetErc20ApprovalsByTransactionData = ERC20TokenApprovalResponseDto;
