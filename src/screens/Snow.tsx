import { FaSnowflake } from "react-icons/fa";
import { useMemo } from "react";

type Snowflake = {
  size: number;
  left: number;
  duration: number;
  delay: number;
  top: number;
};

const SNOW_CONFIG = {
  count: 100, // reduce from 50 → smoother
  minSize: 4,
  maxSize: 14,
  minSpeed: 4,
  maxSpeed: 10,
};

const generateSnow = () =>
  Array.from({ length: SNOW_CONFIG.count }, () => ({
    size:
      Math.random() * (SNOW_CONFIG.maxSize - SNOW_CONFIG.minSize) +
      SNOW_CONFIG.minSize,
    left: Math.random() * 100,
    duration:
      Math.random() * (SNOW_CONFIG.maxSpeed - SNOW_CONFIG.minSpeed) +
      SNOW_CONFIG.minSpeed,
    delay: Math.random() * 5,
    top: Math.random() * -100,
  }));

const Snow = () => {
  const flakes = useMemo(() => generateSnow(), []);

  return (
    <div className="snow-layer">
      {flakes.map((flake, i) => (
        <Particle key={i} {...flake} />
      ))}
    </div>
  );
};

const Particle = ({ size, left, duration, delay, top }: Snowflake) => {
  return (
    <div
      className="snowflake"
      style={{
        top: `${top}vh`,
        left: `${left}vw`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        fontSize: `${size}px`,
      }}
    >
      <FaSnowflake />
    </div>
  );
};

export default Snow;

// import { FaSnowflake } from "react-icons/fa";
// import { useMemo } from "react";

// type Snowflake = {
//   size: number;
//   left: number;
//   duration: number;
//   delay: number;
//   top: number;
// };

// // const SNOW_COUNT = 40;
// const SNOW_CONFIG = {
//   count: 50, // how many flakes
//   minSize: 4,
//   maxSize: 16,
//   minSpeed: 2,
//   maxSpeed: 6,
// };
// const generateSnow = () =>
//   Array.from({ length: SNOW_CONFIG.count }, () => ({
//     size:
//       Math.random() * (SNOW_CONFIG.maxSize - SNOW_CONFIG.minSize) +
//       SNOW_CONFIG.minSize,
//     left: Math.random() * 100,
//     duration:
//       Math.random() * (SNOW_CONFIG.maxSpeed - SNOW_CONFIG.minSpeed) +
//       SNOW_CONFIG.minSpeed,
//     delay: Math.random() * 3,
//     top: Math.random() * 100,
//   }));

// const Snow = () => {
//   const flakes = useMemo(() => generateSnow(), []);

//   return (
//     <>
//       {flakes.map((flake, i) => (
//         <Particle key={i} {...flake} />
//       ))}
//     </>
//   );
// };

// const Particle = ({ size, left, duration, delay, top }: Snowflake) => {
//   return (
//     <div
//       className="snowflake"
//       style={{
//         top: `${top}%`,
//         left: `${left}%`,
//         animationDuration: `${duration}s`,
//         animationDelay: `${delay}s`,
//         fontSize: `${size}px`,
//       }}
//     >
//       <FaSnowflake />
//     </div>
//   );
// };

// export default Snow;

// import { FaSnowflake } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import { mover } from "./SnowData";

// const Snow = () => {
//   return (
//     <>
//       {mover.map((m, i) => {
//         return (
//           <Particle
//             key={i}
//             size={m.size}
//             left={m.left}
//             duration={m.duration}
//             delay={m.delay}
//             top={m.top}
//           />
//         );
//       })}
//     </>
//   );
// };

// const Particle = ({ size, left, duration, delay, top }: any) => {
//   const style: any = {
//     top: top,
//     left: left,
//     animationDuration: duration,
//     animationDelay: delay,
//   };
//   return (
//     <div className="absolute move-style" style={style}>
//       <IconContext.Provider
//         value={{
//           size: size,
//           color: "#fff",
//           className: "move-style",
//         }}
//       >
//         <FaSnowflake />
//       </IconContext.Provider>
//     </div>
//   );
// };

// export default Snow;
