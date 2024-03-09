"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { NFT_Card_interface } from "../../interfaces/main";
import NFT_Card_Small from "../NFT_Card_Small/NFT_Card_Small";
interface NFT_Card_Scroll_props {
  NFT_Cards: NFT_Card_interface[];
  name?: string;
}
export default function NFT_small_cards_scroll({
  NFT_Cards,
  name = "",
}: NFT_Card_Scroll_props) {
  return (
    <div className="flex flex-col text-center pt-24 gap-4 w-full">
      <h2 className="text-[#C3C3C3] text-3xl font-semibold text-start">
        {name}
      </h2>
      <Swiper
        className="w-full !flex flex-col justify-center gap-7 items-center !pb-14"
        spaceBetween={50}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1120: {
            slidesPerView: 3,
          },
          1450: {
            slidesPerView: 4,
          },
          1800: {
            slidesPerView: 5,
          },
        }}
      >
        {NFT_Cards &&
          NFT_Cards.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <NFT_Card_Small {...card} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
