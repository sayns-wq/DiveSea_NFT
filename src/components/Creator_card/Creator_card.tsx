import { NumReducer } from "@/utils";
import Image from "next/image";
import React from "react";

interface DataTitlesInterface {
  [key: string]: string;
}
interface DataInterface {
  [key: string]: {
    currency: string;
    value: string;
  };
}

const dataTitles: DataTitlesInterface = {
  currentItems: "Items",
  totalItems: "Items",
  price: "Price",
  traded: "Traded",
};

export default function Creator_card({
  data,
  dataPictures,
}: {
  data: DataInterface;
  dataPictures: Array<{ id: number; src: string }>;
}) {
  return (
    <div className="flex flex-col pb-5 bg-[#F2F2F2] w-max gap-2 rounded-2xl">
      <div className="flex flex-col items-center">
        <div className="bg-[url('/main/NFT_1.jpg')] w-full h-[200px] bg-cover bg-no-repeat bg-center rounded-t-2xl"></div>
        <Image
          src={"/main/NFT_1.jpg"}
          width={150}
          height={150}
          alt="NFT Image"
          className="rounded-full border-solid border-[7px] border-[#ffffff] mt-[-75px]"
        />
      </div>
      <div className="px-6">
        <h3 className="text-[#141416] text-2xl font-semibold text-center flex justify-center">
          Alex Ca.
          <Image
            src={"/main/check_icon.svg"}
            width={17}
            height={17}
            alt="currency"
          />
        </h3>
        <div className="flex flex-row justify-between gap-4 py-7">
          {Object.keys(dataTitles).map((item) => (
            <div className="flex flex-col justify-between" key={item}>
              <div className="flex justify-center flex-row items-center">
                {data[item].currency && (
                  <Image
                    src={"/main/" + data[item].currency + ".svg"}
                    width={17}
                    height={17}
                    alt="currency"
                  />
                )}
                <h4 className="text-[#141416] text-[17px] font-semibold text-center">
                  {NumReducer(data[item].value)}
                </h4>
              </div>
              <h4 className="text-[#828282] text-sm font-semibold text-center">
                {dataTitles[item]}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-start gap-4">
          {dataPictures.map((pictureItem, index, arr) => {
            return index < 3 ? (
              <div className="relative" key={pictureItem.id}>
                <Image
                  src={pictureItem.src}
                  width={100}
                  height={100}
                  alt="NFT Image"
                  key={pictureItem.id}
                  className={`${index == 2 && "brightness-[0.65]"}`}
                />
                {index == 2 && (
                  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center filter-none">
                    <div className="text-white text-lg font-semibold">
                      +{arr.length - 2}
                    </div>
                  </div>
                )}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
