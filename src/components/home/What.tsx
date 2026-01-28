import { Footer, Cart1 } from "../../images/bg-img";

const What = () => {
  const backgroundImage = {
    backgroundImage: `url(${Footer})`,
  };

  return (
    <section
      id="what"
      className="bg-no-repeat bg-cover bg-center p-6 md:p-16"
      style={backgroundImage}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Cart1}
            alt="Snappy-fix product preview"
            loading="lazy"
            className="rounded-3xl object-cover w-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6 md:px-10">
          <h2 className="font-semibold text-4xl md:text-6xl text-[#5b32b4]">
            What Snappy-fix Technologies is known for in Web Development
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Snappy-fix Technologies is a web creation company fully equipped
            with the skills needed to build all types of business websites. From
            blogs to fully customized designs, we deliver polished solutions
            that combine aesthetics with full functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default What;
