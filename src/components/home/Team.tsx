import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { data } from "../portifolio/Data";
import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#5b32b4] transition-transform hover:scale-105">
            Our Team
          </h2>
          <div className="h-1 w-16 bg-[#fb397d] mx-auto rounded transition-all hover:w-32" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  member: (typeof data)[number];
};

const TeamCard = ({ member }: CardProps) => {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className={`
        group bg-white rounded-3xl overflow-hidden border shadow-sm
        transition-all duration-500 ease-out
        hover:shadow-xl hover:-translate-y-2
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle shine overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <a href={member.link_tree} target="_blank" rel="noreferrer">
          <h3 className="text-xl font-semibold text-[#5b32b4] hover:underline">
            {member.name}
          </h3>
        </a>

        <p className="text-sm text-[#b5aec4] line-clamp-2">
          {member.skills.map((s) => s.skill_main).join(", ")}
        </p>

        <Link
          to={`/portifolio/${member.id}`}
          className="inline-flex items-center gap-2 text-[#fb397d] font-medium
                     transition-all duration-300 group-hover:gap-3"
        >
          See more
          <MdOutlineKeyboardDoubleArrowRight size={22} />
        </Link>
      </div>
    </div>
  );
};

export default Team;

// import { IconContext } from "react-icons";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { data } from "../portifolio/Data";

// type Tests = {
//   id: number;
//   image: any;
//   name: string;
//   text: string;
//   fb_link: string;
//   twitter_link: string;
//   instagram_link: string;
//   link_tree?: string;
// };

// const Team = () => {
//   return (
//     <section id="team" className="p-5">
//       <h3 className="text-center text-4xl text-[#5b32b4] hover:text-6xl md:text-6xl">
//         Our Team
//       </h3>
//       <br />
//       <hr className="text-white bg-[#fb397d] border-none h-1 w-1/12 mx-auto hover:w-1/2 mt-0" />
//       <div className="flex flex-wrap justify-center mt-20 space-x-4 space-y-4 md:space-y-1 lg:space-y-0">
//         {data.map((item, i) => {
//           return (
//             <Details
//               key={i}
//               id={item.id}
//               image={item.image}
//               name={item.name}
//               text={item.text}
//               fb_link={item.fb_link}
//               twitter_link={item.twitter_link}
//               instagram_link={item.instagram_link}
//               link_tree={item.link_tree}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// const Details = ({
//   id,
//   image,
//   name,
//   text,
//   fb_link,
//   twitter_link,
//   instagram_link,
//   link_tree,
// }: Tests) => {
//   // console.log(data[id - 1].skills);
//   return (
//     <div className="flex flex-col space-y-3 md:space-y-0 w-full max-w-[25rem] h-auto ">
//       <img
//         className="object-cover w-full rounded-t-3xl rounded-r-3xl h-96 animate__slower  animate__animated animate__pulse animate__infinite"
//         src={image}
//         alt=""
//       />
//       <a href={link_tree} target="_blank" rel="noreferrer">
//         <h3 className="text-[#5b32b4] text-2xl">{name}</h3>
//       </a>
//       <p className="text-[#b5aec4]">
//         {data[id - 1].skills.map((p, index) => {
//           return (
//             <span key={index}>
//               {p.skill_main}
//               {index !== data[id - 1].skills.length - 1 && ", "}
//             </span>
//           );
//         })}
//       </p>
//       <Link className="" to={`/portifolio/${id}`}>
//         <div className="flex flex-row text-3xl font-semibold">
//           <span>see more </span>
//           <span className="animate__animated animate__shakeX animate__infinite animate__slower">
//             <IconContext.Provider value={{ size: "40px", color: "#000" }}>
//               <MdOutlineKeyboardDoubleArrowRight />
//             </IconContext.Provider>
//           </span>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Team;
