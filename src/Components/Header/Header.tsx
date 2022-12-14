import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";

import IHeaderInterface from "../../Core/Interface/IHeaderInterface";

import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

import HeaderItem from "../../Constant/HeaderItem.json";

const Header: React.FC = (): JSX.Element => {
  const [headerItem, setHeaderItem] = useState<string>("Home");

  useEffect(() => {});

  return (
    <header className="container mx-auto flex justify-between mt-3">
      <div className="logo">
        <Image src={"/images/Logo.svg"} width="141.51" height="41.23" />
      </div>
      <div className="Headeritems  mt-3 ml-[17rem]">
        <div className="Headeritems flex gap-7  text-md ">
          {HeaderItem.map((item: IHeaderInterface) => (
            <Link
              onClick={(): any => setHeaderItem(item.name)}
              href={item.href}
            >
              <h2
                className={`${
                  headerItem === item.name && "text-[#9D60EB]"
                } cursor-pointer`}
              >
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="rounded-full w-2 h-2 bg-[#9D60EB] mx-5"></div>
      </div>
      <div className="Commontab mt-2 flex gap-7 ">
        <div className="border border-[#C6BAF8] grid grid-cols-12 rounded px-3 w-[270px]">
          <Input
            className="outline-none col-span-10"
            type="text"
            placeholder="Search Here"
          />

          <AiOutlineSearch className="text-[#7F6AD9] h-[29px] w-[70px] col-span-2 mt-1" />
        </div>
        <Button className="bg-gradient-to-r w-[131px] from-[#6362D7] via-purple-500 to-[#FF8FE2] text-center px-4 py-2 text-md rounded text-white">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
