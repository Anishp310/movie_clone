import logo from "../assets/images/logo.png";
import flogo from "../assets/images/face.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { HeaderItem } from "./HeaderItem";
import { useState } from "react";
export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center ">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover border-none rounded-xl"
        />
        <div className="hidden md:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden flex gap-8 ">
          {menu.slice(0, 3).map((item) => (
            <HeaderItem key={item.name} name={""} Icon={item.icon} />
          ))}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem
              name={""}
              Icon={HiDotsVertical}
              className="cursor-pointer"
            />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3  px-5 py-4">
                {menu.slice(3).map((item) => (
                  <HeaderItem
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={flogo} alt="lg" className="w-[40px] rounded-full" />
    </div>
  );
};
