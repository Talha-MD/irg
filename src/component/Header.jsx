import React, { useState } from "react";
import Img1 from "../Assets/img1.png";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

function Header() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-0 z-10 shadow-md  bg-white">
      <div className="">
        <div className="md:mx-16 mx-2 flex justify-between">
          <div>
            <img src={Img1} alt="" className="w-40 py-4" />
          </div>
          <button className="md:hidden block" onClick={handleNav}>
            {nav ? <HiOutlineMenu size={20} /> : <RxCross2 size={20} />}
          </button>
          <div className="w-[50%] md:block hidden">
            <ul className="flex justify-between hover:cursor-pointer items-center text-[1rem] h-[100%]">
              <li className="text-[#C32329]">
                <Link to="home" smooth={true} offset={-200} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-[#C32329] true">
                <Link to="about" smooth={true} offset={-95} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="service" smooth={true} offset={100} duration={500}>
                  Services
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="test" smooth={true} offset={100} duration={500}>
                  Testimonials
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="contact" smooth={true} offset={100} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {!nav ? (
        <div className="w-[40%] h-[50vh] bg-white top-[-70px] md:right-0 left-[55%]">
          <div className=" mt-5 h-[50vh]">
            <ul className="flex flex-col justify-around  hover:cursor-pointer mx-2 text-lg h-[100%]">
              <li className="text-[#C32329]">
                <Link to="home" smooth={true} offset={-500} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="about" smooth={true} offset={-95} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="service" smooth={true} offset={100} duration={500}>
                  Services
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="test" smooth={true} offset={100} duration={500}>
                  Testimonials
                </Link>
              </li>
              <li className="hover:text-[#C32329]">
                <Link to="contact" smooth={true} offset={100} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
