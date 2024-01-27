import pic from "/2.png";
import data from "./data";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu.jsx";
import Header from "./header.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../CartContext";




  const Info = () => {
    const cartCtx = useContext(CartContext);

  const { produit } = useParams();

  const [Count, setCount] = useState();
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const productObj = data[produit];
  const imagePath = productObj.lien;
  const imagType = productObj.info;
  const imagName = productObj.name;
  const imagttip = productObj.type;
  const imagdescreption = productObj.descreption;


  useEffect(() => {
    window.scrollY = 0;
    window.scrollBy(-9999, -999999);
  }, []);

  
    
      return (
        <div className="flex  h-screen w-full gap-10  p-10 m-10  border border-gray-600 ">
          <div className=" px-10 mt-1 m- p-1 flex   gap-1 justify-center items-center  h- w-full ">
            {imagePath && <img src={imagePath} alt={"image clequee"} />}
          </div>
          <div className=" px-10 mt-10 m-full p-1 flex flex-col    gap-1 justify-center items-center  h-[500px] w-full ">
            <div className="flex flex-col gap-5 text-3xl font-extralight h-96 border-3 p-10 border hover:border-black">
              <div className=" flex justify-start items-start m-  text-left text-sm">
                <AiFillStar className=" text-[#d5af55]" />
                <AiFillStar className=" text-[#d5ab55]" />
                <AiFillStar className=" text-[#d5ab55]" />
                <AiFillStar className=" text-[#d5ab55]" />
                <AiFillStar className=" text-[#d5ab55]" />
                <AiFillStar className=" text-[#d5ab55]" />
                <p className=" items-center ml-3 text-center">123. Reviews</p>
              </div>

              <div className=" text-3xl font-semibold">{imagName}....</div>
              <div className=" font-normal text-red-400 ">{imagttip}</div>
              <div>{imagType}</div>
              <div className="   text-lg">
                {imagdescreption}
              </div>
            </div>

            <div className="flex flex-col  gap-1 h-96 w-[500px]  ">
              <div className="flex text-center gap-4   ">
                <button
                  onClick={() => {
                    cartCtx.addItem(i, 1);
                  }}
                  className="btn  btn-outline btn-error w-52 mt-10 p-4   "
                >
                  Ajoute
                </button>
                <Link
                  to="/Menu"
                  className=" w-52 mt-10 p-4  flex  btn btn-outline bg-red-400 hover:corsur"
                >
                  retour au menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      );

  
};

export default Info;
