import { NFT_Card_interface } from "@/interfaces/main";
import Button from "@/ui/Button/Button";
import Image from "next/image";
import React from "react";

interface NFT_info_block {
  card: NFT_Card_interface;
}
export default function NFT_info_block({ card }: NFT_info_block) {
  return (
    <div className="flex flex-col text-center justify-center w-full bg-white rounded-2xl p-[36px] items-center lg:flex-row">
      <Image src={card.picture} width={550} height={550} alt="image"></Image>
      <div className="flex flex-col items-start lg:pl-[10%]">
        <div className="text-[30px] text-[#292B39] font-semibold md:text-[50px]">
          {card.name}
        </div>
        <div className="text-[15px] text-[#888888]  text-start pb-[70px] lg:w-2/3 md:text-[20px]">
          {card.description}
        </div>
        <div className="flex flex-row justify-between gap-4 pb-14 md:gap-20 min-[480px]:justify-normal w-full">
          <div className="flex flex-col gap-4 items-center min-[480px]:flex-row">
            <Image
              src={"/main/createdBy_picture.svg"}
              width={65}
              height={65}
              alt="createdBy_picture"
            ></Image>
            <div>
              <h4 className="text-[13px] text-[#888888] text-start md:text-[17px]">
                Created by
              </h4>
              <h3 className="text-[17px] text-[#000000] font-semibold text-start md:text-[25px]">
                Perperzon
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center min-[480px]:flex-row">
            <Image
              src={"/main/ownerBy_picture.svg"}
              width={65}
              height={65}
              alt="ownerBy_picture"
            ></Image>
            <div>
              <h4 className="text-[13px] text-[#888888] text-start md:text-[17px]">
                Owned by
              </h4>
              <h3 className="text-[17px] text-[#000000] font-semibold text-start md:text-[25px]">
                Videz
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between gap-4 pb-14 xl:w-[70%]">
          <div>
            <h4 className="text-[13px] text-[#888888] text-start md:text-[17px]">
              Current Bid
            </h4>
            <div className="flex flex-row items-center">
              <Image
                src={"/main/ethitium.svg"}
                width={35}
                height={35}
                alt="ethitium"
              ></Image>
              <h3 className="text-[15px] text-[#292B39] text-start font-semibold md:text-[32px]">
                {card.bid}
              </h3>
            </div>
          </div>
          <div>
            <h4 className="text-[13px] text-[#888888] text-start md:text-[17px]">
              End in
            </h4>

            <h3 className="text-[15px] text-[#000000] text-start md:text-[19px]">
              {card.endIn}
            </h3>
          </div>
        </div>
        <Button variant="primary" width="w-full">
          Place Bid
        </Button>
      </div>
    </div>
  );
}
