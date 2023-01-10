import React from "react";
import { FaEnvelope } from "react-icons/fa";

function headline() {
  return (
    <div className="bg-[#C1232A] py-6 text-white ">
      <div className="lg:mx-16 mx-2 flex justify-end items-center">
        <FaEnvelope size={20} />
        <h1 className="text-[1rem] mx-1 md:block hidden">info@irgglobal.co</h1>
      </div>
    </div>
  );
}

export default headline;
