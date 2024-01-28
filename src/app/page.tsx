import { NavItem, topDatainterface } from "@/interfaces/main";
import AdvantagesBlock from "@/modules/AdvantagesBlock/AdvantagesBlock";
import Banner from "@/modules/Banner/Banner";
import Cards_block from "@/modules/Cards_block/Cards_block";
import Footer from "@/modules/Footer/Footer";
import MainPageHead from "@/modules/MainPageHead/MainPageHead";
import NavBar from "@/modules/NavBar/NavBar";
import TopNFT from "@/modules/TopNFT/TopNFT";
import Top_collection from "@/modules/Top_collection/Top_collection";

import Image from "next/image";

const navItems: NavItem[] = [
  {
    name: "Discover",
    link: "/",
  },
  {
    name: "creators",
    link: "/",
  },
  {
    name: "Sell",
    link: "/",
  },
  {
    name: "stats",
    link: "/",
  },
];

const topCollectionData: topDatainterface = {
  headers: ["Collection", "Volume", "24h %", "Floor Price", "Owners", "Items"],
  data: [
    {
      id: 1,
      Collection: {
        picture: "/main/presonPreview.png",
        name: "Alex Ca.",
        company: "By Alex",
      },
      Volume: { value: "8,456", currency: "euthirium" },
      "24h %": {
        value: "27.78%",
        trand: "positive",
      },
      "Floor Price": { value: "3,5", currency: "euthirium" },
      Owners: "2.2K",
      Items: "500",
    },
    {
      id: 2,
      Collection: {
        picture: "/main/presonPreview.png",
        name: "Alex Ca.",
        company: "By Alex",
      },
      Volume: { value: "8,456", currency: "euthirium" },
      "24h %": {
        value: "27.78%",
        trand: "positive",
      },
      "Floor Price": { value: "3,5", currency: "euthirium" },
      Owners: "2.2K",
      Items: "500",
    },
    {
      id: 3,
      Collection: {
        picture: "/main/presonPreview.png",
        name: "Alex Ca.",
        company: "By Alex",
      },
      Volume: { value: "8,456", currency: "euthirium" },
      "24h %": {
        value: "27.78%",
        trand: "positive",
      },
      "Floor Price": { value: "3,5", currency: "euthirium" },
      Owners: "2.2K",
      Items: "500",
    },
    {
      id: 4,
      Collection: {
        picture: "/main/presonPreview.png",
        name: "Alex Ca.",
        company: "By Alex",
      },
      Volume: { value: "8,456", currency: "euthirium" },
      "24h %": {
        value: "27.78%",
        trand: "positive",
      },
      "Floor Price": { value: "3,5", currency: "euthirium" },
      Owners: "2.2K",
      Items: "500",
    },
  ],
};
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-start px-8 lg:px-24 overflow-x-hidden">
        <NavBar navItems={navItems} />
        <MainPageHead />
        <TopNFT />
        <Top_collection collections={topCollectionData} />
        <Cards_block name="Explore Marketplace" />
        <AdvantagesBlock />
        <div className="pb-[200px] w-full">
          <Banner />
        </div>
      </main>
      <footer>
        <Footer navItems={navItems} />
      </footer>
    </>
  );
}
