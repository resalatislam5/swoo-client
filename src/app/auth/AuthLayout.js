"use client";
import Image from "next/image";
import loginImg from "@/app/ass/login.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

function AuthLayout({
  heading,
  subHeading,
  inputList,
  handelSubmit,
  to,
  toText,
  toText1,
  forget,
  buttonText,
}) {
  const [showP, setShowP] = useState(false);
  return (
    <div className="main-width bg-white rounded-xl my-5 py-10 text-[#666]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex justify-center gap-5 items-center">
          <Image className="h-fit" src={loginImg} alt="" />
        </div>
        <div className="flex flex-col gap-10 max-[1023px]:items-center">
          <div className="">
            <h1 className="text-3xl font-bold text-[#1ABA1A]">{heading}</h1>
            <p className="">{subHeading}</p>
          </div>
          <form onSubmit={handelSubmit} className="">
            <div className="flex flex-col gap-3">
              {inputList.map((e, i) => (
                <div key={i}>
                  <p className="text-black pb-2">{e.text}</p>
                  <div className="flex items-center border border-[#CCC] rounded-md min-[1023px]:w-1/2">
                    <input
                      className="px-5 py-3 w-full"
                      type={showP ? "text" : e.text}
                      placeholder={e.placeholder}
                    />
                    {e.eyse && (
                      <button onClick={() => setShowP(!showP)} className="pr-2">
                        {showP ? e.eyse : e.eyseH}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <Link href="/" className="text-[13px] decoration-solid">
                {forget}
              </Link>
            </div>
            <div className="mt-10">
              <button
                className="bg-[#1ABA1A] text-white px-10 py-3 rounded-md"
                type="submit"
              >
                {buttonText}
              </button>
              <p className="mt-4 uppercase">
                {toText1}
                <Link className="text-[#1ABA1A]" href={to}>
                  {toText}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
