import "swiper/css";
import React from "react";
import NFT_Card from "../NFT_Card/NFT_Card";
import { NFT_Card_interface } from "../../interfaces/main";
interface Cards_wrapper_Props {
  NFT_Cards: NFT_Card_interface[];
}
export default function Cards_wrapper({ NFT_Cards }: Cards_wrapper_Props) {
  return (
    <div className="flex flex-row flex-wrap text-center pt-24 gap-6 w-full justify-center">
      {NFT_Cards &&
        NFT_Cards.map((card) => {
          return <NFT_Card {...card} key={card.name} />;
        })}
    </div>
  );
}
