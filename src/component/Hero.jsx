import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Hero() {
  return (
    <div className="h-[100vh] hero border" id="home">
      <AnimationOnScroll animateIn="fadeIn">
        <div className="md:mx-16 mx-2 text-white  my-36 md:w-[48%] w-[80%]">
          <h1 className="md:text-[2.7rem] text-[2rem] font-bold my-2 leading-tight ">
            Your One-Stop Digital Solution Agency
          </h1>
          <p className="md:text-lg text-sm">
            IRG Global is providing the customers with top-notch digital
            marketing solutions to establish your brand image with the right
            amount of sales
          </p>
          <button className="bg-[#C1232A] mt-10 hover:bg-white hover:text-[#C1232A] duration-500 rounded-3xl py-2 px-5">
            Get Started
          </button>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Hero;
