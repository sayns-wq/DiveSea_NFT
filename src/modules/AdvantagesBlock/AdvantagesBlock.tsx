import Button from "@/ui/Button/Button";
import Image from "next/image";
import React from "react";

const adventages = [
  "Best Seller All Around World",
  "$2M+ Transections Every Day",
  "Secure Transactions",
  "Exclusive Collections From Sellers",
  "Easy Buying and Selling",
  "Join Our Community",
];
export default function AdvantagesBlock() {
  return (
    <div className="flex flex-col justify-around relative py-[30px] gap-6 w-full items-center lg:flex-row lg:gap-4">
      <div className="flex flex-col gap-4  items-center lg:items-start">
        <h2 className="text-3xl text-[#18181B] font-semibold text-center lg:text-start sm:text-5xl">
          <span className="text-[#C5C5C5]">Just&nbsp;Unleash&nbsp;- </span>{" "}
          <br></br>
          Your Inner Collector
        </h2>
        <ul className="pl-2 hidden lg:block">
          {adventages.map((item, index) => {
            return (
              <li key={index} className="flex gap-3 mb-3">
                <Image
                  src="/main/icon_check.svg"
                  width={20}
                  height={20}
                  alt="image"
                ></Image>
                <span className="text-[#12141D] opacity-70 text-[16px]">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block">
          <Button variant="primary">Explore More</Button>
        </div>
      </div>
      <Image
        className="hidden absolute right-[-90px] bottom-[150px] lg:block"
        src="/main/dots_big.svg"
        width={350}
        height={150}
        alt="image"
      ></Image>
      <Image
        className="z-10"
        src="/main/Illustration_left.png"
        width={720}
        height={680}
        alt="image"
      ></Image>
      <div className="block lg:hidden">
        <Button variant="primary">Explore More</Button>
      </div>
    </div>
  );
}
