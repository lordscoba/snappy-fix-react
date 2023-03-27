import React from "react";
import { data } from "../portifolio/Data";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type Tests = {
  id: number;
  image: any;
  name: string;
  text: string;
  fb_link: string;
  twitter_link: string;
  instagram_link: string;
};

const Team = () => {
  return (
    <section id="team" className="p-5">
      <h3 className="text-center text-4xl text-[#5b32b4] hover:text-6xl md:text-6xl">
        Our Team
      </h3>
      <br />
      <hr className="text-white bg-[#fb397d] border-none h-1 w-1/12 mx-auto hover:w-1/2 mt-0" />
      <div className="flex flex-wrap justify-center mt-20 space-x-4 space-y-4 md:space-y-1 lg:space-y-0">
        {data.map((item, i) => {
          return (
            <Details
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              text={item.text}
              fb_link={item.fb_link}
              twitter_link={item.twitter_link}
              instagram_link={item.instagram_link}
            />
          );
        })}
      </div>
    </section>
  );
};

const Details = ({
  id,
  image,
  name,
  text,
  fb_link,
  twitter_link,
  instagram_link,
}: Tests) => {
  // console.log(data[id - 1].skills);
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 w-full max-w-[25rem] h-auto ">
      <img
        className="object-cover w-full rounded-t-3xl rounded-r-3xl h-96 animate__slower  animate__animated animate__pulse animate__infinite"
        src={image}
        alt=""
      />
      <h3 className="text-[#5b32b4] text-2xl">{name}</h3>

      <p className="text-[#b5aec4]">
        {data[id - 1].skills.map((p, index) => {
          return (
            <span key={index}>
              {p.skill_main}
              {index !== data[id - 1].skills.length - 1 && ", "}
            </span>
          );
        })}
      </p>
      <Link className="" to={`/portifolio/${id}`}>
        <div className="flex flex-row text-3xl font-semibold">
          <span>see more </span>
          <span className="animate__animated animate__shakeX animate__infinite animate__slower">
            <IconContext.Provider value={{ size: "40px", color: "#000" }}>
              <MdOutlineKeyboardDoubleArrowRight />
            </IconContext.Provider>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Team;
