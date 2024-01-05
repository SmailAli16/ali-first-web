import fodra from "../assets/foodra.png";
import minLOGO from "../assets/minLOGO.png";
import bgMenu from "/bgMenu.png";
import I1 from "/1.png";
import I2 from "/2.png";
import I3 from "/3.png";
import data from "./Data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [eat, setEat] = useState([]);
  const data = [
    
      {
      lien: "/pizza italienne.png",
      title: " plats les plus appréciés dans le monde entier",
      descreption: "  very healthy   ",
      time: " 10 mint",
      price: "250.00 DA",
      lastPrice: "300.00 DA",
      type: "pizza",
      Info:"La pizza italienne est l’un des plats les plus appréciés dans le monde entier, et c’est facile à comprendre avec sa combinaison parfaite de pâte croustillante, de sauce savoureuse et de toppings frais et savoureux. Si vous voulez essayer de préparer une pizza italienne traditionnelle vous-même, lisez cet article Souvenez-vous : la clé pour réussir une pizza italienne traditionnelle est d’utiliser des ingrédients de qualité et de prendre le temps de bien pétrir (et laisser reposer) la pâte. Il est bon de noter également qu’une pâte à pizza peut être de différents types, c’est à dire qu’il est possible de préparer une pizza à partir d’une pâte filo, de feuilles de brick, et même à partir de chou-fleur si vous souhaitez une alternative healthy et vegan !"
    },
    {
      lien: "/1.png",
      title: "salad and panini",
      descreption: "very delesieuse ",
      time: "10 mint",
      price: "02 €",
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
      "lien": "/pepperoni pizza.png",
      "title": " PLAT PIZZA PERF MTA9EB 79-3 1ER CHOI ",
      "descreption": "  very healthy   ",
      "time": " 6 mint",
      "price": "250.00 DA",
      "lastPrice": "30$",
      "type": "berger",
      "Info":"savoureux pepperoni pizza et ingrédients de cuisine tomates basilic sur fond de béton noir. Vue de dessus de pizza pepperoni chaud.Avec espace de copie pour le texte. Pose plate. Bannière. — Image de vasiliybudarin"
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
      type: "Mimiuo Pelle à Pizza en bambou"
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
   
;

  // const data=data.img
  return (
    <div className=" flex flex-col mt-[-00px]  h-screen w-full">
      {/* <img src={bgMenu} alt="" className=" h-[500px]" /> */}
      <button className=" h-16 btn btn-error text-xl  m-8 justify-center">
        Menu
      </button>
      <div className=" mt-5 flex  h-hull justify-center  items-start">
          <select name="" id="" className=" text-lg pt-3 flex justify-start items-start text-start btn btn-outline   focus: btn-error     w-1/2 h-10 rounded-xl text-black hover:border-b-4">
            <option value="">All</option>
            <option value="">pizza</option>
            <option value="">burger</option>
            <option value="">turque</option>
            <option value="">pates</option>
            <option value="">indien</option>
            <option value="">asiatique</option>
            <option value="">Tacos</option>
            <option value="">kabab</option>
            <option value="">syrien</option>
            <option value="">street food</option>
            <option value="">Grillades</option>
            <option value="">italien</option>
            <option value="">traditionel</option>
            <option value="">sandwiches</option>
            <option value="">Crêpes</option>
            <option value="">Libanais</option>
            <option value="">boissons</option>
            <option value="">desserts</option>
            <option value="">patisserie</option>
          </select>

      </div>

      
      <div className=" flex justify-center mt-10 flex-wrap  ">
        <p className=" text-xl m-20">
          Thousands of items delivered to your door:{" "}
          <span className="text-2xl text-red-600">foodora Market</span> market
          is Sweden's lightning-fast online supermarket. Order groceries, fresh
          fruit & vegetables, sweet & savory snacks, beverages as well as
          household products and have everything delivered within just 15
          minutes. Discover our rapidly growing offer and order conveniently at
          supermarket prices!
        </p>
        {data.map((key) => {
          return (
            <div className=" bg-gray-200  cart w-1/4 flex-wrap text-left m-10 p-4 h-[550px] border border-black rounded-lg  ">
              <img src={key.lien} alt="" className="h-72 w-full" />
              <h1 className="  text-xl font-bold m-2">{key.title}</h1><p>{ key.type}</p>
              <p className=" p-2 ">
                le temp est
                <span className="text-xl  text-red-900"> {key.time}</span>
              </p>
              <label htmlFor="" className=" text-xl font-bold ">
                prix =
              </label>
              <button className=" text-lg text-black ml-3 bg-[green] w-1/2 h-10 rounded-3xl ">
                {key.price}
              </button>
              <div className=" flex gap-1 my-3 ">
                <button className="btn btn-outline bg-red-600  w-1/2 ">
                  <Link to="/info"> learn mor</Link>
                </button>
                <button className="btn  btn-outline btn-error w-1/2 ">
                  Ajoute
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
