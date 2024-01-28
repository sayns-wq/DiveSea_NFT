import Cards_wrapper from "@/components/Cards_wrapper/Cards_wrapper";
import Button from "@/ui/Button/Button";
import React from "react";
interface Cards_block_interface {
  name: string;
}
const NFT_Cards = [
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
  {
    picture: "/main/NFT_1.jpg",
    time: "07h 09m 12s",
    name: "Sun-Glass",
    bid: "1.75",
  },
];
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
      <Cards_wrapper NFT_Cards={NFT_Cards} />
    </div>
  );
}
