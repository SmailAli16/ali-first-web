import icon from "../assets/ph_lock-key-fill.svg";
import envlop from "../assets/ph_envelope-simple-fill.svg";
import tel from "../assets/telephone.png";
import { Link } from "react-router-dom";
import food from "../assets/minLOGO.png";
import Header from "./header.jsx";

export const Login = () => {

  return (
    <>
      <div className="main ml-[300px] mr-[300px] mt-10  gap-4 p-2 flex flex-col ">
        <Header></Header>
        <div className="flex items-center m-auto ">
          <img src={food} alt="" className="boder rounded-3xl h-16 w-full" />
        </div>
        <div className="  flex flex-col m-auto bg-base-200 p-10 rounded-lg shadow-md ">
          <h1 class="font-bold text-3xl mt-4 mb-4    text-left ">Login</h1>
          <spam className="text-gray-500 text-left mt-2 mb-2">
            Add your details below to get back into the app
          </spam>
          <label htmlFor="" className=" mb-0">
            Email Adress
          </label>
          <div className=" relative w-full ">
            <input
              type="text"
              placeholder="e.g.alex@email.com"
              class="input input-bordered w-full pl-8"
            />
            <img className=" absolute left-2 top-4" src={envlop} alt="" />
          </div>
          <label htmlFor="" className=" mt-4">
            your number phon
          </label>
          <div className=" relative w-full ">
            <input
              type="number"
              placeholder="your phon number"
              class="input input-bordered w-full pl-8"
            />
            <img
              className=" absolute left-2 top-5 bg-base-100 h-3 w-3"
              src={tel}
              alt=""
            />
          </div>
          <label htmlFor="" className=" mt-4 ">
            Password
          </label>
          <div className=" relative w-full mt-2">
            <img src={icon} alt="" className=" absolute left-2 top-4" />
            <input
              type="password"
              placeholder="Enter your password"
              className=" input input-bordered w-full pl-8 "
              maxLength={10}
            />
          </div>
          <button className="btn bg-pink-500 hover:bg-pink-800 mt-6">
            <Link to="/Menu">Login</Link>
          </button>
          <div className=" mb-10">
            <span className=" text-gray-500 mt-2 text-sm">
              Don't have an account?
            </span>
            <Link to="/Menu" className=" text-primary ml-12 mb-[30px]">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
