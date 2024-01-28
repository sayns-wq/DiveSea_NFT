"use client";

import Image from "next/image";
import NavigationButton from "../NavigationButton/NavigationButton";
import { useSwiper } from "swiper/react";

export default function SwiperNavigationButton() {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <div
      className={`border-2 rounded-xl bg-white w-fit h-fit p-5 flex shadow-3xl`}
    >
      <button
        className="pr-4 border-r-2 border-x-[#E6E8EC]"
        onClick={() => swiper.slidePrev()}
      >
        <Image
          src={"/main/arrow_left.svg"}
          width={25}
          height={25}
          alt="image"
        ></Image>
      </button>
      <button
        className="pl-4 border-l-2 border-x-[#E6E8EC]"
        onClick={() => swiper.slideNext()}
      >
        <Image
          src={"/main/arrow_right.svg"}
          width={25}
          height={25}
          alt="image"
        ></Image>
      </button>
    </div>
  );
}
