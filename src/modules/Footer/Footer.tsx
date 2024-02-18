import { NavItem } from "@/interfaces/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import React from "react";

interface footerProps {
  navItems: NavItem[];
}
export default function Footer({ navItems }: footerProps) {
  return (
    <footer className="flex flex-col gap-5 px-[96px] py-[110px] bg-black w-full">
      <div className="flex flex-col justify-between  items-center lg:flex-row">
        <div className="flex flex-row gap-4 items-center">
          <Image
            className="invert"
            src="/main/Logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
          <h3 className="text-white text-3xl">DiveSea</h3>
        </div>

        <ul className="flex">
          {navItems.map((item) => {
            return (
              <li
                className="ml-4 text-[#B9B9B9] capitalize cursor-pointer text-[18px]"
                key={item.name}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <hr></hr>
      <div className="flex flex-col justify-between gap-4 items-center lg:flex-row">
        <h3 className="text-[#B9B9B9] text-[18px] text-center">
          © 2023 EATLY All Rights Reserved.
        </h3>
        <div className="flex gap-5">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xs"
            style={{ color: "#ffffff", width: "21px" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2xs"
            style={{ color: "#ffffff", width: "21px" }}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xs"
            style={{ color: "#ffffff", width: "21px" }}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="2xs"
            style={{ color: "#ffffff", width: "21px" }}
          />
        </div>
      </div>
    </footer>
  );
}
