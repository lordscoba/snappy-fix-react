import { Footer as Footer_bg } from "../../images/bg-img";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { TbMinusVertical } from "react-icons/tb";

const Footer = () => {
  const backgroundImage: any = {
    backgroundImage: `url(${Footer_bg})`,
  };
  return (
    <section
      className="bg-no-repeat bg-cover bg-center bg-fixed bg-clip-border"
      style={backgroundImage}
    >
      <div className="flex flex-col justify-center space-y-6 py-24">
        <h2 className="text-[#5b32b4] text-7xl font-bold text-center animate__flash  animate__animated animate__slower animate__flash  animate__infinite">
          Snappy-fix Tech
        </h2>
        <div className="flex flex-row space-x-2 justify-center">
          <button className="bg-[#9b69e4] p-2 rounded-t-md rounded-r-md">
            <IconContext.Provider value={{ size: "18px", color: "#fff" }}>
              <FaFacebookF />
            </IconContext.Provider>
          </button>
          <button className="bg-[#fb397d] p-2 rounded-t-md rounded-r-md">
            <IconContext.Provider value={{ size: "18px", color: "#fff" }}>
              <FaTwitter />
            </IconContext.Provider>
          </button>
          <button className="bg-[#9b69e4] p-2 rounded-t-md rounded-r-md">
            <IconContext.Provider value={{ size: "18px", color: "#fff" }}>
              <FaInstagram />
            </IconContext.Provider>
          </button>
          <button className="bg-[#9b69e4] p-2 rounded-t-md rounded-r-md">
            <IconContext.Provider value={{ size: "18px", color: "#fff" }}>
              <FaGooglePlusG />
            </IconContext.Provider>
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          <button className="text-[#726a84]">About</button>
          <IconContext.Provider value={{ size: "28px", color: "#726a84" }}>
            <TbMinusVertical />
          </IconContext.Provider>
          <button className="text-[#726a84]">Terms & Conditions</button>
          <IconContext.Provider value={{ size: "28px", color: "#726a84" }}>
            <TbMinusVertical />
          </IconContext.Provider>
          <button className="text-[#726a84]">Privacy Policy</button>
          <IconContext.Provider value={{ size: "28px", color: "#726a84" }}>
            <TbMinusVertical />
          </IconContext.Provider>
          <button className="text-[#726a84]">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
