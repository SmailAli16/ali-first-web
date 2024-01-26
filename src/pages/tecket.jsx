import { useState } from "react";
import data from "./data";
import Menu from "./menu";
import { createContext } from "react";
import { AiOutlineAmazon } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useEffect } from "react";

const Tecket = () => {
  const cartctx = useContext(CartContext);

  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = cartctx.items.reduce(
      (subtotal, item) => subtotal + item.count,
      0
    );
    const total = cartctx.items.reduce(
      (subtotal, item) => subtotal + data[item.id].priceValue * item.count,
      0
    );
    if (total > 1000) {
      const remis = total* 0.05;
    }

    setTotal(total);
    setCount(count);
  }, [cartctx.items]);

  useEffect(() => {
    window.scrollY = 0;
    window.scrollBy(-9999, -999999);
  }, []);
  const remis = ({ total } * 0.05);

  return (
    <div className="flex justify-center items-center pt-10 my-10">
      <div className="border border-black flex flex-col justify-center items-start  h-full w-2/3 ">
        <h1 className=" flex justify-center items-center ml-52 my-3 border-b-4   text-2xl font-bold text-red-700">
          <AiOutlineAmazon className="text-5xl text-red-200 hover:text-red-400" />{" "}
          Foodra ITS_Market
        </h1>
        <p className="ml-44"> Addresse: vald'ydra alger</p>
        <p className="ml-44">telephon: 021 00 00 00</p>
        <p className="ml-20 text-">
          *******************************************************************
        </p>
        <p className="flex flex-col ml-20">
          <span>Table N = ..</span>
          <span> date 27-01-2024</span>
        </p>
        <p className="ml-20">
          *******************************************************************
        </p>
        <div className="flex flex-col gap-4">
          <ul className=" grid grid-cols-6 grid-flow-col  justify-around items-center gap-2 mx-2">
            <li className=" grid col-span-2 text-center text-lg font-bold">
              designation
            </li>
            <li className="grid col-span-1 text-center text-lg font-bold justify-center items-center ml-3">
              Qte
            </li>
            <li className="grid col-span-1 text-center text-lg font-bold">
              Prix U
            </li>
            <li className="grid col-span-1 text-center text-lg font-bold">
              Montant
            </li>
            <li className="grid col-span-1 text-center text-lg font-bold">
              delete
            </li>
          </ul>
          {cartctx.items.map((item, i) => {
            const produit = data[item.id];
            return (
              <ul className=" grid grid-cols-6 grid-flow-col w-full justify-around gap-2 mx-2">
                <li className="col-span-2 gap-3 flex justify-start items-center text-lg">
                  {produit.name}
                </li>
                <li className=" col-span-1">
                  <div className="flex">
                    <button
                      onClick={() => cartctx.addItem(item.id, 1)}
                      className="btn btn-xs"
                    >
                      +
                    </button>
                    <p className="px-2">{item.count}</p>
                    <button
                      onClick={() => cartctx.removeItem(item.id, 1)}
                      className="btn btn-xs"
                    >
                      -
                    </button>
                  </div>
                </li>
                <li className=" col-span-1 justify-center items-center ">
                  {produit.priceValue}
                </li>
                <li className="grid col-span-1 justify-center items-center text-center">
                  {produit.priceValue * item.count}
                </li>
                <li className="grid col-span-1 items-center text-center">
                  <button
                    onClick={() => cartctx.removeItem(item.id, item.count)}
                    className="btn btn-xs btn-error w-fit"
                  >
                    Del
                  </button>
                </li>
              </ul>
            );
          })}
        </div>

        <p className="ml-20">
          _____________________________________________________________
        </p>

        <div className=" grid grid-cols-6 ">
          <div className="grid col-span-3 border  w-96 text-center text-lg font-bold">
            <p>SUB total  </p>
          </div>
          <div>
            <div className="grid col-span-3 border  text-center text-lg font-bold">
              <p>{total}</p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-6 ">
          <div className="grid col-span-3 border  w-96 text-center text-lg font-bold">
            <p>Tax </p>
          </div>
          <div>
            <div className="grid col-span-3 border  text-center text-lg font-bold">
              <p>{(total * 17) / 100} </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-6 ">

          
        </div>
        <div className=" grid grid-cols-6 ">
          <div className="grid col-span-3 border  w-96 text-center text-lg font-bold">
            <p> Net a payer  </p>
          </div>
          <div>
            <div className="grid col-span-3 border  text-center text-lg font-bold">
              <p>{(total * 117) / 100}</p>
            </div>
          </div>
        </div>

        <p className="text-xl ml-80 font-medium grid-cols-4 "></p>
        <p className="text-xl ml-80 font-medium grid-cols-4 ">
          {/* Remis=(if {total} <=1000) */}
        </p>
        <p className="text-xl ml-80 font-extrabold grid-cols-4"></p>
      </div>
    </div>
  );
};

export default Tecket;
