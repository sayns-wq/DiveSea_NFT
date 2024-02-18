export interface NFT_Card_interface {
  id: number;
  picture: string;
  description: string;
  time: string;
  name: string;
  bid: string;
  createBy: number;
  ownBy: number;
  endIn: string;
}

type topDataHedersType = [
  "Collection",
  "Volume",
  "24h %",
  "Floor Price",
  "Owners",
  "Items"
];
export interface topDataDataInterface {
  id: number;
  Collection: {
    picture: string;
    name: string;
    company: string;
  };
  Volume: { value: string; currency: string };
  "24h %": {
    value: string;
    trand: "positive" | "negative" | "neutral";
  };
  "Floor Price": { value: string; currency: string };
  Owners: string;
  Items: string;
}
export interface topDatainterface {
  headers: topDataHedersType;
  data: topDataDataInterface[];
}

export interface NavItem {
  name: string;
  link: string;
}
