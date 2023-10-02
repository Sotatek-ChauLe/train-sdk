import { Blocks } from "./Blocks";
import { Collections } from "./Collections";
import { DecodedEvents } from "./DecodedEvents";
import { Erc20 } from "./Erc20";
import { Events } from "./Events";
import { NftMetadata } from "./NftMetadata";
import { NftOwners } from "./NftOwners";
import { NftTransfers } from "./NftTransfers";
import { NftsOwned } from "./NftsOwned";
import { Transactions } from "./Transactions";
import { HttpClient } from "./http-client";

export class EthApi<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  init({ apiKey }: { apiKey: string }) {
    this.instance.defaults.headers["X-API-KEY"] = apiKey;
  }

  blocks: Blocks<SecurityDataType> = new Blocks();
  collections: Collections<SecurityDataType> = new Collections();
  decodedEvents: DecodedEvents<SecurityDataType> = new DecodedEvents();
  erc20: Erc20<SecurityDataType> = new Erc20();
  events: Events<SecurityDataType> = new Events();
  nftMetadata: NftMetadata<SecurityDataType> = new NftMetadata();
  nftOwners: NftOwners<SecurityDataType> = new NftOwners();
  nftsOwned: NftsOwned<SecurityDataType> = new NftsOwned();
  nftTransfers: NftTransfers<SecurityDataType> = new NftTransfers();
  transactions: Transactions<SecurityDataType> = new Transactions();

  apis = {
    ...this.blocks,
    ...this.collections,
    ...this.decodedEvents,
    ...this.erc20,
    ...this.events,
    ...this.nftMetadata,
    ...this.nftOwners,
    ...this.nftsOwned,
    ...this.nftTransfers,
    ...this.transactions,
  };
}
