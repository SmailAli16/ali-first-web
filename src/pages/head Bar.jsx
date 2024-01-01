
import food from "../assets/minLOGO.png"
import {Link} from "react-router-dom"

const Barre = () => {
    return (
      <>
        <div className="flex flex-col">
          <div className=" flex  justify-between items-center ">
            <div className="w-1/2 flex m">
              <img src={food} alt="" />
            </div>
            <div className="flex items-center justify-between gap-1 mb-8 ">
              <ul className="flex gap-10 font-bold text-2xl m-10">
                {/* <li className="btn"><Link to="/H">Home</Link></li> */}
                <li className="btn">
                  <Link to="/">Home</Link>
                </li>
                <li className="btn">
                  <Link to="/Menu">Menu</Link>
                </li>
                <li className="btn">
                  <Link to="/About">About us</Link>
                </li>
                <li className="btn">
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="btn btn-primary btn-outline">
                  <Link to="/Contact">Oreder Nows!</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <form className=" my-3 w-full">
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
          </div>
        </div>
      </>
    );
}
export default Barre;