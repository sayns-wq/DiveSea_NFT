import React, { lazy, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "@/ui/Loading/Loading";
import { NFT_Cards } from "../../data/data";

const NFT_Ctads_scroll = dynamic(()=> import('@/components/NFT_Ctads_scroll/NFT_Ctads_scroll'), { ssr: false,
    loading: () => <Loading/>,
   })

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
