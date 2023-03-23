import React, { useRef } from "react";
import { SnappyLogoFav } from "../../images/logo";

const Nav = () => {
  const openRef = useRef<any>("");
  const flexRef = useRef<any>("hidden");

  const skrill = () => {
    openRef.current.className === "open hamburger focus:outline-none"
      ? (openRef.current.className = "hamburger focus:outline-none")
      : (openRef.current.className = "open hamburger focus:outline-none");

    flexRef.current.className === "hidden md:hidden"
      ? (flexRef.current.className = "md:hidden")
      : (flexRef.current.className = "hidden md:hidden");

    console.log(openRef.current.className);
    console.log(flexRef.current.className);
  };

  return (
    <nav className="relative container p-6">
      <div className="flex items-center justify-between">
        <div className="">
          <img className="w-14" src={SnappyLogoFav} alt="logo" />
        </div>
        <div className="hidden md:flex md:space-x-2 lg:space-x-5 text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden md:block text-white">
          <button className="rounded-t-3xl rounded-r-3xl  py-3 px-14 bg-transparent border-2 border-[#9572e8] hover:bg-[#fb397d] hover:border-none ">
            Login
          </button>
        </div>
        <div className="flex md:hidden ml-auto">
          <button
            onClick={skrill}
            id="menu-btn"
            ref={openRef}
            className="hamburger focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div ref={flexRef} className="hidden md:hidden">
          <div className="absolute z-20 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[#9572e8] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-white">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>

            <button className="rounded-t-3xl rounded-r-3xl  py-3 px-14 bg-transparent border-2 border-[#fff] hover:bg-[#fb397d] hover:border-none ">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
