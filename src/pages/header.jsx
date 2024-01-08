import backg from "../assets/6.png";
import hover from "../assets/hover.png";
import {Link} from "react-router-dom"

const Header = () => {
 

  return (
    <div className=" flex flex-col h-screen">
      <div className=" relative  h-screen ">
        <img
          src={backg}
          alt=""
          className=" absolute right-1 w-full h-screen"
        />
        <div className=" absolute">
          <span className=" relative left-10 top-[100px] font-bold text-4xl text-black ">
            Good Food choices are good investments.
          </span>
        </div>
        <div className="flex flex-col">
          <div className=" flex   w-96 gap-4 absolute left-10 top-[600px]">
            <button className=" btn text-2xl btn-outline text-red-700  hover:font-bold hover:text-xl hover:bg-red-700 left-8 top-96">
              <Link to="/Menu"> Order now</Link>
            </button>
            <button className=" btn btn-error text-lg   hover:font-extrabold hover:bg-red-800  left-32 top-96 ">
              Learn more
            </button>
          </div>

          <p className=" h-20 m-full absolute left-[550px] top-[460px] text-white text-right text-2xl font-bold ">
            A progression of rare and beautiful ingredients where texture . <br />
            flavour and harmony is paramount.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
