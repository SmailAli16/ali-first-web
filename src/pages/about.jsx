import image from "../assets/plat berger.png";

const About = () => {
  return (
    <>
      <div className=" flex justify-end items-center gap-10">
        <div className="flex flex-col items-center justify-center text-center m-full h-screen w-1/3 gap-4 ">
          <p>
            <span className="text-red-800 ">Award-winning </span>
            culinary excellence, extensive hospitality knowledge and a unique
            family touch have combined to establish Foodora Market as a leader
            in innovation and quality in the restaurant
          </p>
          <p>
            <span className="text-red-800 font-bold line-clamp-2">
              Foodora Market
            </span>
            is built on the three foundation pillars of offering unique dining
            experiences, discovering and championing emerging talent and
            supporting local producers.
          </p>
          <span className=" text-red-800 ">For inquiries </span>
          regarding Chef Ripert, speaking or appearance engagements, press and
          partnership opportunities, please contact:
          <p>
            <span className=" text-red-800"> For inquiries </span>
            For inquiries regarding Chef Foodra Market , speaking or appearance
            engagements, press and partnership opportunities, please contact:{" "}
            <br /> code 213 number phon is (+213) 21 00 00 00 <br />
            adresse is : valdydra alger...
          </p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <footer className=" bg-[#444] h-screen w-full text-white p-10">
        <p>Copyright © 2023 foodora</p>
      </footer>
    </>
  );
};
export default About;
