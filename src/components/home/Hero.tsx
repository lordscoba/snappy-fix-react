import React from "react";
import { WelcomeImg } from "../../images/bg-img";

const Hero = () => {
  return (
    <section className="overflow-auto">
      <div className="flex items-stretch h-[700px] space-x-3">
        <div className="flex flex-col self-center p-4">
          <h1 className="text-white text-6xl font-medium animate__animated  animate__bounceInDown">
            Snappy-Fix Tech
          </h1>
          <p className="text-white animate__animated  animate__bounceInLeft text-lg break-all whitespace-normal w-full">
            Build any website of your dreams
          </p>
          <div className="mt-20">
            <form action="">
              <div className="flex flex-wrap space-y-2 md:space-x-3">
                <div className="">
                  <input
                    className="bg-[#9572e8] p-4 rounded-full outline-none"
                    type="text"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="">
                  <button
                    className="text-white bg-[#fb397d] p-4 rounded-t-3xl rounded-r-3xl px-14"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden self-end ml-[-130px] mb-[-190px] md:flex">
          <img
            className="w-[50rem] animate__animated animate__pulse animate__infinite"
            src={WelcomeImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
