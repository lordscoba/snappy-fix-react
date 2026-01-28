import { Footer, Snappy3 } from "../../images/bg-img";
import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const backgroundImage = {
    backgroundImage: `url(${Footer})`,
  };

  return (
    <section
      id="video"
      className="bg-no-repeat bg-cover bg-center p-6 md:p-16"
      style={backgroundImage}
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Image */}
        <img
          src={Snappy3}
          alt="Snappy-Fix product preview"
          loading="lazy"
          className="rounded-3xl border-white border-[1rem] w-full"
        />

        {/* Play button overlay */}
        <a
          href="https://www.youtube.com/watch?v=bmixiVwtDso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch introduction video"
          className="absolute inset-0 flex items-center justify-center group"
        >
          <span className="bg-white rounded-full p-3 transition-transform duration-300 group-hover:scale-110">
            <BsPlayCircleFill size={70} color="#fb397d" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Video;
