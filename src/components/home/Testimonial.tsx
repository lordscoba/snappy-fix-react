import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Client2, Customer1, Customer2, Customer3 } from "../../images/bg-img";
import { CgShapeCircle } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";

const Testimonial = () => {
  return (
    <section>
      <div className="">
        <div className="flex flex-col p-4 space-y-6 justify-center">
          <div className="mx-auto">
            <IconContext.Provider value={{ size: "40px", color: "#89adeb" }}>
              <FaQuoteLeft />
            </IconContext.Provider>
          </div>
          <p className="text-center text-[#726a84] text-2xl break-words w-full max-w-[40rem] mx-auto">
            “ I have been using it for a number of years. I use Snappy-fix for
            building websites. It's delivers original and responsive website
            with impressive functionalities. ”
          </p>
          <div className="flex flex-row mx-auto">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h3 className="text-3xl text-[#5b32b4] mx-auto">Simon</h3>
          <p className="text-[#b5aec4] mx-auto">User</p>
          <div className="flex flex-row sm:space-x-1 md:space-x-6 justify-center">
            <div className="self-center">
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "#b5aec4",
                }}
              >
                <IoIosArrowBack />
              </IconContext.Provider>
            </div>
            <Image image={Client2} />
            <Image image={Customer1} />
            <Image image={Customer2} />
            <Image image={Customer3} />
            <div className="self-center">
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "#b5aec4",
                }}
              >
                <IoIosArrowForward />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex flex-row space-x-6 justify-center p-10">
            <Circle />
            <Dot />
            <Circle />
            <Circle />
          </div>
        </div>
      </div>
    </section>
  );
};

const Star = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "15px", color: "#f1b922" }}>
        <AiTwotoneStar />
      </IconContext.Provider>
    </>
  );
};

type Props = {
  image: any;
};

const Image = ({ image }: Props) => {
  return (
    <div className="rounded-full w-[5rem] h-[5rem] border-4 border-neutral-50 shadow-xl shadow-slate-700">
      <img
        className="w-full h-full rounded-full object-cover"
        src={image}
        alt=""
      />
    </div>
  );
};

const Circle = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "25px",
          color: "#a49fba",
        }}
      >
        <CgShapeCircle />
      </IconContext.Provider>
    </div>
  );
};
const Dot = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "25px",
          color: "#fb397d",
        }}
      >
        <GiPlainCircle />
      </IconContext.Provider>
    </div>
  );
};

export default Testimonial;
