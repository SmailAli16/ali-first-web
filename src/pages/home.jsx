import backg from "../assets/bagr.png";
import hover from "../assets/hover.png";
import { Link } from "react-router-dom";
import imge from "/9.png"
import photo from "/4.png"
import phot from "../assets/6.png";

const Home = () => {
  return (
    <div className=" flex  gap-10 bg-phot ">
      <div className="flex flex-col h-screen gap-10 w-1/2 mx-10 m-2">
        <div className=" gap-6 flex flex-col justify-center items-center border border-base-300 p-10">
          <div>
            <img src={photo} alt="" className=" w-3/5 h-52" />
            <p className="  w-1/2 ">
              Grow your business while focusing on what you want to: making
              delicious food. Team up with foodora market and tap into a fresh
              audience.
            </p>
          </div>
          <div className=" gap-5 flex justify-between">
            <button className="btn btn-outline text-red-600"><Link to="/Info">read more</Link></button>
            <button className="btn bg-red-500"> Ajouter</button>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col h-screen w-5/6 mx-10 gap-10 ">
        <div className=" flex justify-center items-center gap-8 border border-base-300 p-10">
          <img src={imge} alt="" className=" w-1/2 h-52" />
          <p className="  w-1/2 ">
            At foodora market, we believe that freedom can be delivered. Whether
            it's a family size pizza, the finest sushi in town or groceries and
            other household items, we will deliver it.
          </p>
        </div>
        <div className=" flex justify-center items-center my-2 gap-8 border border-base-300 p-10">
          <img src={imge} alt="" className=" h-52 w-1/2" />
          <p className="  w-1/2 ">
            it's a family size pizza, the finest sushi in town or groceries and
            other household items, we will deliver it.
          </p>
        </div>
      </div>
    </div>
    //   </div>
  );
};
export default Home;

