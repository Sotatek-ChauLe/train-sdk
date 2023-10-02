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

import { GetNftMetadataByTokenIdData, GetNftMetadataByTokenIdParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class NftMetadata<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get NFT metadata by token id
   *
   * @tags Get NFTs
   * @name GetNftMetadataByTokenId
   * @summary Get NFT metadata by token id
   * @request GET:/v1/nft-metadata/{address}/{token_id}
   * @secure
   * @response `200` `GetNftMetadataByTokenIdData` Successful
   */
  getNftMetadataByTokenId = (
    { address, tokenId, ...query }: GetNftMetadataByTokenIdParams,
    params: RequestParams = {},
  ) =>
    this.request<GetNftMetadataByTokenIdData, any>({
      path: `/v1/nft-metadata/${address}/${tokenId}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
