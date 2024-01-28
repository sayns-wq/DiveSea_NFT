"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import NFT_Card from "../NFT_Card/NFT_Card";
import SwiperNavigationButton from "@/ui/SwiperNavigationButton/SwiperNavigationButton";
import { NFT_Card_interface } from "../../interfaces/main";
interface NFT_Card_Scroll_props {
  NFT_Cards: NFT_Card_interface[];
}
export default function NFT_Ctads_scroll({ NFT_Cards }: NFT_Card_Scroll_props) {
  return (
    <div className="flex flex-col text-center pt-24 gap-4 w-full items-center">
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
              <SwiperSlide>
                <NFT_Card {...card} />
              </SwiperSlide>
            );
          })}

        <SwiperNavigationButton />
      </Swiper>
    </div>
  );
}
