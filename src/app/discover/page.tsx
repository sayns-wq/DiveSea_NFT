import Cards_wrapper from "@/components/Cards_wrapper/Cards_wrapper";
import Button from "@/ui/Button/Button";
import { NFT_Cards } from "../../data/data";

export default async function discover() {
  const data = await getData();
  return (
    <>
      <section className="flex flex-col text-center py-24 gap-4 w-full items-center">
        <h2 className="text-5xl text-[#141416] font-semibold">Discover NFTs</h2>
        <div className="flex flex-row text-center py-2 gap-4 w-full justify-center">
          <Button variant="secondary">Category</Button>
          <Button variant="secondary">Collection</Button>
          <Button variant="secondary">Price</Button>
        </div>
        <Cards_wrapper NFT_Cards={data} />
      </section>
    </>
  );
}

async function getData() {
  const res = await fetch(`${process.env.SERVER_HOST}/api/nft`);

  return res.json();
}
