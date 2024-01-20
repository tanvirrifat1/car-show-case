"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets/el.png";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { MdOutlineArrowLeft } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const SideBar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const Menus = [
    { title: "DashBoard", src: <CiMenuBurger /> },
    { title: "DashBoard", src: <CiMenuBurger /> },
    { title: "DashBoard", src: <CiMenuBurger /> },
    { title: "DashBoard", src: <CiMenuBurger /> },
  ];

  return (
    <div>
      <div
        className={`${
          open ? "w-72" : "w-20"
        }  w-72 h-screen p-5 pt-8 bg-slate-950 relative duration-700`}
      >
        <p
          onClick={() => setOpen(!open)}
          className={`${
            open && "-rotate-180"
          } absolute cursor-pointer rounded-full bg-slate-800 -right-3 top-9 w-9 flex justify-center items-center h-8 border-2`}
        >
          <h1 className="text-4xl">
            <MdOutlineArrowLeft className=" rounded-full text-white " />
          </h1>
        </p>
        <div className="flex gap-x-4 items-center">
          <Image
            className={`${
              open && "rotate-[360deg]"
            } cursor-pointer duration-300 rounded-md`}
            src={logo}
            height={50}
            width={50}
            alt=""
          />
          <h1
            className={`${
              !open && "scale-0"
            } text-white origin-left font-semibold text-xl duration-500`}
          >
            DashBoard
          </h1>
        </div>
        <ul className="pt-6">
          <li className="text-gray-300 rounded-md text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-500">
            <Link
              className="flex gap-2 justify-center items-center"
              href="/home"
            >
              <FaHome className="w-7 h-7 inline-block " />
              <span
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text-xl duration-500`}
              >
                Home
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
