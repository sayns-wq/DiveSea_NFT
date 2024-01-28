import Button from "@/ui/Button/Button";
import NavigationButton from "@/ui/NavigationButton/NavigationButton";
import Image from "next/image";
import React, { useState } from "react";

const NFTCommonInfo = [
  {
    fiature: "Art Works",
    count: "430K+",
  },
  {
    fiature: "Creators",
    count: "159K+",
  },
  {
    fiature: "Collections",
    count: "87K+",
  },
];

export default function MainPageHead() {
  return (
    <div className="flex flex-col text-center py-24 gap-4 w-full lg:flex-row lg:text-left">
      <div className="w-full flex flex-col items-center lg:w-1/2 lg:items-start">
        <h1 className="text-5xl font-bold w-2/3 mb-4 lg:text-6xl">
          Discover And Create NFTs
        </h1>
        <p className="text-2xl mb-11 w-[85%]">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a $20 bonus.
        </p>
        <div className="flex gap-2 mb-20">
          <Button variant="primary">Explore More</Button>
          <Button variant="secondary">create NFT</Button>
        </div>
        <div className="hidden flex-row w-full gap-8 lg:flex">
          {NFTCommonInfo.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-4xl font-bold">{item.count}</h3>
                <h6 className="text-xs">{item.fiature}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="flex flex-col items-start justify-center  gap-8 ">
          <Image
            className="min-w-36 w-1/2 lg:min-w-72"
            src={"/main/NFT_1.jpg"}
            width={400}
            height={400}
            alt="image"
          ></Image>
          <NavigationButton />
        </div>

        <Image
          className="rotate-6 absolute top-[12%] right-[25%] lg:right-[20%] max-w-[20%]"
          src={"/main/arrow.svg"}
          width={150}
          height={150}
          alt="image"
        ></Image>
        <Image
          className="absolute top-[0%] right-[-20%] max-w-[20%]"
          src={"/main/dots.svg"}
          width={150}
          height={150}
          alt="image"
        ></Image>
        <Image
          className="absolute top-[40%] right-[-25%] min-w-24 w-1/2 lg:min-w-64"
          src={"/main/NFT_2.png"}
          width={400}
          height={400}
          alt="image"
        ></Image>
      </div>
    </div>
  );
}
