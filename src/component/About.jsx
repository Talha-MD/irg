import React from "react";
import Img3 from "../Assets/img3.jpg";
import Team from "./team";

function About() {
  return (
    <div id="about">
      <div className="md:mx-16 mx-2 my-20 grid md:grid-cols-2  grid-cols-1 gap-20 ">
        <div>
          <img src={Img3} alt="" />
        </div>
        <div>
          <div>
            <h1 className="text-[#C1232A] md:mt-16 mt-0">ABOUT US</h1>
            <h1 className="md:text-[2.5em] text-3xl text-[#C1232A] font-bold leading-10 my-3">
              Adding Value To Your Business
            </h1>
            <p className="text-[#808080]">
              IRG Global is offering customers a plethora box of services to
              cater to their digital needs. We make sure that the customers are
              facilitated in the right way. Our dexterous digital marketers
              ensure that the customers reach their profit and sale goals with
              us!
            </p>
            <button className="bg-[#C1232A] mt-10 hover:bg-[#808080] text-white duration-500 rounded-3xl py-2 px-6">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
}

export default About;
