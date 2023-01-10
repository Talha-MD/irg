import React from "react";
import Img4 from "../Assets/img4.jpg";
import Img5 from "../Assets/img5.jpg";

function team() {
  return (
    <div className="text-center" id="service">
      <h1 className="text-[#C1232A] mb-2">IRG GLOBAL</h1>
      <h1 className="text-[2.5em] text-[#C1232A] font-bold leading-10 mb-10">
        Digital Solutions Are Just A Click Away
      </h1>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col items-center mx-4">
          <div>
            <img src={Img4} alt="" className="w-40 h-40 rounded-full" />
          </div>
          <h1 className="text-[#C1232A] text-[1.5rem] my-4 font-bold">
            Result Oriented
          </h1>
          <p className="text-[#808080]">
            IRG Global is providing customers with cutting-edge marketing
            solutions to reach their target audiences and goals with fruitful
            results. We make sure your business reaches the top-level growth
            methodologies.
          </p>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div>
            <img src={Img5} alt="" className="w-40 h-40 rounded-full" />
          </div>
          <h1 className="text-[#C1232A] text-[1.5rem] my-4 font-bold">
            Teamwork
          </h1>
          <p className="text-[#808080]">
            Our Data Scientist, Marketing Specialist, Strategist, and developers
            work in harmony to ensure maximum profit and goals. Each department
            work in collaboration with a custom strategy for every brand and
            client.
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <div>
            <img src={Img4} alt="" className="w-40 h-40 rounded-full" />
          </div>
          <h1 className="text-[#C1232A] text-[1.5rem] my-4 font-bold">
            Trained Staff
          </h1>
          <p className="text-[#808080]">
            We have a team of experienced professionals to make sure that the
            right results are achieved with organic approaches. Our trained
            staff make sure that long-term profits and revenues are generated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default team;
