
import image from "/2.png"
import icon from "../assets/ph_lock-key-fill.svg";
import envlop from "../assets/ph_envelope-simple-fill.svg";
import tel from "../assets/telephone.png";
import { Link } from "react-router-dom";
import food from "../assets/minLOGO.png";


const Contact = () => {
    return (
      <div>
        <div className="main ml-[300px] mr-[300px] mt-10  gap-4 p-2 flex flex-col ">
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
          <p>
            If you have inquiries, please reach out! Our team will be happy to
            hear from you.
          </p>
          <img src={image} alt="" className="w-2/3 " />
          <p className="w-1/3">
            For inquiries regarding Chef Foodra Market , speaking or appearance
            
          </p>
        </div>
        
        
        <footer className=" text-white bg-[#222] h-screen w-full my-11 p-14">
          <p>
            appearance engagements, press and partnership opportunities, please
            contact: is built on the three foundation pillars of offering unique
            dining experiences, discovering and championing emerging talent and
            supporting local producers.
          </p>
          <p>Copyright © 2023 foodora</p>
        </footer>
      </div>
    );
}
export default Contact;