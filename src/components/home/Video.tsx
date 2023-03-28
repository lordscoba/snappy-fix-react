import { Footer, Snappy3 } from "../../images/bg-img";
import { BsPlayCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Video = () => {
  const backgroundImage: any = {
    backgroundImage: `url(${Footer})`,
  };
  return (
    <section
      id="video"
      className="h-auto bg-no-repeat bg-cover bg-center bg-fixed bg-clip-border p-3 md:p-8"
      style={backgroundImage}
    >
      <div className="flex flex-col  animate__animated animate__pulse animate__infinite">
        <div className="">
          <img
            className="border-white rounded-3xl border-[1.3rem] w-5/6 mx-auto"
            src={Snappy3}
            alt=""
          />
        </div>
        <div className="mx-auto mt-[-9rem]   md:mt-[-16rem] md:mb-[11rem]">
          <a href="https://www.youtube.com/watch?v=bmixiVwtDso">
            <IconContext.Provider
              value={{
                size: "80px",
                color: "#fb397d",
                className: "bg-white rounded-full",
              }}
            >
              <BsPlayCircleFill />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
