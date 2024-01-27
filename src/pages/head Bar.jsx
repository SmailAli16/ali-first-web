import food from "../assets/minLOGO.png";
import chario from "../assets/char.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import CHario from "/chario.png";
import { FaBeer } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineAmazon } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useEffect } from "react";


const Barre = () => {
  const { items } = useContext(CartContext);
  const [search, setSearch] = useState();
  const [count, setCount] = useState(0);
  const total = items.reduce((p, c) => {
    console.log("p", p);
    return p + c.count;
  }, 0);
  useEffect(() => {
    window.scrollY = 0;
    window.scrollBy(-9999, -999999);
  }, []);

  console.log("total", total);

  return (
    <>
      <nav class="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 mb-52 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mb-">
          <Link to="#" className="flex items-center rtl:space-x-reverse">
            <AiOutlineAmazon className=" text-6xl text-red-300 "></AiOutlineAmazon>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FOODRA
              <span className=" btn-outline text-pink-800 bg-none hover:text-pink-400 ">
                ITS_Market
              </span>
            </span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
              <Link to="/Tecket" className="  flex items-center  mr-8 ">
                <h1 className="text-4xl -32">
                  <div className="indicator">
                    <span className="indicator-item badge badge-secondary">
                      {total}
                    </span>
                    <FaShoppingCart />
                  </div>
                </h1>
              </Link>
            </div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/Menu" className="mx-10 ">
                Order Now
              </Link>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center gap-20 justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-50 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Barre;
