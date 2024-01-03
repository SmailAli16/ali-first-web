import pic from "/2.png";
import dat from "./Data.json";
import { useState } from "react";

const data = [
  {
    lien: "/1.png",
    title: "salad and panini",
    descreption: "very delesieuse ",
    time: "10 mint",
    price: "02 $",
    lastPrice: "30$",
    type: "asiatique",
  },
  {
    lien: "/2.png",
    title: " big djeez",
    descreption: "so delesieuse",
    time: "09 mint",
    price: "05 $",
    lastPrice: "30$",
    type: "asiatique",
  },
  {
    lien: "/3.png",
    title: "djeez double",
    descreption: "big djeez",
    time: "12 mint",
    price: "01 $",
    lastPrice: "30$",
    type: "asiatique",
  },
  {
    lien: "/7boisson.png",
    title: "boissons",
    descreption: "Cocacola",
    time: " now",
    price: "06 $",
    lastPrice: "30$",
    type: "boissons",
  },
  {
    lien: "/8.png",
    title: "soup vegetarien ",
    descreption: " very hot and delecieuse ",
    time: "18 mint",
    price: "03 $",
    lastPrice: "30$",
    type: "asiatique",
  },
  {
    lien: "/9.png",
    title: "bourak algerien ",
    descreption: " piquon and hot ",
    time: "13 mint",
    price: "04 $",
    lastPrice: "30$",
    type: "bourak",
  },
  {
    lien: "/10.png",
    title: "salad vegetarien ",
    descreption: " very healthy and delecieuse ",
    time: "7 mint",
    price: "2.03 $",
    lastPrice: "30$",
    type: "turque",
  },
  {
    lien: "/11fruit.png",
    title: "chiken delecieus  ",
    descreption: " healthing and delecieuse ",
    time: "16 mint",
    price: "01.06 $",
    lastPrice: "30$",
    type: "indien",
  },
  {
    lien: "/bbq.png",
    title: "salad vegetarien ",
    descreption: " very healthy and delecieuse ",
    time: "10 mint",
    price: "1.01 $",
    lastPrice: "30$",
    type: "Grillades",
  },
  {
    lien: "/bgMenu.png",
    title: " bg plat and salad vegetarien in table ",
    descreption: " very healthy and delecieuse with boissent ",
    time: "18 mint",
    price: "5.08 $",
    lastPrice: "30$",
    type: "italien",
  },
  {
    lien: "/double.png",
    title: " double cheese burger",
    descreption: " very healthy and delicious ",
    time: " 09 mint",
    price: "3.04 $",
    lastPrice: "30$",
    type: "burger",
  },
  {
    lien: "/fish.png",
    title: " fish with riz",
    descreption: " very healthy and delicious ",
    time: " 10mint",
    price: "2.04 $",
    lastPrice: "30$",
    type: "asiatique",
  },
  {
    lien: "/food berger.png",
    title: " mini berger ",
    descreption: " with vegetarien  ",
    time: " 6 mint",
    price: "1.02 $",
    lastPrice: "30$",
    type: "berger",
  },
  {
    lien: "/mix berger.png",
    title: " mini berger  with potatos and vegetarien and boissent",
    descreption: "  very healthy   ",
    time: " 6 mint",
    price: "1.02 $",
    lastPrice: "30$",
    type: "berger",
    type: "Mimiuo Pelle à Pizza en bambou",
  },
  {
    lien: "/mix berger.png",
    title: " PLAT PIZZA PERF MTA9EB 79-3 1ER CHOI ",
    descreption: "  very healthy   ",
    time: " 6 mint",
    price: "250.00 DA",
    lastPrice: "30$",
    type: "berger",
  },
];

const Info = () => {
  const [Count, setCount] = useState([]);
  const data = [];
  return (
    <>
      {data.map((key) => {
        return (
          <div className=" flex flex-col justify-center items-center  w-[700px] ">
            <div className="flex justify-center gap-10 h-96   mt-10">
              <img src={key.lien} alt="" className="h-[400px] w-1/3 mx-4 " />
              <p className=" flex items-center text-lg h-screen w-1/2">
                {key.Info}
              </p>
            </div>
            <button className="btn btn-outline bg-red-400"> Ajouter </button>
          </div>
        );
      })}
    </>
  );
};
export default Info;
