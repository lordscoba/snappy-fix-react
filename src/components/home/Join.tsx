import React from "react";

const Join = () => {
  return (
    <section className="bg-gradient-to-r  from-[#a765e1] to-[#7973ed]">
      <div className="flex flex-wrap p-16 md:p-24 justify-center space-y-6 md:space-y-0 md:justify-between">
        <div className="flex flex-col space-y-3 w-full max-w-[30rem]">
          <h2 className="text-white text-4xl">Join our Happy clients</h2>
          <p className="text-white">
            Find the perfect website of your dreams — 100% satisfaction
            guaranteed.
          </p>
        </div>
        <div className="">
          <button
            type="submit"
            className="whitespace-nowrap py-3 px-8 rounded-r-3xl rounded-t-3xl bg-white hover:bg-[#5b32b4] text-[#fb397d] hover:text-white  animate__animated animate__slow animate__bounceInDown animate__infinite"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Join;
