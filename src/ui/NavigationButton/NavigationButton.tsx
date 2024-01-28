"use client";
import Image from "next/image";

interface NavigationButtonProps {
  leftHandler?: any;
  rightHandler?: any;
}
export default function NavigationButton({
  leftHandler,
  rightHandler,
}: NavigationButtonProps) {
  return (
    <div
      className={`border-2 rounded-xl bg-white w-fit h-fit p-5 flex shadow-3xl`}
    >
      <button
        className="pr-4 border-r-2 border-x-[#E6E8EC]"
        onClick={() => leftHandler()}
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
        onClick={() => rightHandler()}
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
