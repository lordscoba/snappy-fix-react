const Contact_us = () => {
  return (
    <section
      id="contact"
      className="bg-[#f5f9fc] border-t-0  border-slate-500 shadow-2xl shadow-black"
    >
      <div className="flex flex-wrap px-8 py-24 space-y-10 justify-between lg:px-40">
        <div className="flex flex-col space-y-10 md:space-y-3 w-full md:w-1/2 lg:w-[30rem]">
          <div className="">
            <h3 className="text-left text-3xl text-[#5b32b4] hover:text-6xl md:text-5xl">
              Get in touch with us!
            </h3>
            <br />
            <hr className="text-white bg-[#fb397d] border-none h-1 w-1/6 text-left hover:w-1/2 mt-0" />
          </div>
          <div className="">
            <p className="text-[#726a84]">
              We'll send you epic newslaters on latest developments in our tech
              firms, all FREE!
            </p>
          </div>
          <div className="">
            <ul>
              <li className="text-[#726a84]">
                <span className="text-[#5b32b4] text-lg font-semibold">
                  Address:
                </span>
                Ihiagwa, Owerri west Imo state.
              </li>
              <li className="text-[#726a84]">
                <span className="text-[#5b32b4] text-lg font-semibold">
                  Phone:
                </span>{" "}
                +2348087690994
              </li>
              <li className="text-[#726a84]">
                <span className="text-[#5b32b4] text-lg font-semibold">
                  Email:
                </span>
                lordscoba2tm@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[30rem]">
          <form action="" className="flex flex-col space-y-4">
            <input
              className="border-2 p-3 rounded-t-3xl rounded-r-3xl placeholder:text-[#cec1f4]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border-2 p-3 rounded-t-3xl rounded-r-3xl placeholder:text-[#cec1f4]"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className=" rounded-t-3xl rounded-r-3xl p-4 placeholder:text-[#cec1f4]"
              name=""
              id=""
              cols={25}
              rows={3}
              placeholder="Your Message"
            ></textarea>
            <button className="text-white rounded-t-3xl rounded-r-3xl p-4 bg-[#fb397d] hover:bg-[#5b32b4] shadow-lg">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
