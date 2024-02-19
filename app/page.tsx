"use client";

import React, { useState } from "react";
import { CartDropDown } from "./LocalComponents/CartDropdown";

import { toast } from "react-toastify";
import { LightBox } from "./LocalComponents/LightBox";
import Image from "next/image";

export type cart = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};
const ProducPage = () => {
  const [cart, setCart] = useState<cart[]>([]);

  const updateCart = (n: cart) => {
    setCart((prevCart) => [...prevCart, n]);
    toast.success(`${n.name} added to Cart!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <NavComponent clearCart={clearCart} cart={cart} />
      <Hero update={updateCart} />
    </div>
  );
};

function NavComponent({
  cart,
  clearCart,
}: {
  cart: cart[];
  clearCart: () => void;
}) {
  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-4 items-center">
          <div>
            <Image width={150} height={150} src="/logo.svg" alt="" />
          </div>

          <div className="hidden md:visible md:flex items-center gap-4 text-gray-500">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="relative">
            <p className="absolute text-sm px-2 bg-Orange rounded-full bottom-4 text-white cursor-pointer right-0">
              {cart.length}
            </p>
            <CartDropDown clearCart={clearCart} cart={cart} />
          </div>
          <div>
            <Image
              width={25}
              height={25}
              className="w-10"
              src="/image-avatar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ update }: { update: (n: cart) => void }) {
  const [imagePosition, setImagePosition] = useState(1);

  const [activeImage, setActiveImage] = useState(
    `image-product-${imagePosition}`
  );

  const [quantity, setQuantity] = useState(1);

  const imageSwitcher = () => {
    return Array.from(new Array(4)).map((x, i) => {
      return (
        <Image
          width={50}
          height={50}
          onClick={() => setActiveImage(`image-product-${i + 1}`)}
          key={i}
          className={`w-20 rounded-md cursor-pointer hover:opacity-35 transition-opacity ${
            activeImage === `image-product-${i + 1}`
              ? "border-Orange border-2 md:opacity-35 opacity-90"
              : ""
          }`}
          src={`/image-product-${i + 1}-thumbnail.jpg`}
          alt=""
        />
      );
    });
  };

  return (
    <div className="p-6 flex flex-col md:flex-row">
      <div className="md:w-[50%]  flex flex-col justify-center items-center">
        <div className="md:w-3/4 rounded-3xl relative">
          {imagePosition !== 1 && (
            <Image
              width={50}
              height={50}
              onClick={() => {
                if (imagePosition >= 1) {
                  setImagePosition((prevPosition) => prevPosition - 1);
                  setActiveImage(`image-product-${imagePosition - 1}`);
                }
              }}
              className="absolute left-6 bg-white px-4 py-3 rounded-full top-36 cursor-pointer md:invisible visible"
              src="/icon-previous.svg"
              alt=""
            />
          )}
          <LightBox switcher={imageSwitcher}>
            <Image
              width={500}
              height={500}
              className=" md:rounded-3xl"
              src={`/${activeImage}.jpg`}
              alt=""
            />
          </LightBox>
          {imagePosition !== 4 && (
            <Image
              width={50}
              height={50}
              onClick={() => {
                if (imagePosition <= 3) {
                  setImagePosition((prevPosition) => prevPosition + 1);
                  setActiveImage(`image-product-${imagePosition + 1}`);
                }
              }}
              className="absolute right-6 top-36 bg-white px-4 py-3 rounded-full cursor-pointer md:invisible visible"
              src="/icon-next.svg"
              alt=""
            />
          )}
        </div>
        <div className="hidden md:visible md:flex md:gap-4 gap-2 justify-center md:mt-6 mt-2">
          {imageSwitcher()}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center md:w-1/2 md:px-10 px-2 md:pt-20 pt-8">
        <div className="flex flex-col gap-6">
          <p className="text-Orange font-bold">SNEAKER COMPANY</p>
          <p className="font-bold text-5xl">Fall Limited Edition Sneakers</p>
          <p className="text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the weather can offer.
          </p>
          <div className="flex md:flex-col flex-row md:items-start items-center justify-between">
            <p className="text-4xl font-bold flex items-center">
              $125.00
              <span className="text-Orange ml-4 bg-Pale_orange text-sm p-2 rounded">
                50%
              </span>
            </p>
            <p className="text-gray-500 line-through">$250.00</p>
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="flex gap-4 items-center bg-gray-100 md:w-fit px-12 py-2 justify-between">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
                className="font-bold text-2xl text-Orange"
              >
                <Image width={10} height={10} src="/icon-minus.svg" alt="" />
              </button>
              <p className="font-bold  text-black">{quantity}</p>
              <button
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
                className="font-bold text-2xl cursor-pointer  text-Orange"
              >
                <Image width={10} height={10} src="/icon-plus.svg" alt="" />
              </button>
            </div>
            <div
              onClick={() =>
                update({
                  name: "Fall Limited Edition Sneakers",
                  price: 125,
                  quantity,
                  image: "image-product-1-thumbnail.jpg",
                })
              }
              className="px-12 py-2 bg-Orange rounded flex items-center justify-center cursor-pointer text-white  gap-2"
            >
              <Image
                className="text-white"
                width={25}
                height={25}
                src="/icon-cart white.svg"
                alt=""
              />
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducPage;
