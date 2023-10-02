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

import {
  GetErc20ApprovalsByBlockData,
  GetErc20ApprovalsByBlockParams,
  GetErc20ApprovalsByBlockRangeData,
  GetErc20ApprovalsByBlockRangeParams,
  GetErc20ApprovalsByTimeRangeData,
  GetErc20ApprovalsByTimeRangeParams,
  GetErc20ApprovalsByTransactionData,
  GetErc20ApprovalsByTransactionParams,
  GetErc20ApprovalsData,
  GetErc20ApprovalsParams,
  GetErc20BurnsByBlockData,
  GetErc20BurnsByBlockParams,
  GetErc20BurnsByBlockRangeData,
  GetErc20BurnsByBlockRangeParams,
  GetErc20BurnsByTimeRangeData,
  GetErc20BurnsByTimeRangeParams,
  GetErc20BurnsByTxHashData,
  GetErc20BurnsByTxHashParams,
  GetErc20BurnsData,
  GetErc20BurnsParams,
  GetErc20MetadataBySymbolData,
  GetErc20MetadataBySymbolParams,
  GetErc20MintsByBlockData,
  GetErc20MintsByBlockParams,
  GetErc20MintsByBlockRangeData,
  GetErc20MintsByBlockRangeParams,
  GetErc20MintsByTimeRangeData,
  GetErc20MintsByTimeRangeParams,
  GetErc20MintsByTransactionData,
  GetErc20MintsByTransactionParams,
  GetErc20MintsData,
  GetErc20MintsParams,
  GetErc20TokenMetadataData,
  GetErc20TokenMetadataParams,
  GetErc20TransfersByBlockData,
  GetErc20TransfersByBlockParams,
  GetErc20TransfersByBlockRangeData,
  GetErc20TransfersByBlockRangeParams,
  GetErc20TransfersByTimeRangeData,
  GetErc20TransfersByTimeRangeParams,
  GetErc20TransfersByTransactionData,
  GetErc20TransfersByTransactionParams,
  GetErc20TransfersData,
  GetErc20TransfersParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Erc20<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get ERC20 token burns.
   *
   * @tags Get token burns
   * @name GetErc20Burns
   * @summary Get ERC20 token burns
   * @request GET:/v1/erc20/burns
   * @secure
   * @response `200` `GetErc20BurnsData` Successful
   */
  getErc20Burns = (query: GetErc20BurnsParams, params: RequestParams = {}) =>
    this.request<GetErc20BurnsData, any>({
      path: `/v1/erc20/burns`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the token burns for a given block.
   *
   * @tags Get token burns
   * @name GetErc20BurnsByBlock
   * @summary Get ERC20 token burns by block
   * @request GET:/v1/erc20/burns/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetErc20BurnsByBlockData` Successful
   */
  getErc20BurnsByBlock = ({ blockNumberOrHash, ...query }: GetErc20BurnsByBlockParams, params: RequestParams = {}) =>
    this.request<GetErc20BurnsByBlockData, any>({
      path: `/v1/erc20/burns/blocks/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token burns from a block to a block
   *
   * @tags Get token burns
   * @name GetErc20BurnsByBlockRange
   * @summary Get ERC20 token burns from a block to a block
   * @request GET:/v1/erc20/burns/block-to-block
   * @secure
   * @response `200` `GetErc20BurnsByBlockRangeData` Successful
   */
  getErc20BurnsByBlockRange = (query: GetErc20BurnsByBlockRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20BurnsByBlockRangeData, any>({
      path: `/v1/erc20/burns/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token burns from a time to a time.
   *
   * @tags Get token burns
   * @name GetErc20BurnsByTimeRange
   * @summary Get ERC20 token burns from a time to a time
   * @request GET:/v1/erc20/burns/date-to-date
   * @secure
   * @response `200` `GetErc20BurnsByTimeRangeData` Successful
   */
  getErc20BurnsByTimeRange = (query: GetErc20BurnsByTimeRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20BurnsByTimeRangeData, any>({
      path: `/v1/erc20/burns/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the token burns for given transaction.
   *
   * @tags Get token burns
   * @name GetErc20BurnsByTxHash
   * @summary Get ERC20 token burns by transaction
   * @request GET:/v1/erc20/burns/tx/{transaction_hash}
   * @secure
   * @response `200` `GetErc20BurnsByTxHashData` Successful
   */
  getErc20BurnsByTxHash = ({ transactionHash, ...query }: GetErc20BurnsByTxHashParams, params: RequestParams = {}) =>
    this.request<GetErc20BurnsByTxHashData, any>({
      path: `/v1/erc20/burns/tx/${transactionHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the metadata for a given token contract address (name, symbol, decimals, logo).
   *
   * @tags Get token metadata
   * @name GetErc20TokenMetadata
   * @summary Get ERC20 token metadata by contract
   * @request GET:/v1/erc20/metadata/{address}
   * @secure
   * @response `200` `GetErc20TokenMetadataData` Successful
   */
  getErc20TokenMetadata = ({ address, ...query }: GetErc20TokenMetadataParams, params: RequestParams = {}) =>
    this.request<GetErc20TokenMetadataData, any>({
      path: `/v1/erc20/metadata/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the metadata for a given symbol (name, symbol, decimals, logo).
   *
   * @tags Get token metadata
   * @name GetErc20MetadataBySymbol
   * @summary Get ERC20 token metadata by symbol
   * @request GET:/v1/erc20/metadata/symbol/{symbol}
   * @secure
   * @response `200` `GetErc20MetadataBySymbolData` Successful
   */
  getErc20MetadataBySymbol = ({ symbol, ...query }: GetErc20MetadataBySymbolParams, params: RequestParams = {}) =>
    this.request<GetErc20MetadataBySymbolData, any>({
      path: `/v1/erc20/metadata/symbol/${symbol}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token mint.
   *
   * @tags Get token mints
   * @name GetErc20Mints
   * @summary Get ERC20 token mint
   * @request GET:/v1/erc20/mints
   * @secure
   * @response `200` `GetErc20MintsData` Successful
   */
  getErc20Mints = (query: GetErc20MintsParams, params: RequestParams = {}) =>
    this.request<GetErc20MintsData, any>({
      path: `/v1/erc20/mints`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token mints by block
   *
   * @tags Get token mints
   * @name GetErc20MintsByBlock
   * @summary Get ERC20 token mints by block
   * @request GET:/v1/erc20/mints/block/{block_number_or_hash}
   * @secure
   * @response `200` `GetErc20MintsByBlockData` Successful
   */
  getErc20MintsByBlock = ({ blockNumberOrHash, ...query }: GetErc20MintsByBlockParams, params: RequestParams = {}) =>
    this.request<GetErc20MintsByBlockData, any>({
      path: `/v1/erc20/mints/block/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token mints from a block to a block
   *
   * @tags Get token mints
   * @name GetErc20MintsByBlockRange
   * @summary Get ERC20 token mints from a block to a block
   * @request GET:/v1/erc20/mints/block-to-block
   * @secure
   * @response `200` `GetErc20MintsByBlockRangeData` Successful
   */
  getErc20MintsByBlockRange = (query: GetErc20MintsByBlockRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20MintsByBlockRangeData, any>({
      path: `/v1/erc20/mints/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token mints from a time to a time
   *
   * @tags Get token mints
   * @name GetErc20MintsByTimeRange
   * @summary Get ERC20 token mints from a time to a time
   * @request GET:/v1/erc20/mints/date-to-date
   * @secure
   * @response `200` `GetErc20MintsByTimeRangeData` Successful
   */
  getErc20MintsByTimeRange = (query: GetErc20MintsByTimeRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20MintsByTimeRangeData, any>({
      path: `/v1/erc20/mints/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the token mints for given transaction.
   *
   * @tags Get token mints
   * @name GetErc20MintsByTransaction
   * @summary Get ERC20 token mints by transaction
   * @request GET:/v1/erc20/mints/tx/{transaction_hash}
   * @secure
   * @response `200` `GetErc20MintsByTransactionData` Successful
   */
  getErc20MintsByTransaction = (
    { transactionHash, ...query }: GetErc20MintsByTransactionParams,
    params: RequestParams = {},
  ) =>
    this.request<GetErc20MintsByTransactionData, any>({
      path: `/v1/erc20/mints/tx/${transactionHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token transfer.
   *
   * @tags Get token transfers
   * @name GetErc20Transfers
   * @summary Get ERC20 token transfer
   * @request GET:/v1/erc20/transfers
   * @secure
   * @response `200` `GetErc20TransfersData` Successful
   */
  getErc20Transfers = (query: GetErc20TransfersParams, params: RequestParams = {}) =>
    this.request<GetErc20TransfersData, any>({
      path: `/v1/erc20/transfers`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token transfers by block
   *
   * @tags Get token transfers
   * @name GetErc20TransfersByBlock
   * @summary Get ERC20 token transfers by block
   * @request GET:/v1/erc20/transfers/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetErc20TransfersByBlockData` Successful
   */
  getErc20TransfersByBlock = (
    { blockNumberOrHash, ...query }: GetErc20TransfersByBlockParams,
    params: RequestParams = {},
  ) =>
    this.request<GetErc20TransfersByBlockData, any>({
      path: `/v1/erc20/transfers/blocks/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token transfers from a block to a block
   *
   * @tags Get token transfers
   * @name GetErc20TransfersByBlockRange
   * @summary Get ERC20 token transfers from a block to a block
   * @request GET:/v1/erc20/transfers/block-to-block
   * @secure
   * @response `200` `GetErc20TransfersByBlockRangeData` Successful
   */
  getErc20TransfersByBlockRange = (query: GetErc20TransfersByBlockRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20TransfersByBlockRangeData, any>({
      path: `/v1/erc20/transfers/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token transfers from a time to a time.
   *
   * @tags Get token transfers
   * @name GetErc20TransfersByTimeRange
   * @summary Get ERC20 token transfers from a time to a time
   * @request GET:/v1/erc20/transfers/date-to-date
   * @secure
   * @response `200` `GetErc20TransfersByTimeRangeData` Successful
   */
  getErc20TransfersByTimeRange = (query: GetErc20TransfersByTimeRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20TransfersByTimeRangeData, any>({
      path: `/v1/erc20/transfers/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token transfers by transaction
   *
   * @tags Get token transfers
   * @name GetErc20TransfersByTransaction
   * @summary Get ERC20 token transfers by transaction
   * @request GET:/v1/erc20/transfers/tx/{transaction_hash}
   * @secure
   * @response `200` `GetErc20TransfersByTransactionData` Successful
   */
  getErc20TransfersByTransaction = (
    { transactionHash, ...query }: GetErc20TransfersByTransactionParams,
    params: RequestParams = {},
  ) =>
    this.request<GetErc20TransfersByTransactionData, any>({
      path: `/v1/erc20/transfers/tx/${transactionHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the token approvals.
   *
   * @tags Get token approvals
   * @name GetErc20Approvals
   * @summary Get ERC20 token approvals
   * @request GET:/v1/erc20/approvals
   * @secure
   * @response `200` `GetErc20ApprovalsData` Successful
   */
  getErc20Approvals = (query: GetErc20ApprovalsParams, params: RequestParams = {}) =>
    this.request<GetErc20ApprovalsData, any>({
      path: `/v1/erc20/approvals`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the token approvals for a given block.
   *
   * @tags Get token approvals
   * @name GetErc20ApprovalsByBlock
   * @summary Get ERC20 token approvals by block
   * @request GET:/v1/erc20/approvals/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetErc20ApprovalsByBlockData` Successful
   */
  getErc20ApprovalsByBlock = (
    { blockNumberOrHash, ...query }: GetErc20ApprovalsByBlockParams,
    params: RequestParams = {},
  ) =>
    this.request<GetErc20ApprovalsByBlockData, any>({
      path: `/v1/erc20/approvals/blocks/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token approvals from a block to a block
   *
   * @tags Get token approvals
   * @name GetErc20ApprovalsByBlockRange
   * @summary Get ERC20 token approvals from a block to a block
   * @request GET:/v1/erc20/approvals/block-to-block
   * @secure
   * @response `200` `GetErc20ApprovalsByBlockRangeData` Successful
   */
  getErc20ApprovalsByBlockRange = (query: GetErc20ApprovalsByBlockRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20ApprovalsByBlockRangeData, any>({
      path: `/v1/erc20/approvals/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get ERC20 token approvals from a time to a time
   *
   * @tags Get token approvals
   * @name GetErc20ApprovalsByTimeRange
   * @summary Get ERC20 token approvals from a time to a time
   * @request GET:/v1/erc20/approvals/date-to-date
   * @secure
   * @response `200` `GetErc20ApprovalsByTimeRangeData` Successful
   */
  getErc20ApprovalsByTimeRange = (query: GetErc20ApprovalsByTimeRangeParams, params: RequestParams = {}) =>
    this.request<GetErc20ApprovalsByTimeRangeData, any>({
      path: `/v1/erc20/approvals/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get the token approvals for given transaction.
   *
   * @tags Get token approvals
   * @name GetErc20ApprovalsByTransaction
   * @summary Get ERC20 token approvals by transaction
   * @request GET:/v1/erc20/approvals/tx/{transaction_hash}
   * @secure
   * @response `200` `GetErc20ApprovalsByTransactionData` Successful
   */
  getErc20ApprovalsByTransaction = (
    { transactionHash, ...query }: GetErc20ApprovalsByTransactionParams,
    params: RequestParams = {},
  ) =>
    this.request<GetErc20ApprovalsByTransactionData, any>({
      path: `/v1/erc20/approvals/tx/${transactionHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
