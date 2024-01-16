import fodra from "../assets/foodra.png";
import minLOGO from "../assets/minLOGO.png";
import bgMenu from "/bgMenu.png";
import I1 from "/1.png";
import I2 from "/2.png";
import I3 from "/3.png";
import data from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";


const Menu = () => {
   const [eat, setEat] = useState(data);
    const [search, setSearch] = useState("");
    const [repas, setRepas] = useState("All");
  const [imagePath, setImagePath] = useState('');

      const handleLinkClick = (imagePath) => {
        setImagePath(imagePath);
      };

  


  return (
    <div className=" flex flex-col w-full">
      {/* <img src={bgMenu} alt="" className=" h-[500px]" /> */}
      <button className=" h-16 w-9/10 btn btn-error text-xl  m-8 justify-center">
        Menu
      </button>
      <div className="  flex h-[40px] m-full justify-center items-center gap-2  ">
         
        <div className=" checked:bg-rose-800"><button className="btn btn-outline hover:btn-error " value={repas} onClick={() => {
              setRepas("All");
            }}>All</button></div>
        <div><button className="btn btn-outline  hover:btn-error" value={repas} onClick={() => {
              setRepas("pizza");
            }}>pizza</button></div>
        <div><button className="btn btn-outline  hover:btn-error" value={repas} onClick={() => {
              setRepas("pasta");
            }}>pasta</button></div>
        <div><button className="btn btn-outline  hover:btn-error" value={repas} onClick={() => {
              setRepas("italien");
            }}>italien</button></div>
        <div  className="btn btn-outline  hover:btn-error"  ><button value={repas} onClick={() => {
              setRepas("turque");
            }}>turque</button></div>
        <div><button className=" btn btn-outline  hover:btn-error" value={repas} onClick={() => {
              setRepas("asiatique");
            }}>asiatique</button></div>
        <div><button className=" btn btn-outline  hover:btn-error"value={repas} onClick={() => {
              setRepas("burger");
            }}>burger</button></div>
        <div><button className="btn btn-outline  hover:btn-error " value={repas} onClick={() => {
              setRepas("boissent");
            }}>boissent</button></div>
        

      </div>

      
      <div className=" flex justify-center mt-10 flex-wrap  ">
        <p className=" text-xl m-20">
          Thousands of items delivered to your door
          <span className="  text-2xl text-red-600"><Link to="#"> foodora Market</Link></span> market
          is Sweden's lightning-fast online supermarket. Order groceries, fresh
          fruit & vegetables, sweet & savory snacks, beverages as well as
          household products and have everything delivered within just 15
          minutes. Discover our rapidly growing offer and order conveniently at
          supermarket prices!
        </p>
        {eat.map((key,i) => {
                      if (
                        (key.type.toLowerCase().includes(search.toLowerCase()) && repas == "All") ||repas == key.type
                      )
                        return (
                          <div className=" bg-gray-200 gap-10  cart w-1/4 flex-wrap text-left m-10 p-4 h-[640px] border border-black rounded-lg  ">
                            <img
                              src={key.lien}
                              alt=""
                              className="h-72 w-full"
                            />
                            <h1 className=" max-h-min-[10px]:  text-xl font-bold m-2">
                              {key.title}
                            </h1>
                            <p className=" uppercase">*{key.type}*</p>
                            <p className=" my-4 ">
                              <span className=" text-gray-500">
                                le temp est
                              </span>
                              <span className="text-xl  mx-5 underline  text-red-900">
                                {key.time}
                              </span>
                            </p>
                            <label htmlFor="" className=" text-xl font-bold ">
                              prix =
                            </label>
                            <button className=" my-4 text-lg text-black ml-3 bg-green-600 w-1/2 h-10 rounded-3xl hover:text-xl ">
                              {key.price}
                            </button>
                            <div className=" flex">
                              <AiFillStar className=" text-[#d5ab55]" />
                              <AiFillStar className=" text-[#d5ab55]" />
                              <AiFillStar className=" text-[#d5ab55]" />
                              <AiFillStar className=" text-[#d5ab55]" />
                              <AiFillStar className=" text-[#d5ab55]" />
                            </div>
                            <div className=" flex gap-1 my-10 ">
                              <button
                                className="btn btn-outline  w-1/2 "
                                onClick={() => handleImageClick(key.link)}
                              >
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
