import food from "../assets/minLOGO.png";
import chario from "../assets/char.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Barre = () => {
  const [search,setSearch]=useState()
  return (
    <>
      {/* <header class="fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center"> */}

      <div className="flex  flex-col bg-[#444] ">
        <div className="  flex  justify-between items-center  fixed   z-50 w-fill px-1 bg-[#333] w-full ">
          <div className="w-1/2 h-20 flex ">
            <img src={food} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <ul className="flex gap-10 font-bold text-2xl mt-">
              {/* <li className="btn"><Link to="/H">Home</Link></li> */}
              <li className=" text-gray-300 hover:text-base-200 mt-5  mx-2 hover:border-b-lime-400 hover:border-b-2 ">
                <Link to="/">Home</Link>
              </li>
              <li className="mt-5 mx-2 text-gray-300 hover:text-base-200 hover:border-b-lime-400 hover:border-b-2 ">
                <Link to="/Menu">Menu</Link>
              </li>
              <li className="mt-5 mx-2 text-gray-300 hover:text-base-200 hover:border-b-lime-400 hover:border-b-2 ">
                <Link to="/About">About </Link>
              </li>
              <li className="mt-5 mx-2 text-gray-300 hover:text-base-200 hover:border-b-lime-400 hover:border-b-2 ">
                <Link to="/Contact">Contact</Link>
              </li>

              <div className=" relative">
                <li className="btn border-pink-600  btn-outline  hover:bg-pink-500 my-1 text-white h-16 w-40 ml-20">
                  <Link to="/Login">Oreder Nows!</Link>
                </li>
                <Link to="/Tecket">
                  <img
                    src={chario}
                    alt=""
                    className="text-gray-300 hover:text-base-200 h-16 w-16 absolute top-[1px] right-48 border-transparent hover:border-b-4 hover:border-b-lime-400"
                  />
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="bg-base-300">
          <form className="  mt-28 w-full h-16  px-2">
            <label
              for="default-search"
              class="mb-8 text-lg font-medium text-gray-900 sr-only dark:text-white"
            >
              food find
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-lg  border border-gray-800 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 text-darck dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                class=" text-blackl absolute end-2.5 bottom-2.5 bg-blue-100 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                find Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Barre;
