import { IconContext } from "react-icons";
import { BsPatchCheck } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { data } from "./Data";

const Skills = () => {
  const location = useLocation().pathname;
  const locationId = location.split("/")[2];
  const m = (locationId as unknown as number) - 1;
  const single = data[m];
  return (
    <section id="skills" className="bg-[#fafafa] p-5">
      <h2 className="text-center text-5xl font-bold pt-10">Skills</h2>
      <p className="text-center my-5">My introduction</p>
      <div className="flex flex-wrap md:space-x-6 space-y-4 md:space-y-4 justify-center md:justify-even">
        {single.skills.map((p, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-1/3 bg-[#fff] p-6 border-[0.5px] border-gray-400 shadow-lg rounded-2xl"
            >
              <h3 className="text-center text-2xl pb-5"> {p.skill_main}</h3>
              <div className="grid grid-cols-2 gap-2 ">
                {p.skill_level.map((s, index) => {
                  return (
                    <Skill
                      key={index}
                      domain={s.skill_type}
                      level={s.skill_level}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

type know = {
  domain: string;
  level: string;
};
const Skill = ({ domain, level }: know) => {
  return (
    <div className="flex flex-row space-x-2">
      <span>
        <IconContext.Provider value={{ size: "18px", color: "#000" }}>
          <BsPatchCheck />
        </IconContext.Provider>
      </span>
      <div className="">
        <h3>{domain}</h3>
        <p className="text-[#7b7b7b]">{level}</p>
      </div>
    </div>
  );
};

export default Skills;
