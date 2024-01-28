import Button from "@/ui/Button/Button";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col justify-around py-[30px] gap-6 w-full items-center bg-black rounded-[30px] lg:flex-row lg:gap-4">
      <div className="flex flex-col gap-4  items-center lg:items-start ">
        <h2 className="text-3xl text-white font-semibold text-center xl:text-5xl">
          Create and Sell NFTs
        </h2>
        <h4 className="text-[14px] text-[#D4D4D4] font-medium xl:text-xl">
          World’s Largest NFT Place
        </h4>
        <div className="flex flex-row gap-4">
          <Button variant="white">Explore More</Button>
          <Button variant="primary">Sell Artwork</Button>
        </div>
      </div>
      <Image
        className="rounded-[25px] shadow-[0px_10px_60px_4px_#e1c4b4] mb-[-150px] lg:mb-0"
        src="/main/nft_Banner_Image.png"
        width={390}
        height={264}
        alt="image"
      ></Image>
    </div>
  );
}
