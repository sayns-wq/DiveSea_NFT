import Button from "@/ui/Button/Button";
import CurrencyInput from "@/ui/CurrencyInput/CurrencyInput";
import Image from "next/image";
import Person_Bid from "../Person_Bid/Person_Bid";

export default function Bid_history_popup() {
  return (
    <div className="flex flex-col p-5 bg-white w-max gap-7 items-start rounded-2xl">
      <div>
        <h4 className="font-semibold text-xl">History of Bid</h4>
        <h3 className="text-[13px] text-[#888888] text-start md:text-[17px]">
          Oct 14, 2022
        </h3>
      </div>
      <Person_Bid />
      <Person_Bid />
      <Person_Bid />
      <div>
        <h4 className="font-semibold text-xl text-start">Your Bid</h4>
        <CurrencyInput />
      </div>
      <Button variant="primary" width="w-full">
        Submit
      </Button>
    </div>
  );
}
