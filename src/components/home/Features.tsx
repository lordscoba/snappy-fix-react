import { TfiUser, TfiPulse, TfiDashboard } from "react-icons/tfi";
import { IconContext } from "react-icons";

const Features = () => {
  return (
    <section id="features">
      <div className="flex flex-col space-y-8 py-24 md:p-16">
        <h3 className="text-center text-4xl text-[#5b32b4] hover:text-6xl md:text-6xl">
          Some Awesome Features We Can Integrate To Your Website
        </h3>
        <hr className="text-white bg-[#fb397d] border-none h-1 w-1/12 mx-auto hover:w-1/2 mt-0" />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col space-y-2 p-8">
            <div className="flex flex-row space-x-2">
              <IconContext.Provider value={{ size: "38px", color: "#fb397d" }}>
                <TfiUser />
              </IconContext.Provider>
              <h3 className="text-2xl text-[#5b32b4]">
                Awesome UI and UX designs
              </h3>
            </div>
            <p>
              With our extensive knowledge of UI and UX, we employ creativity to
              give our clients the best.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col space-y-2 p-8">
            <div className="flex flex-row space-x-2">
              <IconContext.Provider value={{ size: "38px", color: "#fb397d" }}>
                <TfiPulse />
              </IconContext.Provider>
              <h3 className="text-2xl text-[#5b32b4]">Fast and Simple</h3>
            </div>
            <p>
              As the name implies "snappy-fix", we make sure that while trying
              our best on efficiency we don't rule out fast delivery.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col space-y-2 p-8">
            <div className="flex flex-row space-x-2">
              <IconContext.Provider value={{ size: "38px", color: "#fb397d" }}>
                <TfiDashboard />
              </IconContext.Provider>
              <h3 className="text-2xl text-[#5b32b4]">Clean Code</h3>
            </div>
            <p>
              We make sure our codee are simple and clean incase of any update
              on the side of our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
