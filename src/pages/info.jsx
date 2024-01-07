import pic from "/2.png";
import data from "./data";
import { useState } from "react";
import { Link } from "react-router-dom";


const Info = () => {
  const [Count, setCount] = useState([]);
  return (
    <>
      <div className="flex flex-wrap gap-10 ">
        <div className=" mt-10 m-full p-1 flex  border border-gray-600  gap-10 justify-center items-center  h-[500px] w-full ">
          <img src="pepperoni pizza.png" alt="" className="h-2/3 w-2/3  " />

          <div className="flex flex-col  gap-1 h-96 w-2/3   ">
            <p className=" flex items-center text-lg h-screen w-2/3">
              savoureux pepperoni pizza et ingrédients de cuisine tomates
              basilic sur fond de béton noir. Vue de dessus de pizza pepperoni
              chaud.Avec espace de copie pour le texte. Pose plate. Bannière. —
              Image de vasiliybudarin,
            </p>
            <div className="flex">
              <button className=" w-1/3 m-3 flex justify- btn btn-outline bg-red-400 hover:bg-pink-600 hover:corsur ">
                Ajouter
              </button>
              <button className=" w-1/3 m-3 flex justify- btn btn-outline bg-red-400 hover:corsur">
                <Link to="/Menu">retour au menu</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {data.map((key) => {
        return (
          <div className="flex flex-wrap gap-10 ">
            <div className=" mt-10  p-1 flex  border border-gray-600  gap-10 justify-center items-center  h-[700px] w-3/2">
              <img src={key.lien} alt="" className="h-2/3 w-1/3  " />

              <div className="flex flex-col  gap-1 h-2/2 w-2/3   ">
                <p className=" flex items-center text-lg h-1/1 w-2/3">
                  {key.Info}
                </p>
                <div className="flex">
                  <button className=" w-1/3 m-3 flex justify- btn btn-outline bg-red-400 hover:bg-pink-600 hover:corsur ">
                    Ajouter
                  </button>
                  <button className=" w-1/3 m-3 flex justify- btn btn-outline bg-red-400 hover:corsur">
                    <Link to="/Menu">retour au menu</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Info;
