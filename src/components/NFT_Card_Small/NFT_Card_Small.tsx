import Image from "next/image";
import { NFT_Card_interface } from "../../interfaces/main";

export default function NFT_Card_Small({
  picture,
  name,
  bid,
}: NFT_Card_interface) {
  return (
    <div className="flex flex-col p-5 bg-white w-max gap-7 rounded-2xl">
      <div className="relative">
        <Image src={picture} width={280} height={280} alt="NFT Image" />
      </div>
      <h3 className="text-[#141416] text-2xl font-semibold text-left">
        {name}
      </h3>
      <div className="flex flex-row justify-between">
        <div className="flex justify-center flex-col">
          <div className="flex">
            <Image
              src={"/main/ethitium.svg"}
              width={30}
              height={30}
              alt="ethirium icon"
            />
            <h4 className="text-[#141416] text-xl font-medium">{bid}</h4>
          </div>
        </div>
        <div className="flex">
          <Image
            src={"/main/likes.svg"}
            width={30}
            height={30}
            alt="ethirium icon"
          />
          <h4 className="text-[#888888] text-xl font-medium">200</h4>
        </div>
      </div>
    </div>
  );
}
