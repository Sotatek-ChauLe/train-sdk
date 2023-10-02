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
  DecodeEventWithAbiData,
  DecodeLogBodyDto,
  GetDecodedEventsByBlockNumberData,
  GetDecodedEventsByTxHashData,
  GetDecodedEventsData,
  GetDecodedEventsFromBlockToBlockData,
  GetDecodedEventsFromBlockToBlockParams,
  GetDecodedEventsFromTimeToTimeData,
  GetDecodedEventsFromTimeToTimeParams,
  GetDecodedEventsParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class DecodedEvents<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get decoded events.
   *
   * @tags Get decoded events
   * @name GetDecodedEvents
   * @summary Get decoded events
   * @request GET:/v1/decoded-events
   * @secure
   * @response `200` `GetDecodedEventsData` 200 Returns the decoded events and corresponding date and timestamp
   */
  getDecodedEvents = (query: GetDecodedEventsParams, params: RequestParams = {}) =>
    this.request<GetDecodedEventsData, any>({
      path: `/v1/decoded-events`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get decoded events  from a block to a block.
   *
   * @tags Get decoded events
   * @name GetDecodedEventsFromBlockToBlock
   * @summary Get decoded events  from a block to a block
   * @request GET:/v1/decoded-events/block-to-block
   * @secure
   * @response `200` `GetDecodedEventsFromBlockToBlockData` 200 Returns the decoded events and corresponding date and timestamp
   */
  getDecodedEventsFromBlockToBlock = (query: GetDecodedEventsFromBlockToBlockParams, params: RequestParams = {}) =>
    this.request<GetDecodedEventsFromBlockToBlockData, any>({
      path: `/v1/decoded-events/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get decoded events from a time to a time.
   *
   * @tags Get decoded events
   * @name GetDecodedEventsFromTimeToTime
   * @summary Get decoded events from a time to a time
   * @request GET:/v1/decoded-events/date-to-date
   * @secure
   * @response `200` `GetDecodedEventsFromTimeToTimeData` 200 Returns the decoded events and corresponding date and timestamp
   */
  getDecodedEventsFromTimeToTime = (query: GetDecodedEventsFromTimeToTimeParams, params: RequestParams = {}) =>
    this.request<GetDecodedEventsFromTimeToTimeData, any>({
      path: `/v1/decoded-events/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Return decoded events of a transaction.
   *
   * @tags Get decoded events
   * @name GetDecodedEventsByTxHash
   * @summary Get decoded events by transaction
   * @request GET:/v1/decoded-events/blocks/{block_number}
   * @secure
   * @response `200` `GetDecodedEventsByTxHashData` Successful
   */
  getDecodedEventsByTxHash = (blockNumber: number, params: RequestParams = {}) =>
    this.request<GetDecodedEventsByTxHashData, any>({
      path: `/v1/decoded-events/blocks/${blockNumber}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description Get decoded events by block.
   *
   * @tags Get decoded events
   * @name GetDecodedEventsByBlockNumber
   * @summary Get decoded events by block
   * @request GET:/v1/decoded-events/{transaction_hash}
   * @secure
   * @response `200` `GetDecodedEventsByBlockNumberData` Successful
   */
  getDecodedEventsByBlockNumber = (transactionHash: string, params: RequestParams = {}) =>
    this.request<GetDecodedEventsByBlockNumberData, any>({
      path: `/v1/decoded-events/${transactionHash}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description Return event decoded with abi.
   *
   * @tags Get decoded events
   * @name DecodeEventWithAbi
   * @summary Decode event with abi
   * @request POST:/v1/decoded-events/{transaction_hash}
   * @secure
   * @response `200` `DecodeEventWithAbiData` Successful
   */
  decodeEventWithAbi = (transactionHash: string, data: DecodeLogBodyDto, params: RequestParams = {}) =>
    this.request<DecodeEventWithAbiData, any>({
      path: `/v1/decoded-events/${transactionHash}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
