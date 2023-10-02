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
  GetNftOwnerByTokenIdData,
  GetNftOwnersByCollectionData,
  GetNftOwnersByCollectionParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class NftOwners<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get NFT owners by collection
   *
   * @tags Get NFTs
   * @name GetNftOwnersByCollection
   * @summary Get NFT owners by collection
   * @request GET:/v1/nft-owners/{address}
   * @secure
   * @response `200` `GetNftOwnersByCollectionData` Successful
   */
  getNftOwnersByCollection = ({ address, ...query }: GetNftOwnersByCollectionParams, params: RequestParams = {}) =>
    this.request<GetNftOwnersByCollectionData, any>({
      path: `/v1/nft-owners/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Get NFT owner by token id
   *
   * @tags Get NFTs
   * @name GetNftOwnerByTokenId
   * @summary Get NFT owner by token id
   * @request GET:/v1/nft-owners/{address}/{token_id}
   * @secure
   * @response `200` `GetNftOwnerByTokenIdData` Successful
   */
  getNftOwnerByTokenId = (address: string, tokenId: string, params: RequestParams = {}) =>
    this.request<GetNftOwnerByTokenIdData, any>({
      path: `/v1/nft-owners/${address}/${tokenId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
