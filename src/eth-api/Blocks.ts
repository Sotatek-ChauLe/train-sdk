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
  GetBlockByHashData,
  GetBlockByHashParams,
  GetBlockToBlockData,
  GetBlockToBlockParams,
  GetBlocksData,
  GetBlocksFromTimeToTimeData,
  GetBlocksFromTimeToTimeParams,
  GetBlocksParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Blocks<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get blocks
   *
   * @tags Get blocks
   * @name GetBlocks
   * @summary Get blocks
   * @request GET:/v1/blocks
   * @secure
   * @response `200` `GetBlocksData` 200 Returns the blocks
   */
  getBlocks = (query: GetBlocksParams, params: RequestParams = {}) =>
    this.request<GetBlocksData, any>({
      path: `/v1/blocks`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get blocks from a number to a number
   *
   * @tags Get blocks
   * @name GetBlockToBlock
   * @summary Get blocks from number to number
   * @request GET:/v1/blocks/number-to-number
   * @secure
   * @response `200` `GetBlockToBlockData` 200 Returns the block number and corresponding date and timestamp
   */
  getBlockToBlock = (query: GetBlockToBlockParams, params: RequestParams = {}) =>
    this.request<GetBlockToBlockData, any>({
      path: `/v1/blocks/number-to-number`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get blocks from a time to a time
   *
   * @tags Get blocks
   * @name GetBlocksFromTimeToTime
   * @summary Get blocks from time to time
   * @request GET:/v1/blocks/date-to-date
   * @secure
   * @response `200` `GetBlocksFromTimeToTimeData` 200 Returns the block number and corresponding date and timestamp
   */
  getBlocksFromTimeToTime = (query: GetBlocksFromTimeToTimeParams, params: RequestParams = {}) =>
    this.request<GetBlocksFromTimeToTimeData, any>({
      path: `/v1/blocks/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get block by hash
   *
   * @tags Get blocks
   * @name GetBlockByHash
   * @summary Get a block by hash
   * @request GET:/v1/blocks/{block_number_or_hash}
   * @secure
   * @response `200` `GetBlockByHashData` Successful
   */
  getBlockByHash = ({ blockNumberOrHash, ...query }: GetBlockByHashParams, params: RequestParams = {}) =>
    this.request<GetBlockByHashData, any>({
      path: `/v1/blocks/${blockNumberOrHash}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
