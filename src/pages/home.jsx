

import backg from "../assets/bagr.png";
import hover from "../assets/hover.png";
import { Link } from "react-router-dom";
import imge from "/9.png"
import photo from "/4.png"
import phot from "../assets/6.png";
import data from "./data";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useEffect } from "react";


const Home = () => {
  const cartCtx = useContext(CartContext);
  

  useEffect(() => {
    window.scrollY = 0;
    window.scrollBy(-9999, -999999);
  }, []);

    const [cart, setCart] = useState([]);
  const eat = data;
  const array = ["boissent" , "turque" , "bourak"];
  return (
            <div className=" border-l border-r border-error  w-3/4 mx-72">
      {eat.map((key, i) => {
       
          return (
            <div className="">
              <div className=" flex  gap-10 mt-16    mx-10 ">
                <div className=" flex flex-col mx-52 bg-gray-100 w-2/3 ">
                  <div
                    className="  hover:border-2 hover:border-red-300
                    flex justify-center items-center my-1 py-2 gap-8 border border-base-300 p-10"
                  >
                    <img
                      src={key.lien}
                      alt=""
                      className=" h-52 w-[600px] object-cover"
                    />
                    <div className=" w-1/3">
                      <p className="  w-2/2 ">{key.type}</p>
                      <p className="  w-2/2 ">{key.info}</p>

                      <div className=" gap-5 flex justify-around mt-10">
                        <Link
                          className="btn btn-outline  w-1/2 "
                          to={"/info/" + i}
                          onClick={() => {}}
                        >
                          
                          learn mor
                        </Link>
                        <button
                          onClick={() => {
                            cartCtx.addItem(i, 1);
                          }}
                          className="btn  btn-outline btn-error w-1/2 "
                        >
                          Ajoute
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
      })}
      
    </div>
  );
};
export default Home;

