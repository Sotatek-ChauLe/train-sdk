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
  GetTransactionByBlockNumberData,
  GetTransactionByTransactionHashData,
  GetTransactionsData,
  GetTransactionsFromBlockToBlockData,
  GetTransactionsFromBlockToBlockParams,
  GetTransactionsFromTimeToTimeData,
  GetTransactionsFromTimeToTimeParams,
  GetTransactionsParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Transactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get transactions
   *
   * @tags Get transactions
   * @name GetTransactions
   * @summary Get transactions
   * @request GET:/v1/transactions
   * @secure
   * @response `200` `GetTransactionsData` 200 Returns the block number and corresponding date and timestamp
   */
  getTransactions = (query: GetTransactionsParams, params: RequestParams = {}) =>
    this.request<GetTransactionsData, any>({
      path: `/v1/transactions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get transactions from a block to a block
   *
   * @tags Get transactions
   * @name GetTransactionsFromBlockToBlock
   * @summary Get transactions from block to block
   * @request GET:/v1/transactions/block-to-block
   * @secure
   * @response `200` `GetTransactionsFromBlockToBlockData` 200 Returns the block number and corresponding date and timestamp
   */
  getTransactionsFromBlockToBlock = (query: GetTransactionsFromBlockToBlockParams, params: RequestParams = {}) =>
    this.request<GetTransactionsFromBlockToBlockData, any>({
      path: `/v1/transactions/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get transactions from a time to a time
   *
   * @tags Get transactions
   * @name GetTransactionsFromTimeToTime
   * @summary Get transactions from time to time
   * @request GET:/v1/transactions/date-to-date
   * @secure
   * @response `200` `GetTransactionsFromTimeToTimeData` 200 Returns the block number and corresponding date and timestamp
   */
  getTransactionsFromTimeToTime = (query: GetTransactionsFromTimeToTimeParams, params: RequestParams = {}) =>
    this.request<GetTransactionsFromTimeToTimeData, any>({
      path: `/v1/transactions/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get transaction by hash
   *
   * @tags Get transactions
   * @name GetTransactionByTransactionHash
   * @summary Get transaction by hash
   * @request GET:/v1/transactions/tx/{transaction_hash}
   * @secure
   * @response `200` `GetTransactionByTransactionHashData` Successful
   */
  getTransactionByTransactionHash = (transactionHash: string, params: RequestParams = {}) =>
    this.request<GetTransactionByTransactionHashData, any>({
      path: `/v1/transactions/tx/${transactionHash}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description Get transaction by block
   *
   * @tags Get transactions
   * @name GetTransactionByBlockNumber
   * @summary Get transaction by block
   * @request GET:/v1/transactions/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetTransactionByBlockNumberData` Successful
   */
  getTransactionByBlockNumber = (blockNumberOrHash: string, params: RequestParams = {}) =>
    this.request<GetTransactionByBlockNumberData, any>({
      path: `/v1/transactions/blocks/${blockNumberOrHash}`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
