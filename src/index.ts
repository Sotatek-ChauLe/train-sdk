import { EthApi } from "./eth-api";
import { ApiConfig, HttpClient } from "./eth-api/http-client";

export interface BlocklensType<SecurityDataType extends unknown>
  extends ApiConfig<SecurityDataType> {
  apiKey: string;
}

export class Blocklens<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  constructor(
    { apiKey, ...axiosConfig }: BlocklensType<SecurityDataType> = { apiKey: "" }
  ) {
    const axiosConfigParams: ApiConfig<SecurityDataType> = {
      headers: { ["X-API-KEY"]: apiKey },
      ...axiosConfig,
    };
    super(axiosConfigParams);
  }

  init({ apiKey }: BlocklensType<SecurityDataType>) {
    this.instance.defaults.headers["X-API-KEY"] = apiKey;
  }

  ETH_MAINNET = {
    ...new EthApi().apis,
  };
}

// export default class Blocklens<SecurityDataType extends unknown> {
//   ETH_MAINNET: EthApi<SecurityDataType>["apis"];
//   constructor(
//     { apiKey, ...axiosConfig }: BlocklensType<SecurityDataType> = { apiKey: "" }
//   ) {
//     this.ETH_MAINNET = new EthApi({ apiKey, ...axiosConfig }).apis;
//   }

//   init({ apiKey, ...axiosConfig }: BlocklensType<SecurityDataType>) {
//     this.ETH_MAINNET = new EthApi({ apiKey, ...axiosConfig }).apis;
//   }
// }

// new Blocklens().ETH_MAINNET.evmBlocks({});
