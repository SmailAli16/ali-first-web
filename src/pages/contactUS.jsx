
import image from "/2.png"
import img from "/3.png"
import icon from "../assets/ph_lock-key-fill.svg";
import envlop from "../assets/ph_envelope-simple-fill.svg";
import tel from "../assets/telephone.png";
import { Link } from "react-router-dom";
import food from "../assets/minLOGO.png";
import { AiOutlineAmazon } from "react-icons/ai";


const Contact = () => {
    return (
      <div>
        <div className="main ml-[300px] mr-[300px] mt-20  gap-4 p-2 flex flex-col ">
          <div className="flex items-center m-auto ">
            <Link to="#" className="flex items-center rtl:space-x-reverse">
              <AiOutlineAmazon className=" text-6xl text-red-300 "></AiOutlineAmazon>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                FOODRA
                <span className=" btn-outline text-pink-800 bg-none hover:text-pink-400 ">
                  ITS_Market
                </span>
              </span>
            </Link>
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
            <button className="btn bg-red-500 mt-6">
              <Link to="/Menu">Login</Link>
            </button>
            <div className=" mb-10">
              <span className=" text-gray-500 mt-2 text-sm">
                Don't have an account?
              </span>
              <Link to="/Menu" className=" text-primary ml-12 mb-[30px]">
                Go to Menu
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <div className="flex flex-col gap-4 m-10">
            <img src={image} alt="" className="w-3/3 h-60 " />
            <img src={img} alt="" className="w-3/3 h-60" />
            <img src={img} alt="" className="w-1/1 h-60 " />
          </div>
          <div className=" flex flex-col gap-60">
            <p className=" h- w-2/3">
              If you have inquiries, please reach out! Our team will be happy to
              hear from you.
            </p>
            <p className="w-2/3">
              For inquiries regarding Chef Foodra Market , speaking or
              appearance
            </p>
            <p className="w-2/3">
              For inquiries regarding Chef Foodra Market , speaking or
              appearance
            </p>
          </div>
        </div>
      </div>
    );
}
export default Contact;