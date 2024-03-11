import Creator_card from "@/components/Creator_card/Creator_card";
import { creatorDataArray } from "@/data/data";

export default async function Creators() {
  return (
    <>
      <section className="flex flex-col text-center py-24 gap-4 w-full items-center">
        <h2 className="text-5xl text-[#141416] font-semibold pb-24">
          Meet Our Great Creators
        </h2>
        <div className="flex flex-row flex-wrap text-center py-2 gap-4 w-full justify-center">
          {creatorDataArray.map((item) => (
            <Creator_card
              data={item.data}
              dataPictures={item.dataPictures}
              key={item.data.currentItems.value}
            />
          ))}
        </div>
      </section>
    </>
  );
}
