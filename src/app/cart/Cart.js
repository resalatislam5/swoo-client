"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import img from "@/app/ass/prod27.png";
import { FaCheck } from "react-icons/fa";
function Cart() {
  const [summary, SetSummary] = useState([
    { name: "Sub Total:", value: 0 },
    { name: "Shpping estimate:", value: 500 },
    { name: "Tax estimate:", value: 0 },
  ]);
  const [totalOrder, SetTotatOrder] = useState(0);
  const [checkOutdata, setcheckOutdata] = useState([
    {
      id: 123,
      img: "",
      name: "SROK Smart Phone 128GB, Oled Retina",
      price: [{ style: "text-[#F1352B]", value: 579 }],
      count: 0,
      brandTag: [{ style: "", text: "Sava $199.00" }],
      tags: [{ style: "bg-[#EFF7EF] text-[#1ABA1A]", text: "FREE SHIPPING" }],
      color: [],
      stock: true,
    },
    {
      id: 223,
      img: "",
      name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
      price: [{ style: "text-black", value: 979 }],
      count: 0,
      brandTag: [{ style: "", text: "new" }],
      tags: [{ style: "bg-[#EFEFEF] text-[#222]", text: "$2.9 SHIPPING" }],
      color: [],
      stock: true,
    },
    {
      id: 323,
      img: "",
      name: "SROK Smart Phone 128GB, Oled Retina",
      price: [{ style: "text-black", value: 659 }],
      count: 0,
      brandTag: [{ style: "", text: "new" }],
      tags: [
        { style: "bg-[#EFF7EF] text-[#1ABA1A]", text: "FREE SHIPPING" },
        { style: "bg-[#FAF0F0] text-[#F1352B]", text: "FREE GIFT" },
      ],
      color: [],
      stock: false,
    },
  ]);

  const totalPrice = () => {
    const subTotal = checkOutdata.map((e) => {
      const total = Number(e.count) * Number(e.price[0]?.value);
      return total;
    });

    // sub total value update
    const subTotalValue = subTotal.reduce((p, c) => p + c, 0);
    summary[0].value = subTotalValue;
    // Shpping Tax value update
    const taxE = subTotalValue * 0.01;
    summary[2].value = taxE;

    //set Total order
    SetTotatOrder(summary.reduce((p, c) => p + c.value, 0));
  };
  const handelIncress = (_id) => {
    const c = checkOutdata.map((e) => {
      if (e.id === _id) {
        Number(e.count++);
      }

      return e;
    });
    setcheckOutdata(c);
    totalPrice();
  };
  const handelDecrease = (_id) => {
    const c = checkOutdata.map((e) => {
      if (e.id === _id) {
        if (e.count === 0) {
          e.count = 0;
        } else {
          Number(e.count--);
        }
      }

      return e;
    });
    setcheckOutdata(c);
    totalPrice();
  };
  useEffect(() => {
    totalPrice();
    console.log("use effect");
  }, []);
  return (
    <div className="container mx-auto bg-white p-10 rounded-xl my-5">
      <div className="grid lg:grid-cols-3 gap-8 items-end">
        {/* left */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {checkOutdata.map((e, i) => (
            <div
              className={`${
                e.stock ? "text-black" : "text-gray-400"
              } flex items-center gap-5 bg-[#FAFAFA] p-4`}
              key={i}
            >
              <div className="">
                <Image src={img} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <Link className="font-bold" href="/">
                  {e.name}
                </Link>
                <p
                  className={`text-bold text-lg font-bold ${e.price[0]?.style}`}
                >
                  ${e.price[0]?.value}.00
                </p>
                <div className="border rounded-xl w-[129px] py-3 px-5 flex justify-between font-bold">
                  <button
                    disabled={!e.stock}
                    onClick={() => handelDecrease(e.id)}
                  >
                    -
                  </button>
                  <span>{e.count}</span>
                  <button
                    disabled={!e.stock}
                    onClick={() => handelIncress(e.id)}
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-2">
                  {e.tags.map((e, i) => (
                    <p
                      key={i}
                      className={`${e.style} w-fit px-2 py-1 rounded-xl`}
                    >
                      {e.text}
                    </p>
                  ))}
                </div>
                <div className="font-bold">
                  {e.stock ? (
                    <div className="flex gap-2">
                      <p className="bg-[#1ABA1A] w-fit p-1 rounded-full text-white text-xs">
                        <FaCheck />
                      </p>
                      <p>In stock</p>
                    </div>
                  ) : (
                    <div className="flex gap-2 text-[#F1352B]">
                      <p className="bg-[#FAF0F0] w-fit p-1 rounded-full text-xs">
                        <FaCheck />
                      </p>
                      <p>Out of stock</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right */}
        <div className="border p-[31px] border-[#1ABA1A] rounded-xl h-fit float-end">
          <h2 className="text-base font-bold">Order Summary</h2>
          {summary.map((e, i) => (
            <div
              className="text-[#666] border-b py-3 flex justify-between"
              key={i}
            >
              <p>{e.name}</p>
              <span className="font-bold text-black">$ {e.value}</span>
            </div>
          ))}
          <div className="font-bold text-black py-3 flex justify-between">
            <p>ORDER TOTAL:</p>
            <span className="">$ {totalOrder}</span>
          </div>
          <div className="flex justify-center">
            <Link
              href="/"
              className="bg-[#1ABA1A] text-white w-[150px] py-4 rounded-md flex justify-center"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
