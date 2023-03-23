import { Rt } from "../../images/bg-img";
import { ImArrowDown } from "react-icons/im";
import { RiEmotionHappyLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

const Counter = () => {
  const backgroundImage: any = {
    backgroundImage: `url(${Rt})`,
  };
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={backgroundImage}
    >
      <div className="flex flex-col md:flex-row px-3 py-32 justify-center">
        <div className="flex flex-row w-1/4 space-x-4 p-3">
          <span className="text-white text-6xl self-end">113</span>
          <div className="flex flex-col w-full">
            <IconContext.Provider value={{ size: "38px", color: "#fff" }}>
              <ImArrowDown />
            </IconContext.Provider>
            <p className="text-white text-2xl">Total Websites built</p>
          </div>
        </div>
        <div className="flex flex-row w-1/4 space-x-4 p-3">
          <span className="text-white text-6xl self-end">110</span>
          <div className="flex flex-col">
            <IconContext.Provider value={{ size: "38px", color: "#fff" }}>
              <RiEmotionHappyLine />
            </IconContext.Provider>
            <p className="text-white text-2xl">Happy Clients</p>
          </div>
        </div>
        <div className="flex flex-row w-1/4 space-x-4 p-3">
          <span className="text-white text-6xl self-end">20</span>
          <div className="flex flex-col">
            <IconContext.Provider value={{ size: "38px", color: "#fff" }}>
              <IoPersonSharp />
            </IconContext.Provider>
            <p className="text-white text-2xl">ACTIVE clients</p>
          </div>
        </div>
        <div className="flex flex-row w-1/4 space-x-4 p-3 ">
          <span className="text-white text-6xl self-end">103</span>
          <div className="flex flex-col">
            <IconContext.Provider value={{ size: "38px", color: "#fff" }}>
              <AiOutlineStar />
            </IconContext.Provider>
            <p className="text-white text-2xl">Total Websites built</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
