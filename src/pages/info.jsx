import pic from "/2.png";
import dat from "./Data.json";
import { useState } from "react";
import { Link } from "react-router-dom";

 const data = [
   {
     lien: "/1.png",
     title: "salad and panini",
     descreption: "very delesieuse ",
     time: "10 mint",
     price: "02 $",
     lastPrice: "30$",
     type: "asiatique",
     Info: "savoureux pepperoni pizza et ingrédients de cuisine tomates basilic sur fond de béton noir. Vue de dessus de pizza pepperoni chaud.Avec espace de copie pour le texte. Pose plate. Bannière. — Image de vasiliybudarin",
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
     lien: "/pepperoni pizza.png",
     title: " PLAT PIZZA PERF MTA9EB 79-3 1ER CHOI ",
     descreption: "  very healthy   ",
     time: " 6 mint",
     price: "250.00 DA",
     lastPrice: "30$",
     type: "berger",
     Info: "savoureux pepperoni pizza et ingrédients de cuisine tomates basilic sur fond de béton noir. Vue de dessus de pizza pepperoni chaud.Avec espace de copie pour le texte. Pose plate. Bannière. — Image de vasiliybudarin",
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
  return (
    <>
      <div className="flex flex-wrap gap-10 ">
        <div className=" mt-10 m-full p-1 flex  border border-gray-600  gap-10 justify-center items-center  h-[500px] w-full ">
          <img src="pepperoni pizza.png" alt="" className="h-2/3 w-2/3  " />

          <div className="flex flex-col  gap-1 h-96 w-2/3   ">
            <p className=" flex items-center text-lg h-screen w-2/3">
              savoureux pepperoni pizza et ingrédients de cuisine tomates
              basilic sur fond de béton noir. Vue de dessus de pizza pepperoni
              chaud.Avec espace de copie pour le texte. Pose plate. Bannière. —
              Image de vasiliybudarin,
            </p>
            <div className="flex">
              <button className=" w-1/3 m-3 flex justify- btn btn-outline bg-red-400 hover:bg-pink-600 hover:corsur ">
                Ajouter
              </button>
              <button className=" w-1/3 m-3 flex justify- btn btn-outline bg-red-400 hover:corsur">
                <Link to="/Menu">retour au menu</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {data.map((key) => {
        return (
          <div className="flex flex-wrap gap-10 ">
            <div className=" mt-10 m-full p-1 flex  border border-gray-600  gap-10 justify-center items-center  h-[500px] w-full ">
              <img src={key.lien} alt="" className="h-2/3 w-2/3  " />

              <div className="flex flex-col  gap-1 h-96 w-2/3   ">
                <p className=" flex items-center text-lg h-screen w-2/3">
                  {key.Info}
                </p>
                <button className=" w-1/2 flex justify- btn btn-outline bg-red-400">
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Info;
