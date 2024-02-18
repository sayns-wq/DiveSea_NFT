"use client";
import { NFT_Cards } from "../../../data/data";
import NFT_info_Block from "@/modules/NFT_info_block/NFT_info_block";
import NFT_small_cards_scroll from "@/components/NFT_small_cards_scroll/NFT_small_cards_scroll";
import Bid_history_popup from "@/components/Bid_history_popup/Bid_history_popup";
import Bid_Chart from "@/components/Bid_Chart/Bid_Chart";

export default function productDetailes({
  params,
}: {
  params: { id: number };
}) {
  const card = NFT_Cards.find((card) => card.id == params.id) || {
    id: 0,
    picture: "/main/NFT_1.jpg",
    description: "ooops",
    time: "ooops",
    name: "ooops",
    bid: "ooops",
    createBy: 0,
    ownBy: 0,
    endIn: "ooops",
  };
  return (
    <>
      <section className="flex flex-col text-center p-12 gap-4 w-full items-center lg:p-24">
        <NFT_info_Block card={card} />
        <NFT_small_cards_scroll NFT_Cards={NFT_Cards} name="From Creator" />
        <div className="flex flex-col gap-5 items-center justify-around w-full xl:flex-row">
          <Bid_Chart />
          <Bid_history_popup />
        </div>
      </section>
    </>
  );
}
