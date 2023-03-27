import { FiAward } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BiBriefcaseAlt2, BiSupport } from "react-icons/bi";
import { data } from "./Data";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation().pathname;
  const locationId = location.split("/")[2];
  const m = (locationId as unknown as number) - 1;
  const single = data[m];
  return (
    <section className="bg-[#fafafa] py-8" id="about">
      <h2 className="text-4xl font-bold text-center py-4">About Me</h2>
      <p className="text-center mb-9">My introduction</p>
      <div className="flex flex-wrap justify-center space-x-0 space-y-3 md:space-x-36">
        <div className="w-72 h-72 self-center">
          <img
            className="w-full h-full border-4 border-slate-900 shadow-gray-800 rounded-3xl object-cover image-style"
            src={single.image}
            alt=""
          />
        </div>
        <div className="flex flex-col w-full md:max-w-[30rem] space-y-10 justify-center">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 mx-auto justify-center">
            <div className="bg-[#fff] p-6 border-[0.5px] border-gray-400 shadow-lg rounded-2xl flex flex-col w-full md:max-w-[30rem]">
              <div className="mx-auto">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    color: "#000000",
                  }}
                >
                  <FiAward />
                </IconContext.Provider>
              </div>
              <h3 className="text-center">Experience</h3>
              <p className="text-[13px] text-center">
                {single.years_experience} Years Working
              </p>
            </div>
            <div className="bg-[#fff]  p-6 border-[0.5px] border-gray-400 shadow-lg rounded-2xl flex flex-col  w-full max-w-[30rem]">
              <div className="mx-auto">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    color: "#000000",
                  }}
                >
                  <BiBriefcaseAlt2 />
                </IconContext.Provider>
              </div>
              <h3>Completed</h3>
              <p className="text-[13px] text-center">
                {single.projects} + Projects
              </p>
            </div>
            <div className="bg-[#fff]  p-6 border-[0.5px] border-gray-400 shadow-lg rounded-2xl flex flex-col  w-full max-w-[30rem]">
              <div className="mx-auto">
                <IconContext.Provider
                  value={{
                    size: "24px",
                    color: "#000000",
                  }}
                >
                  <BiSupport />
                </IconContext.Provider>
              </div>
              <h3 className="text-center">Support</h3>
              <p className="text-[13px] text-center">Online 24/7</p>
            </div>
          </div>
          <p className="text-[#757575] p-5 md:p-0 mx-auto">{single.about}</p>
          <Link
            to={single.image}
            className="bg-[#000] text-white flex flex-row space-x-2 p-4 rounded-2xl w-40 whitespace-nowrap mx-auto md:mx-0 animate__animated animate__pulse animate__infinite"
            target="_blank"
            download
          >
            Download CV &nbsp;
            <IconContext.Provider
              value={{
                size: "24px",
                color: "#fff",
              }}
            >
              <AiOutlineFilePdf />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
