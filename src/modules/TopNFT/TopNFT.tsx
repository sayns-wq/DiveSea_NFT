import NFT_Ctads_scroll from "@/components/NFT_Ctads_scroll/NFT_Ctads_scroll";
import React, { useState } from "react";
const NFT_Cards = [
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
];
export default function TopNFT() {
  return (
    <div className="flex flex-col text-center py-24 gap-4 w-full items-center">
      <h2 className="text-5xl text-[#C5C5C5] font-semibold">
        Weekly - Top NFT
      </h2>
      <NFT_Ctads_scroll NFT_Cards={NFT_Cards} />
    </div>
  );
}
