import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TfiRulerPencil } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { IconContext } from "react-icons";

const Why = () => {
  return (
    <section id="why" className="flex flex-col p-5 md:p-24 space-y-14">
      <h3 className="text-center text-5xl text-[#5b32b4] hover:text-6xl">
        Why are we Special
      </h3>
      <hr className="text-white bg-[#fb397d] border-none h-1 w-1/12 mx-auto hover:w-1/2 mt-0" />
      <div className="flex flex-wrap space-y-6 md:space-x-6 justify-center">
        <div className="grid place-items-center border-2 rounded-t-3xl rounded-r-3xl p-9 w-full max-w-[20rem] hover:bg-slate-50 hover:drop-shadow-2xl">
          <IconContext.Provider value={{ size: "45px", color: "#fb397d" }}>
            <MdOutlinePhoneAndroid />
          </IconContext.Provider>
          <h3 className="text-[#5b32b4] font-bold">Website Originality</h3>
          <p className="text-center">
            We build websites to the taste and expectations of our client
          </p>
        </div>
        <div className="grid place-items-center border-2 rounded-t-3xl rounded-r-3xl p-9 w-full max-w-[20rem] hover:bg-slate-50 hover:drop-shadow-2xl">
          <IconContext.Provider value={{ size: "45px", color: "#fb397d" }}>
            <TfiRulerPencil />
          </IconContext.Provider>
          <h3 className="text-[#5b32b4] font-bold">Updates Designs</h3>
          <p className="text-center">
            We build websites to the taste and expectations of our client
          </p>
        </div>
        <div className="grid place-items-center border-2 rounded-t-3xl rounded-r-3xl p-9 w-full max-w-[20rem] hover:bg-slate-50 hover:drop-shadow-2xl">
          <IconContext.Provider value={{ size: "45px", color: "#fb397d" }}>
            <CiSettings />
          </IconContext.Provider>
          <h3 className="text-[#5b32b4] font-bold">Full functionality</h3>
          <p className="text-center">
            We make sure your websites are fully functional as expected
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
