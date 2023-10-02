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
  GetEventsByBlockNumberData,
  GetEventsByTransactionHashData,
  GetEventsByTransactionHashError,
  GetEventsData,
  GetEventsFromBlockToBlockData,
  GetEventsFromBlockToBlockParams,
  GetEventsFromTimeToTimeData,
  GetEventsFromTimeToTimeParams,
  GetEventsParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Events<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get events
   *
   * @tags Get events
   * @name GetEvents
   * @summary Get events
   * @request GET:/v1/events
   * @secure
   * @response `200` `GetEventsData` 200 Returns the events and corresponding date and timestamp
   */
  getEvents = (query: GetEventsParams, params: RequestParams = {}) =>
    this.request<GetEventsData, any>({
      path: `/v1/events`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get events from block to block.
   *
   * @tags Get events
   * @name GetEventsFromBlockToBlock
   * @summary Get events from block to block
   * @request GET:/v1/events/block-to-block
   * @secure
   * @response `200` `GetEventsFromBlockToBlockData` 200 Returns the events and corresponding date and timestamp
   */
  getEventsFromBlockToBlock = (query: GetEventsFromBlockToBlockParams, params: RequestParams = {}) =>
    this.request<GetEventsFromBlockToBlockData, any>({
      path: `/v1/events/block-to-block`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get events from a time to a time.
   *
   * @tags Get events
   * @name GetEventsFromTimeToTime
   * @summary Get events from a time to a time
   * @request GET:/v1/events/date-to-date
   * @secure
   * @response `200` `GetEventsFromTimeToTimeData` 200 Returns the events and corresponding date and timestamp
   */
  getEventsFromTimeToTime = (query: GetEventsFromTimeToTimeParams, params: RequestParams = {}) =>
    this.request<GetEventsFromTimeToTimeData, any>({
      path: `/v1/events/date-to-date`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Return events of a transaction.
   *
   * @tags Get events
   * @name GetEventsByTransactionHash
   * @summary Get events by transaction
   * @request GET:/v1/events/tx/{transaction_hash}
   * @secure
   * @response `200` `GetEventsByTransactionHashData` Successful
   * @response `400` `ErrorMessageDto` Bad request
   */
  getEventsByTransactionHash = (transactionHash: string, params: RequestParams = {}) =>
    this.request<GetEventsByTransactionHashData, GetEventsByTransactionHashError>({
      path: `/v1/events/tx/${transactionHash}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description Get events by block.
   *
   * @tags Get events
   * @name GetEventsByBlockNumber
   * @summary Get events by block
   * @request GET:/v1/events/block/{block_number_or_hash}
   * @secure
   * @response `200` `GetEventsByBlockNumberData` Successful
   */
  getEventsByBlockNumber = (blockNumberOrHash: string, params: RequestParams = {}) =>
    this.request<GetEventsByBlockNumberData, any>({
      path: `/v1/events/block/${blockNumberOrHash}`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
