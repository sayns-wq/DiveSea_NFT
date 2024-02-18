import "swiper/css";
import React from "react";
import Image from "next/image";
import { topDatainterface } from "@/interfaces/main";
import { curencyPictures } from "@/data/data";
interface Top_collection_Props {
  collections?: topDatainterface;
}

const mobileRows = ["Collection", "Volume"];
const mobileTableData = ["Collection"];

function Cell24({ item }: any) {
  return (
    <div
      className={`${
        item.trand == "positive" ? "text-[#10C352]" : "text-[#ff0000]"
      }  font-semibold text-2xl`}
    >
      {item.trand == "positive" ? "+" : "-"}
      {item.value}
    </div>
  );
}
function CollectionCell({ item }: any) {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image
        className="border-2 rounded-full border-white w-fit lg:w-[85px]"
        width={85}
        height={85}
        src={item.picture}
        alt="avatar"
      />
      <div className="w-fit text-start">
        <h3 className="text-[#141416] font-semibold text-2xl">{item.name}</h3>
        <h4 className="text-[#64748B] text-xl">{item.company}</h4>
      </div>
    </div>
  );
}
function NFTCell({ item }: any) {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image
        width={30}
        height={30}
        src={curencyPictures[item.currency]}
        alt="currency"
      />
      <h3 className="text-[#141416] font-semibold text-2xl">{item.value}</h3>
    </div>
  );
}
export default function Top_collection({ collections }: Top_collection_Props) {
  return (
    <div className="flex flex-col text-center py-24 gap-4 w-full items-center">
      <h2 className="text-5xl text-[#141416] font-semibold">Top collection</h2>
      <table className="table-fixed w-full border-spacing-2 border-separate">
        <thead>
          <tr>
            {collections &&
              collections.headers.map((headerItem: string) => {
                return (
                  <th
                    className={`${
                      mobileRows.includes(headerItem)
                        ? "table-cell"
                        : "hidden lg:table-cell"
                    }`}
                  >
                    {headerItem}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {collections &&
            collections.data.map((collectionDataItem: Record<string, any>) => {
              return (
                <tr key={collectionDataItem.id}>
                  {collections.headers.map((headerName: string) => {
                    const item = collectionDataItem[headerName];
                    return (
                      <td
                        className={`${
                          mobileTableData.includes(headerName)
                            ? "table-cell"
                            : "hidden lg:table-cell"
                        } `}
                        key={headerName}
                      >
                        {headerName == "Collection" && (
                          <CollectionCell item={item} />
                        )}
                        {headerName == "24h %" && <Cell24 item={item} />}
                        {(headerName == "Volume" ||
                          headerName == "Floor Price") && (
                          <>
                            <NFTCell item={item} />
                          </>
                        )}
                        {typeof item == "string" && (
                          <h3 className="text-[#141416] font-semibold text-2xl">
                            {collectionDataItem[headerName]}
                          </h3>
                        )}
                      </td>
                    );
                  })}
                  <td className="lg:hidden flex flex-col gap-2">
                    {<NFTCell item={collectionDataItem["Volume"]} />}
                    {<Cell24 item={collectionDataItem["24h %"]} />}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
