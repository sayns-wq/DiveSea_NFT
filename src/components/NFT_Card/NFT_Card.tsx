import Button from "@/ui/Button/Button";
import Image from "next/image";
import { NFT_Card_interface } from "../../interfaces/main";

export default function NFT_Card({
  picture,
  time,
  name,
  bid,
}: NFT_Card_interface) {
  return (
    <div className="flex flex-col p-5 bg-white w-max gap-7 rounded-2xl">
      <div className="relative">
        <Image src={picture} width={280} height={280} alt="NFT Image" />
        <div className="absolute top-[5%] right-[5%] bg-[#1c1d2043] p-3 rounded-lg">
          <span className="text-white">{time}</span>
        </div>
      </div>
      <h3 className="text-[#141416] text-2xl font-semibold text-left">
        {name}
      </h3>
      <div className="flex flex-row justify-between">
        <div className="flex justify-center flex-col">
          <h4 className="text-[#94A3B8] text-xl">Current bid</h4>
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
        <Button variant="primary">PLACE BID</Button>
      </div>
    </div>
  );
}
