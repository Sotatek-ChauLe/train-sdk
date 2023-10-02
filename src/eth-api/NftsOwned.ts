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

import { GetNftOwnedByAddressData, GetNftOwnedByAddressParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class NftsOwned<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get NFTs owned by address.(Get NFTs by wallet)
   *
   * @tags Get NFTs
   * @name GetNftOwnedByAddress
   * @summary Get NFTs owned by address.(Get NFTs by wallet)
   * @request GET:/v1/nfts-owned/{wallet_address}
   * @secure
   * @response `200` `GetNftOwnedByAddressData` Successful
   */
  getNftOwnedByAddress = ({ walletAddress, ...query }: GetNftOwnedByAddressParams, params: RequestParams = {}) =>
    this.request<GetNftOwnedByAddressData, any>({
      path: `/v1/nfts-owned/${walletAddress}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
