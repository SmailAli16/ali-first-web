

import data from "./data"

const Tecket = () => {
  
    return (
      <div className="flex justify-center items-center my-10">
        <div className="border border-black flex flex-col justify-center items-start  h-full w-1/2 ">
          <h1 className="ml-52 my-3 border-b-4   text-2xl font-bold text-red-700">Foodra Market
          </h1>
          <p className="ml-44"> Addresse: vald'ydra alger</p>
          <p className="ml-44">telephon: 021 00 00 00</p>
          <p className="ml-20">
            **********************************************************
          </p>
          <p className="flex flex-col ml-20">
            <span>table n-3</span>
            <span> date 06-01-2024</span>
          </p>
          <p className="ml-20">
            **********************************************************
          </p>
          <div className="flex justify-around items-center w-full ">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold ">designation</h2>
              <ul>
                <li>
                </li>
              </ul>
                _______________________________________________________
              
              <p className="text-xl font- ml-96">SUB total = </p>
              <p className="text-xl font- ml-96">tax =</p>
              <p className="text-xl font-bold ml-96">Total : </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="text-xl font-bold">price</span>
              <span>{data.price }</span>
              
              <p className="ml-[-96px]">______________________</p>
              <span className="text"></span>
              <span className="text">3.1 $</span>
              <span className="text-xl font-bold">1203.1 $</span>
            </div>
          </div>
          <p className="ml-12">
            --------------------------------------------------------------------------------------
                </p>
                <p className=" btn mx-64 flex justify-center items-center text-center">**** thank you ****</p>
        </div>
      </div>
    );
}
export default Tecket;