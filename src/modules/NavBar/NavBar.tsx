"use client";
import { NavItem } from "@/interfaces/main";
import Button from "@/ui/Button/Button";
import Search from "@/ui/Search/Search";
import Image from "next/image";
import React, { useState } from "react";

interface navBarProps {
  navItems: NavItem[];
}
function NavBar({ navItems }: navBarProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav className="flex flex-row justify-between py-2 md:py-6 items-center w-full relative">
      <Image src="/main/Logo.svg" width={50} height={50} alt="logo" />
      <ul className="hidden flex-row justify-start md:flex">
        {navItems.map((item) => {
          return (
            <li
              className="mx-4 text-teal-900 uppercase cursor-pointer"
              key={item.name}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div className="flex-row gap-6 items-center hidden sm:flex">
        <Search placeholder="Search Art Work / Creator" />
        <div className="hidden lg:block">
          <Button variant="primary">Connect Wallet</Button>
        </div>
      </div>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {menuIsOpen && (
        <ul className="mobileMenu flex absolute bg-white w-full flex-col top-[100%] cursor-pointer">
          {navItems.map((item) => {
            return (
              <li
                className="p-4 text-teal-900 uppercase cursor-pointer border-black border-b-2 border-l-2 border-r-2 first:border-t-2"
                key={item.name}
                onClick={() => {
                  setMenuIsOpen(false);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
export default React.memo(NavBar);
