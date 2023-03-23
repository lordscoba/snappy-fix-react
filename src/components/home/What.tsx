import React from "react";
import { Footer, Cart1 } from "../../images/bg-img";

const What = () => {
  const backgroundImage: any = {
    backgroundImage: `url(${Footer})`,
  };
  return (
    <section
      className="h-full bg-no-repeat bg-cover bg-center bg-fixed bg-clip-border p-5"
      style={backgroundImage}
    >
      <div className="flex flex-col md:flex-row space-y-5">
        <div className="h-full w-full md:w1/2">
          <img
            className="hover:w-[30rem] rounded-3xl object-cover w-full image-style"
            src={Cart1}
            alt="My logo"
          />
        </div>
        <div className="space-y-4 w-full md:w1/2 md:px-14">
          <h3 className="font-normal text-6xl text-[#5b32b4]">
            What are we known for
          </h3>
          <p>
            Snappy-fix technologies is a web creation company fully equiped with
            the skills needed to build all types of your business websites. This
            ranges blogs websites to cutomized website designs of your dreams
            applying finishing touches to embrace full functionality
          </p>
        </div>
      </div>
    </section>
  );
};

export default What;
