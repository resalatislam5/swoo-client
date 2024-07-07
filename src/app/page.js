import Link from "next/link";
import SliderBanner from "./HomeComponents/SliderBanner";
import banner2 from "@/app/ass/banner-2.png";
import banner3 from "@/app/ass/banner-3.png";
import banner4 from "@/app/ass/banner-4.png";
import banner5 from "@/app/ass/banner-5.png";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Banner-section-start */}
      <div className="mt-4">
        <div className="grid xl:grid-cols-4 gap-5">
          {/* left  */}
          <div className="xl:flex hidden flex-col gap-3 col-span-1 bg-white py-5 px-14 rounded-[10px]">
            <h4 className="text-[#F1352B] text-sm font-bold">SALE 40% OFF</h4>
            {[...Array(12)].map((e, i) => (
              <p className="text-[13px] font-semibold" key={i}>
                PC & Computers
              </p>
            ))}
          </div>
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
      </div>
      {/* Banner-section-end */}
      {/* featured-section-end */}
      <div className="py-20"></div>
    </main>
  );
}
