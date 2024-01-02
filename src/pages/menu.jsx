import fodra from "../assets/fodra.png";
import minLOGO from "../assets/minLOGO.png";
import bgMenu from "../assets/bgMenu.png";
import I1 from "../assets/1.png";
import I2 from "../assets/2.png";
import I3 from "../assets/3.png";
import data from "../pages/Data.json";
import {Link} from "react-router-dom"

const Menu = () => {
  // const data=data.img
  return (
    <div className=" flex flex-col mt-[-00px]  h-screen w-full">
      {/* <img src={bgMenu} alt="" className=" h-[500px]" /> */}
      <button className=" h-16 btn btn-error text-xl  m-8 justify-center">
        Menu
      </button>
      <div className=" mt-5 flex gap-5 h-hull justify-center  items-center">
        <button className="btn btn-primary  w-[45%]">search by category</button>

        <button className="btn btn-primary  w-[45%]">search by title</button>
      </div>

      <form className=" mt-10">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
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
            class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 text-darck dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class=" text-blackl absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className=" flex justify-center mt-10 flex-wrap  ">
        <p className=" text-xl m-20">
          Thousands of items delivered to your door: <span className="text-2xl text-red-600">foodora Market</span>{" "}
          market is Sweden's lightning-fast online supermarket. Order groceries,
          fresh fruit & vegetables, sweet & savory snacks, beverages as well as
          household products and have everything delivered within just 15
          minutes. Discover our rapidly growing offer and order conveniently at
          supermarket prices!
        </p>

        <div className=" bg-gray-500  cart w-1/5 flex-wrap text-left m-2 p-2 h-[500px] border border-black rounded-lg  ">
          <img src={I1} alt="" />
          <h1 className=" text-base-300 text-lg font-bold m-2">
            title images n1
          </h1>
          <p className=" p-2 text-base-300"> le temp est <span className="text-xl  text-red-800">15 mnt</span></p>
          <label htmlFor="">prix = </label>
          <button className="btn btn-outline ">
            300$ <span className="  text-red-900 line-through ">200$</span>
          </button>
          <div className=" flex gap-1 my-3 ">
            <button className="btn btn-outline  w-1/2 ">
              <Link to="/info"> learn mor</Link>
            </button>
            <button className="btn btn-active btn-outline w-1/2 ">
              {" "}
              Ajoute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
