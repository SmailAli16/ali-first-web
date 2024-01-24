import backg from "../assets/bagr.png";
import hover from "../assets/hover.png";
import { Link } from "react-router-dom";
import imge from "/9.png"
import photo from "/4.png"
import phot from "../assets/6.png";
import data from "./data";
import { useState } from "react";


const Home = () => {
    const [cart, setCart] = useState([]);
  const eat = data;
  return (
    <>
      {eat.map((key, i) => {
        // if (
        //   key.type !== poissent &&
        //   key.type !== indien &&
        //   key.type !== turque &&
        //   key.type !== bourak
        // )
          return (
            <>
              <div className=" flex  gap-10  ">
                <div className=" flex flex-col mx-10">
                  <div className="  hover:border-2 hover:border-red-300 flex justify-center items-center my-2 gap-8 border border-base-300 p-10">
                    <img src={key.lien} alt="" className=" h-52 w-1/2" />
                    <div className=" w-1/2">
                      <p className="  w-2/2 ">
                        {key.info}
                      </p>

                      <div className=" gap-5 flex justify-around mt-10">
                        <button className="btn btn-outline text-red-600">
                          <Link to="/Info">read more</Link>
                        </button>
                        <button className="btn bg-red-500"> Ajouter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
      })}
      
    </>
  );
};
export default Home;

