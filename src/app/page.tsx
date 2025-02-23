import banner2 from "@/app/ass/banner-2.png";
import banner3 from "@/app/ass/banner-3.png";
import banner4 from "@/app/ass/banner-4.png";
import banner5 from "@/app/ass/banner-5.png";
import HomeSection from "@/app/HomeComponents/HomeSection";
import Image from "next/image";
import Link from "next/link";
import {
  brandLogoItems,
  sellOfItems,
  topCategoriesItems,
} from "../constant/index";
import Button from "./components/ui/Button";
import SliderBanner from "./HomeComponents/SliderBanner";
export default function Home() {
  return (
    <main className="main-width">
      {/* Banner-section-start */}
      <section className="mt-4">
        <div className="grid xl:grid-cols-4 gap-5">
          {/* left  */}
          <ul className="xl:flex hidden flex-col gap-3 col-span-1 bg-white py-5 px-14 rounded-[10px] group">
            {sellOfItems.map((e) => (
              <li
                key={e.id}
                className="text-[13px] first:text-[#F1352B] font-semibold group-first first:text-sm first:font-bold"
              >
                {e.title}
              </li>
            ))}
          </ul>
          {/* middle */}
          <div className="grid grid-cols-2 gap-4 col-span-2">
            <div className="col-span-2">
              <SliderBanner />
            </div>
            {/* 1 */}
            <div
              className="bg-cover bg-no-repeat w-full h-full p-5 rounded-[10px]"
              style={{ backgroundImage: `url(${banner2.src})` }}
            >
              <p className="text-[15px] pb-8">
                Sono Playgo 5 <br /> from{" "}
                <span className="text-[#1ABA1A]">$569</span>
              </p>
              <Link className="underline text-sm" href={"/"}>
                Discover now
              </Link>
            </div>
            {/* 2 */}
            <div
              className="bg-cover bg-no-repeat w-full h-full p-5 text-white rounded-[10px]"
              style={{ backgroundImage: `url(${banner3.src})` }}
            >
              <p className="text-[15px] pb-8">
                Logitek Bluetooth
                <br /> <span className="text-[#FFC107]">Keyboard</span>
              </p>
              <Link className="text-sm" href={"/"}>
                Best for all device
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="xl:flex hidden flex-col gap-5 justify-between">
            {/* 1 */}
            <div
              className="bg-cover bg-no-repeat w-full h-full p-5 rounded-[10px] flex justify-end"
              style={{ backgroundImage: `url(${banner4.src})` }}
            >
              <div className="w-1/2">
                <span className="text-[10px]">xomia</span>
                <p className="text-xl font-semibold pb-8">
                  Sport Water Resistance Watch
                </p>
                <Button text={"SHOP NOW"} style={"!bg-black text-white"} />
              </div>
            </div>
            {/* 2 */}
            <div
              className="bg-cover bg-no-repeat w-full h-full p-5 text-white rounded-[10px]"
              style={{ backgroundImage: `url(${banner5.src})` }}
            >
              <p className="text-2xl font-semibold pb-8">
                OKODo <br /> hero 11+ <br /> black
              </p>
              <span className="text-[10px]">from</span>
              <p className="text-[#1ABA1A] text-2xl">$169</p>
            </div>
          </div>
        </div>
      </section>
      {/* Banner-section-end */}
      {/* featured-section-start */}
      <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
        <HomeSection name={"featured brands"}>
          <div className="sm:grid hidden grid-cols-5 gap-8 mt-10">
            {brandLogoItems.map((e) => (
              <div key={e.id}>
                <Image width={100} height={40} src={e.img} alt={e.alt} />
              </div>
            ))}
          </div>
          {/* mobile */}
          <div className="grid sm:hidden grid-cols-3 gap-8 mt-10">
            {brandLogoItems.slice(0, 6).map((e) => (
              <div key={e.id}>
                <Image width={100} height={40} src={e.img} alt={e.alt} />
              </div>
            ))}
          </div>
        </HomeSection>
        <HomeSection name={"top categories"}>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-8 mt-10">
            {topCategoriesItems.map((e) => (
              <div
                className="flex flex-col items-center justify-center gap-3 font-semibold text-sm"
                key={e.id}
              >
                <div>
                  <Image width={100} height={40} src={e.img} alt={e.alt} />
                </div>
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </HomeSection>
      </section>
      {/* featured-section-end */}
      {/* Deals-of-the-day-start */}
      <section className="grid grid-cols-8 gap-4 mt-4">
        <div className="col-span-6">
          <div className="bg-primary rounded-[10px]">
            <h1 className="text-lg text-white font-bold px-7 py-5">
              Deals of the day
            </h1>
          </div>
          <div className=""></div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <div className="">
              <Image
                src={"/banner/ban1.png"}
                width={500}
                height={177}
                alt="banner"
              />
            </div>
            <div className="">
              <Image
                src={"/banner/ban2.png"}
                width={500}
                height={177}
                alt="banner"
              />
            </div>
            <div className="">
              <Image
                src={"/banner/ban3.png"}
                width={500}
                height={177}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Deals-of-the-day-end */}
    </main>
  );
}
