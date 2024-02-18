"use client";
import { ReactNode } from "react";
import Select from "react-select";
const options = [
  { value: "eth", label: "ETH" },
  { value: "bit", label: "BIT" },
];

export default function CurrencyInput() {
  return (
    <div>
      <div className="flex flex-row items-center">
        <Select
          className="w-fit"
          classNames={{
            control: (state) => "!border-black !bg-black !px-2 !rounded-l-2xl",
            singleValue: (state) => "!text-white",
            valueContainer: (state) =>
              "!py-2 w-[55px] text-[15px] sm:w-[80px] sm:text-[20px]",
          }}
          options={options}
        />
        <input
          className="border-black border-2 py-2 px-4 h-[47px] ml-[-10px] w-[130px] rounded-r-2xl sm:w-auto sm:h-[55px]"
          type="number"
        ></input>
      </div>
    </div>
  );
}
