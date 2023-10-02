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
  GetNftTransfersByBlockData,
  GetNftTransfersByBlockParams,
  GetNftTransfersByCollectionData,
  GetNftTransfersByCollectionParams,
  GetNftTransfersByTokenIdData,
  GetNftTransfersByTokenIdParams,
  GetNftTransfersByTransactionData,
  GetNftTransfersByTransactionParams,
  GetNftTransfersData,
  GetNftTransfersFromBlockToBlockData,
  GetNftTransfersFromBlockToBlockParams,
  GetNftTransfersOfCollectionByBlockData,
  GetNftTransfersOfCollectionByBlockParams,
  GetNftTransfersOfCollectionByTimeRangeData,
  GetNftTransfersOfCollectionByTimeRangeParams,
  GetNftTransfersOfCollectionByTransactionData,
  GetNftTransfersOfCollectionByTransactionParams,
  GetNftTransfersOfCollectionFromBlockToBlockData,
  GetNftTransfersOfCollectionFromBlockToBlockParams,
  GetNftTransfersParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class NftTransfers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get list NFT transfers by query.
   *
   * @tags Get NFT transfers
   * @name GetNftTransfers
   * @summary Get NFT transfers
   * @request GET:/v1/nft-transfers
   * @secure
   * @response `200` `GetNftTransfersData` Successful
   */
  getNftTransfers = (query: GetNftTransfersParams, params: RequestParams = {}) =>
    this.request<GetNftTransfersData, any>({
      path: `/v1/nft-transfers`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers by block
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersByBlock
   * @summary Get NFT transfers by block
   * @request GET:/v1/nft-transfers/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetNftTransfersByBlockData` Successful
   */
  getNftTransfersByBlock = (
    { blockNumberOrHash, ...query }: GetNftTransfersByBlockParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersByBlockData, any>({
      path: `/v1/nft-transfers/blocks/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers from a block to a block
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersFromBlockToBlock
   * @summary Get NFT transfers from a block to a block
   * @request GET:/v1/nft-transfers/block-to-block
   * @secure
   * @response `200` `GetNftTransfersFromBlockToBlockData` Successful
   */
  getNftTransfersFromBlockToBlock = (query: GetNftTransfersFromBlockToBlockParams, params: RequestParams = {}) =>
    this.request<GetNftTransfersFromBlockToBlockData, any>({
      path: `/v1/nft-transfers/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers by transaction
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersByTransaction
   * @summary Get NFT transfers by transaction
   * @request GET:/v1/nft-transfers/tx/{transaction_hash}
   * @secure
   * @response `200` `GetNftTransfersByTransactionData` Successful
   */
  getNftTransfersByTransaction = (
    { transactionHash, ...query }: GetNftTransfersByTransactionParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersByTransactionData, any>({
      path: `/v1/nft-transfers/tx/${transactionHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers by collection
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersByCollection
   * @summary Get NFT transfers by collection
   * @request GET:/v1/nft-transfers/{address}
   * @secure
   * @response `200` `GetNftTransfersByCollectionData` Successful
   */
  getNftTransfersByCollection = (
    { address, ...query }: GetNftTransfersByCollectionParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersByCollectionData, any>({
      path: `/v1/nft-transfers/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFTs transfers of collections from block to block
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersOfCollectionFromBlockToBlock
   * @summary Get NFTs transfers of collections from block to block
   * @request GET:/v1/nft-transfers/{address}/block-to-block
   * @secure
   * @response `200` `GetNftTransfersOfCollectionFromBlockToBlockData`
   */
  getNftTransfersOfCollectionFromBlockToBlock = (
    { address, ...query }: GetNftTransfersOfCollectionFromBlockToBlockParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersOfCollectionFromBlockToBlockData, any>({
      path: `/v1/nft-transfers/${address}/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers of collections from time to time
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersOfCollectionByTimeRange
   * @summary Get NFT transfers of collections from time to time
   * @request GET:/v1/nft-transfers/{address}/date-to-date
   * @secure
   * @response `200` `GetNftTransfersOfCollectionByTimeRangeData` Successful
   */
  getNftTransfersOfCollectionByTimeRange = (
    { address, ...query }: GetNftTransfersOfCollectionByTimeRangeParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersOfCollectionByTimeRangeData, any>({
      path: `/v1/nft-transfers/${address}/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers by token id
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersByTokenId
   * @summary Get NFT transfers by token id
   * @request GET:/v1/nft-transfers/{address}/{token_id}
   * @secure
   * @response `200` `GetNftTransfersByTokenIdData` Successful
   */
  getNftTransfersByTokenId = (
    { address, tokenId, ...query }: GetNftTransfersByTokenIdParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersByTokenIdData, any>({
      path: `/v1/nft-transfers/${address}/${tokenId}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers of collection by block
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersOfCollectionByBlock
   * @summary Get NFT transfers of collection by block
   * @request GET:/v1/nft-transfers/{address}/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetNftTransfersOfCollectionByBlockData` Successful
   */
  getNftTransfersOfCollectionByBlock = (
    { address, blockNumberOrHash, ...query }: GetNftTransfersOfCollectionByBlockParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersOfCollectionByBlockData, any>({
      path: `/v1/nft-transfers/${address}/blocks/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT transfers of collection by transaction
   *
   * @tags Get NFT transfers
   * @name GetNftTransfersOfCollectionByTransaction
   * @summary Get NFT transfers of collection by transaction
   * @request GET:/v1/nft-transfers/{address}/tx/{transaction_hash}
   * @secure
   * @response `200` `GetNftTransfersOfCollectionByTransactionData` Successful
   */
  getNftTransfersOfCollectionByTransaction = (
    { address, transactionHash, ...query }: GetNftTransfersOfCollectionByTransactionParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftTransfersOfCollectionByTransactionData, any>({
      path: `/v1/nft-transfers/${address}/tx/${transactionHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
