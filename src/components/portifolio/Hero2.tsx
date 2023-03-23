import { IconContext } from "react-icons";
import { FaBriefcase } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { data } from "./Data";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Hero = () => {
  const location = useLocation().pathname;
  const locationId = location.split("/")[2];
  const m = (locationId as unknown as number) - 1;
  const single = data[m];

  // console.log(single);
  // console.log(locationId);
  // console.log(data[m].id);

  return (
    <section className="bg-[#fafafa]">
      <Link className="" to={`/`}>
        <div className="flex flex-row text-3xl font-normal">
          <span className="animate__animated animate__shakeX animate__infinite animate__slower">
            <IconContext.Provider value={{ size: "40px", color: "#000" }}>
              <MdOutlineKeyboardDoubleArrowLeft />
            </IconContext.Provider>
          </span>
          <span>Back</span>
        </div>
      </Link>
      <div className="flex flex-wrap-reverse space-x-8 py-20 justify-center">
        <div className="self-center flex flex-row md:flex-col space-y-0 md:space-y-4 p-3 w-full max-w-full justify-evenly md:max-w-[90px]">
          <div className="">
            <a href={`https://${single.github_link}`}>
              <IconContext.Provider value={{ size: "24px", color: "#000" }}>
                <FiGithub />
              </IconContext.Provider>
            </a>
          </div>
          <div className="">
            <a href={`https://${single.linkdln_link}`}>
              <IconContext.Provider value={{ size: "24px", color: "#000" }}>
                <FiLinkedin />
              </IconContext.Provider>
            </a>
          </div>
          <div className="">
            <a href={`https://${single.twitter_link}`}>
              <IconContext.Provider value={{ size: "24px", color: "#000" }}>
                <FiTwitter />
              </IconContext.Provider>
            </a>
          </div>
        </div>

        <div className="flex py-5 flex-col space-y-10 px-6 w-full max-w-[30rem] md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-bold animate__animated animate__pulse animate__infinite">
            {single?.name} 🖐️
          </h2>
          <p className="text-2xl">
            {" "}
            --------
            {single.skills.map((p, index) => {
              return (
                <span key={index}>
                  {p.skill_main}
                  {index !== single.skills.length - 1 && ", "}
                </span>
              );
            })}
          </p>
          <p>{single.text}</p>
          <a
            href="#skills"
            className=" bg-[#000] text-white flex flex-row space-x-2 p-4 rounded-2xl w-36 animate__animated animate__pulse animate__infinite"
          >
            <span>View Skills</span>
            <IconContext.Provider value={{ size: "18px", color: "#fff" }}>
              <FaBriefcase />
            </IconContext.Provider>
          </a>
          <div className="">
            <a href="#about" className="flex flex-row">
              <div className="animate-bounce w-6 h-6">
                <IconContext.Provider value={{ size: "28px", color: "#000" }}>
                  <BsMouse />
                </IconContext.Provider>
              </div>
              <span className="self-start text-lg">Scroll Down</span>
              <IconContext.Provider
                value={{
                  size: "28px",
                  color: "#000",
                  className: "animate-bounce w-6 h-6",
                }}
              >
                <AiOutlineArrowDown />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className="p-4 w-full max-w-[350px]  md:w-1/3">
          <img className="image-style" src={single.image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
