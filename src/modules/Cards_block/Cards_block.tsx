import Cards_wrapper from "@/components/Cards_wrapper/Cards_wrapper";
import Button from "@/ui/Button/Button";
import React from "react";
import { NFT_Cards } from "@/data/data";
interface Cards_block_interface {
  name: string;
}

export default function Cards_block({ name }: Cards_block_interface) {
  return (
    <div className="flex flex-col text-center py-24 gap-4 w-full items-center">
      <h2 className="text-5xl text-[#141416] font-semibold">{name}</h2>
      <div className="flex flex-row text-center py-2 gap-4 w-full justify-center">
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Category</Button>
        <Button variant="secondary">Collection</Button>
        <Button variant="secondary">Price</Button>
      </div>
      <Cards_wrapper NFT_Cards={NFT_Cards.slice(0, 8)} />
    </div>
  );
}
