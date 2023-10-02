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

import { GetCollectionsData, GetCollectionsParams, GetNftCollectionMetadataData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Collections<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get list collections.
   *
   * @tags Get NFT collections
   * @name GetCollections
   * @summary Get Collections
   * @request GET:/v1/collections
   * @secure
   * @response `200` `GetCollectionsData` Successful
   */
  getCollections = (query: GetCollectionsParams, params: RequestParams = {}) =>
    this.request<GetCollectionsData, any>({
      path: `/v1/collections`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT collection metadata.
   *
   * @tags Get NFT collections
   * @name GetNftCollectionMetadata
   * @summary Get NFT collection metadata
   * @request GET:/v1/collections/{address}/metadata
   * @secure
   * @response `200` `GetNftCollectionMetadataData` Successful
   */
  getNftCollectionMetadata = (address: string, params: RequestParams = {}) =>
    this.request<GetNftCollectionMetadataData, any>({
      path: `/v1/collections/${address}/metadata`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
