"use client";
import Image from "next/image";
import logo from "@/app/ass/logo.png";
import eng from "@/app/ass/eng.png";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";
import { FaAngleUp, FaUser } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [showSi, setShowSi] = useState("");
  const [openNav, setOpenNev] = useState(false);
  const navLinks = [
    {
      text: "HOME",
      to: "/",
    },
    {
      text: "PAGES",
      to: "/",
      arr: [
        {
          to: "/consultant",
          img: eng,
          title: "Consuting 1",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
        {
          to: "/consuting2",
          img: eng,
          title: "Consuting 2",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
        {
          to: "/",
          img: eng,
          title: "Consuting 3",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
      ],
    },
    {
      text: "PRODUCTS",
      to: "/",
      arr: [
        {
          to: "/consultant",
          img: eng,
          title: "Consuting 1",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
        {
          to: "/consuting2",
          img: eng,
          title: "Consuting 2",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
        {
          to: "/",
          img: eng,
          title: "Consuting 3",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
      ],
    },
    {
      text: "CONTACT",
      to: "/",
    },
  ];
  return (
    <header>
      {/* side bar start */}
      <>
        <div
          id="mySidenav"
          className={`${
            openNav
              ? `w-full fixed bg-white h-full transition-all`
              : "hidden top-0"
          }`}
        >
          <div className="p-8 flex items-center justify-between font-medium text-2xl">
            <div className="w-48 h-16">
              <Image src={logo} alt="" />
            </div>
            <button className="text-5xl" onClick={() => setOpenNev(false)}>
              &times;
            </button>
          </div>
          <div className="p-8 flex flex-col gap-6">
            {navLinks.map((e, i) => (
              <div key={i}>
                <Link
                  className="flex gap-4 items-center text-2xl font-medium transition-all"
                  onClick={() => setShowSi(e.text)}
                  href={e.to}
                >
                  {e.text}
                  {e.arr &&
                    (e.text === showSi ? (
                      <FaAngleUp />
                    ) : (
                      <IoChevronDownOutline />
                    ))}
                </Link>
                {e?.arr && (
                  <div
                    className={`ml-3 ${
                      showSi === e.text
                        ? "flex flex-col gap-4 ml-8 text-2xl py-4"
                        : "hidden"
                    }`}
                  >
                    {e.arr.map((items, i) => (
                      <Link
                        className="flex items-center gap-3"
                        key={i}
                        href={items.to}
                      >
                        <div className="w-10">
                          <Image src={items.img} alt="" />
                        </div>
                        {items.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
      {/* side bar start */}
      <section className="container mx-auto bg-white px-5 text-black pt-7 rounded-xl relative">
        {/* top header start */}
        <div className="flex flex-wrap md:justify-between gap-5 justify-center">
          <div className="flex items-center gap-5 text-xs">
            <p className="bg-[#EBEEF6] px-4 py-1 rounded-md">Hotline 24/7</p>
            <a className="font-bold" href="tel:+8801765975545">
              +8801765975545
            </a>
          </div>
          <div className="flex max-[380px]:hidden flex-wrap justify-center items-center gap-10 text-[14px]">
            <div className="flex items-center gap-5">
              <p>Sell on Swoo</p>
              <p>Order Tracki</p>
            </div>
            <div className="flex items-center divide-x-2 divide-gray-300">
              <select className="mr-2" name="" id="">
                <option value="USD">USB</option>
                <option value="Taka">Taka</option>
                <option value="In">In</option>
              </select>
              <select className="pl-2" name="" id="">
                <option value="USD">Eng</option>
                <option value="Taka">BD</option>
                <option value="In">India</option>
              </select>
            </div>
          </div>
        </div>
        {/* top header end */}
        {/* main header start */}
        <div className="flex max-[380px]:flex-wrap max-[380px]:justify-center justify-between py-7 text-[14px] gap-5">
          <div className="flex items-center gap-20 text-xs">
            <div className="">
              <Image src={logo} alt="" />
            </div>
            {/* nav-link  */}
            <div className="lg:flex gap-5 font-bold hidden">
              {navLinks.map((e, i) => (
                <div className="dropdown" key={i}>
                  <Link
                    className="hover:text-[#1ABA1A] flex items-center gap-2"
                    key={i}
                    href={e.to}
                  >
                    {e.text}
                    {e.arr && (
                      <div className="">
                        <div className="dropdown-content-h">
                          <IoChevronDownOutline />
                        </div>
                        <div className="dropdown-content">
                          <FaAngleUp />
                        </div>
                      </div>
                    )}
                  </Link>
                  {e?.arr && (
                    <div className="dropdown-content left-0 absolute w-full pt-5 container">
                      <div className="gap-3 bg-white shadow-md p-5 rounded-md border-t">
                        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
                          {e.arr.map((items, i) => (
                            <Link
                              className="flex gap-3 items-centerhover:bg-blue-400  p-1 rounded-md "
                              key={i}
                              href={items.to}
                            >
                              <div className="w-20">
                                <Image src={items.img} alt="" />
                              </div>
                              <div className="">
                                {items.title}
                                <p className="text-sm text-gray-500">
                                  {items.text}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 text-[14px]">
            <a className="bg-gray-300 p-3 rounded-full" href="">
              <GiSelfLove />
            </a>
            <div className="flex gap-2">
              <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
                <FaUser />
              </div>
              <div className="md:flex hidden flex-col">
                <p className="text-[11px] text-[#666]">welcome</p>
                <Link className="font-bold" href={"/"}>
                  Log in / Register
                </Link>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className={`bg-gray-300 w-10 h-10 rounded-full relative ${
                  openNav ? "hidden" : ""
                }`}
              >
                <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
                  <MdShoppingCartCheckout />
                </div>
                <p className="absolute bg-[#1ABA1A] text-white px-1 rounded-full -bottom-1 right-0 text-[11px]">
                  5
                </p>
              </div>
              <div className="md:flex hidden flex-col">
                <p className="text-[11px] text-[#666]">CART</p>
                <Link className="font-bold" href={"/"}>
                  $1,689.00
                </Link>
              </div>
              {/* sidebar-button-start */}
              <div>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-white bg-white rounded-lg xl:hidden  focus:outline-none focus:ring-2"
                  aria-controls="mobile-menu-2"
                  aria-expanded="true"
                  onClick={() => setOpenNev(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
              </div>
              {/* sidebar-button-end */}
            </div>
          </div>
        </div>
        {/* main header end */}
      </section>
    </header>
  );
}

export default Header;
