import fodra from "../assets/foodra.png";
import minLOGO from "../assets/minLOGO.png";
import bgMenu from "/bgMenu.png";
import data from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Tecket from "./tecket";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Menu = () => {
  const cartCtx = useContext(CartContext);

  const [eat, setEat] = useState(data);
  const [search, setSearch] = useState("");
  const [repas, setRepas] = useState("All");
  const [cart, setCart] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const products = data;

  useEffect(() => {
    window.scrollY = 0;
    window.scrollBy(-9999, -999999);
  }, []);



  // Fonction pour ajouter un produit au panier

  return (
    <div className=" flex flex-col w-full">

      <button className=" h-16 w-9/10 btn btn-error text-xl  m-4 justify-center">
        Menu
      </button>
      <div className="  flex h-[40px] m-full justify-center items-center gap-2  ">
        <div className=" checked:bg-rose-800">
          <button
            className="btn btn-outline hover:btn-error "
            value={repas}
            onClick={() => {
              setRepas("All");
            }}
          >
            All
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline  hover:btn-error "
            value={repas}
            onClick={() => {
              setRepas("pizza");
            }}
          >
            pizza
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline  hover:btn-error"
            value={repas}
            onClick={() => {
              setRepas("pasta");
            }}
          >
            pasta
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline  hover:btn-error"
            value={repas}
            onClick={() => {
              setRepas("italien");
            }}
          >
            italien
          </button>
        </div>
        <div className="btn btn-outline  hover:btn-error">
          <button
            value={repas}
            onClick={() => {
              setRepas("turque");
            }}
          >
            turque
          </button>
        </div>
        <div>
          <button
            className=" btn btn-outline  hover:btn-error"
            value={repas}
            onClick={() => {
              setRepas("asiatique");
            }}
          >
            asiatique
          </button>
        </div>
        <div>
          <button
            className=" btn btn-outline  hover:btn-error"
            value={repas}
            onClick={() => {
              setRepas("burger");
            }}
          >
            burger
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline  hover:btn-error "
            value={repas}
            onClick={() => {
              setRepas("boissent");
            }}
          >
            boissent
          </button>
        </div>
      </div>

      <div className=" flex justify-center mt-1 flex-wrap  ">
        <p className=" text-xl m-20">
          Thousands of items delivered to your door
          <span className="  text-2xl text-red-600">
            <Link to="#"> foodora ITS Market</Link>
          </span>
          market is Sweden's lightning-fast online supermarket. Order groceries,
          fresh fruit & vegetables, sweet & savory snacks, beverages as well as
          household products and have everything delivered within just 15
          minutes. Discover our rapidly growing offer and order conveniently at
          supermarket prices!
        </p>

        {eat.map((key, i) => {
          if (
            (key.type.toLowerCase().includes(search.toLowerCase()) &&
              repas == "All") ||
            repas == key.type
          )
            return (
              <div className="cart shadow-xl bg-gray-200 gap-4 w-1/4 flex-wrap text-left m-5 p-4 my-10 h-[700px] border rounded-lg">
                <img
                  src={key.lien}
                  alt=""
                  className="h-2/3 rounded-2xl w-full  object-cover"
                />
                <div className="flex justify-between items-center">
                  <h1 className=" mr-4  text-xl font-bold my-2">
                    {key.name}
                  </h1>
                  <p className=" uppercase">*{key.type}*</p>
                </div>
                <div className="flex justify-between text-center">
                  <p className=" my-4 ">
                    <span className=" text-gray-500">tempt=</span>
                    <span className="text-xl   underline  text-red-800">
                      {key.time}
                    </span>
                  </p>

                  <button className=" my-4 text-lg text-black ml-3 bg-green-200 w-1/2 h-10 rounded-3xl hover:text-xl ">
                    {key.price}
                  </button>
                </div>

                <div className=" flex justify-between  items-center text-center ">
                  <div className=" flex justify-start items-start m-auto">
                    <AiFillStar className=" text-[#d5af55]" />
                    <AiFillStar className=" text-[#d5ab55]" />
                    <AiFillStar className=" text-[#d5ab55]" />
                    <AiFillStar className=" text-[#d5ab55]" />
                    <AiFillStar className=" text-[#d5ab55]" />
                    <AiFillStar className=" text-[#d5ab55]" />
                  </div>
                  <p className="text-gray-500 m-auto">
                    {" "}
                    <span className="text-xl">123</span>{" "}
                    <span className="text-gray-400 hover:underline">
                      reviews
                    </span>
                  </p>
                </div>
                <div className=" flex gap-1 my-10 ">
                  <Link
                    className="btn btn-outline  w-1/2 "
                    to={"/info/" + i}
                    onClick={() => {}}
                  >
                    {" "}
                    learn mor
                  </Link>
                  <button
                    onClick={() => {
                      cartCtx.addItem(i, 1);
                    }}
                    className="btn  btn-outline btn-error w-1/2 "
                  >
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
