
import pic from "../assets/2.png"

const Info = () => {
    return (
      <>
        <div className=" flex flex-col justify-start items-start gap-1">
          <div className="flex justify-center gap-10 ">
            <img src={pic} alt="" className="h-[400px] w-1/3 mx-4 " />
            <p className=" flex items-center text-lg h-screen w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              consequatur animi soluta a voluptatem natus sapiente
            </p>
          </div>
          <button> Ajouter</button>
        </div>
      </>
    );
}
export default Info;