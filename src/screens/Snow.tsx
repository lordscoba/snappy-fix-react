import { FaSnowflake } from "react-icons/fa";
import { IconContext } from "react-icons";
import { mover } from "./SnowData";

const Snow = () => {
  return (
    <>
      {mover.map((m, i) => {
        return (
          <Particle
            key={i}
            size={m.size}
            left={m.left}
            duration={m.duration}
            delay={m.delay}
            top={m.top}
          />
        );
      })}
    </>
  );
};

const Particle = ({ size, left, duration, delay, top }: any) => {
  const style: any = {
    top: top,
    left: left,
    animationDuration: duration,
    animationDelay: delay,
  };
  return (
    <div className="absolute move-style" style={style}>
      <IconContext.Provider
        value={{
          size: size,
          color: "#fff",
          className: "move-style",
        }}
      >
        <FaSnowflake />
      </IconContext.Provider>
    </div>
  );
};

export default Snow;

// const getRndInteger = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
