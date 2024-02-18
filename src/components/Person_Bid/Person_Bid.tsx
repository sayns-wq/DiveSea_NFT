import Image from "next/image";
import { curencyPictures } from "@/data/data";

export default function Person_Bid() {
  return (
    <div className="flex flex-row py-1 bg-white w-full gap-7 rounded-2xl justify-between">
      <div className="flex flex-row gap-4 items-center ">
        <Image
          src={"/main/NFT_1.jpg"}
          width={60}
          height={60}
          alt="person"
          className="rounded-full"
        ></Image>
        <div>
          <h3 className="text-[12px] text-[#000000] font-semibold text-start md:text-[14px]">
            Repo
          </h3>
          <h4 className="text-[10px] text-[#888888] text-start md:text-[12px]">
            May 17, 2022 at 12:08
          </h4>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <Image
          width={20}
          height={20}
          src={curencyPictures.euthirium}
          alt="currency"
        />
        <h3 className="text-[#141416] font-semibold text-xl">1.75</h3>
      </div>
    </div>
  );
}
