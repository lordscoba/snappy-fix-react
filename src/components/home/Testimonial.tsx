import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Client2, Customer1, Customer2, Customer3 } from "../../images/bg-img";

const testimonials = [
  {
    name: "Aigars Silkalns",
    user_type: "user",
    image: Customer1,
    star: 5,
    text: "I have been using Snappy-fix for years. They deliver responsive websites with impressive functionality.",
  },
  {
    name: "Jeff Obuekwe",
    user_type: "user",
    image: Customer2,
    star: 5,
    text: "Snappy-fix has shown professionalism in delivering quality websites. They remain my number one.",
  },
  {
    name: "Simon",
    user_type: "user",
    image: Customer3,
    star: 5,
    text: "Quality job with full functionality. Thumbs up.",
  },
  {
    name: "Helen",
    user_type: "user",
    image: Client2,
    star: 5,
    text: "Delivered all my requested functionality in full working shape. Thanks again.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % testimonials.length);
  };

  // smooth autoplay
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const getIndex = (offset: number) =>
    (index + offset + testimonials.length) % testimonials.length;

  const active = testimonials[index];
  const prevUser = testimonials[getIndex(-1)];
  const nextUser = testimonials[getIndex(1)];

  return (
    <section id="testimonial" className="py-12">
      <div className="flex flex-col space-y-8 px-4">
        {/* Content */}
        <div
          key={index}
          className={`flex flex-col space-y-6 text-center max-w-3xl mx-auto
    transition-all duration-500 ease-out
    ${
      direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
    }
  `}
        >
          <FaQuoteLeft className="text-4xl text-[#89adeb] mx-auto" />

          <p className="text-[#726a84] text-lg md:text-2xl">
            “ {active.text} ”
          </p>

          <div className="flex justify-center">
            {Array.from({ length: active.star }).map((_, i) => (
              <AiTwotoneStar key={i} className="text-[#f1b922]" />
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl text-[#5b32b4]">{active.name}</h3>
          <p className="text-[#b5aec4]">{active.user_type}</p>
        </div>

        {/* Avatar row */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <button onClick={prev}>
            <IoIosArrowBack className="text-2xl text-[#b5aec4]" />
          </button>

          <Avatar image={prevUser.image} small />
          <Avatar image={active.image} />
          <Avatar image={nextUser.image} small />

          <button onClick={next}>
            <IoIosArrowForward className="text-2xl text-[#b5aec4]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-[#fb397d] scale-125" : "bg-[#a49fba]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Avatar = ({
  image,
  small = false,
}: {
  image: string;
  small?: boolean;
}) => (
  <div
    className={`rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-500 ${
      small
        ? "w-14 h-14 md:w-20 md:h-20 opacity-70 scale-95"
        : "w-20 h-20 md:w-28 md:h-28 scale-105"
    }`}
  >
    <img src={image} alt="testimonial" className="w-full h-full object-cover" />
  </div>
);

export default Testimonial;

// import { useState, useEffect } from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import { AiTwotoneStar } from "react-icons/ai";
// import { IconContext } from "react-icons";
// import { Client2, Customer1, Customer2, Customer3 } from "../../images/bg-img";
// import { CgShapeCircle } from "react-icons/cg";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { GiPlainCircle } from "react-icons/gi";

// const Testimonial = () => {
//   let [show, setShow] = useState<number>(0);
//   let [anime, setAnime] = useState<string>("");
//   let [hide, setHide] = useState<number>(3);

//   const changePlus = () => {
//     setAnime("animate__slideInRight");
//     if (show >= 3) {
//       setShow(0);
//     } else {
//       setShow(++show);
//     }
//     if (hide >= 3) {
//       setHide(0);
//     } else {
//       setHide(++hide);
//     }
//   };

//   const changeMinus = () => {
//     setAnime("animate__slideInLeft");
//     if (show <= 0) {
//       setShow(3);
//     } else {
//       setShow(--show);
//     }
//     if (hide <= 0) {
//       setHide(3);
//     } else {
//       setHide(--hide);
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       changePlus();
//     }, 7000);
//   });

//   return (
//     <section id="testimonial">
//       <div className="flex flex-col p-4 space-y-6 justify-center">
//         {testimonies.map((m, index) => {
//           return (
//             index === show && (
//               <div
//                 key={index}
//                 className={`animate__animated animate__slow ${anime} flex flex-col space-y-6 justify-center`}
//               >
//                 <div className="mx-auto">
//                   <IconContext.Provider
//                     value={{ size: "40px", color: "#89adeb" }}
//                   >
//                     <FaQuoteLeft />
//                   </IconContext.Provider>
//                 </div>
//                 <p className="text-center text-[#726a84] text-2xl break-words w-full max-w-[40rem] mx-auto">
//                   {m.text}
//                 </p>
//                 <div className="flex flex-row mx-auto">
//                   <Star />
//                   <Star />
//                   <Star />
//                   <Star />
//                   <Star />
//                 </div>
//                 <h3 className={` text-3xl text-[#5b32b4] mx-auto`}>{m.name}</h3>
//                 <p className={`text-[#b5aec4] mx-auto`}>{m.user_type}</p>
//               </div>
//             )
//           );
//         })}
//         <div className="flex flex-row sm:space-x-1 md:space-x-6 justify-center mx-auto">
//           <div className="self-center">
//             <button type="button" onClick={changeMinus}>
//               <IconContext.Provider
//                 value={{
//                   size: "25px",
//                   color: "#b5aec4",
//                 }}
//               >
//                 <IoIosArrowBack />
//               </IconContext.Provider>
//             </button>
//           </div>
//           {testimonies.map((m, index) => {
//             let show1 = show;
//             if (show1 === 0) {
//               show1 = 4;
//             }
//             return (
//               index === show1 - 1 && (
//                 <Image
//                   size="w-[5rem] h-[5rem]"
//                   anime={anime}
//                   key={m.name}
//                   image={m.image}
//                 />
//               )
//             );
//           })}
//           {testimonies.map((m, index) => {
//             return (
//               index === show && (
//                 <Image
//                   size="w-[6.5rem] h-[6.5rem] self-start"
//                   anime={anime}
//                   key={m.name}
//                   image={m.image}
//                 />
//               )
//             );
//           })}
//           {testimonies.map((m, index) => {
//             let show2 = show;
//             if (show2 === 3) {
//               show2 = -1;
//             }
//             // console.log(show2 + 1);
//             return (
//               index === show2 + 1 && (
//                 <Image
//                   size="w-[5rem] h-[5rem]"
//                   anime={anime}
//                   key={m.name}
//                   image={m.image}
//                 />
//               )
//             );
//           })}
//           <div className="self-center">
//             <button type="button" onClick={changePlus}>
//               <IconContext.Provider
//                 value={{
//                   size: "25px",
//                   color: "#b5aec4",
//                 }}
//               >
//                 <IoIosArrowForward />
//               </IconContext.Provider>
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-row space-x-6 justify-center p-10">
//           {testimonies.map((m, index) => {
//             return index === show ? (
//               <Dot key={index} />
//             ) : (
//               <Circle key={index} />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Star = () => {
//   return (
//     <>
//       <IconContext.Provider value={{ size: "15px", color: "#f1b922" }}>
//         <AiTwotoneStar />
//       </IconContext.Provider>
//     </>
//   );
// };

// type Props = {
//   image: any;
//   anime: string;
//   size: string;
// };

// const Image = ({ image, anime, size = "w-[5rem] h-[5rem]" }: Props) => {
//   return (
//     <div
//       className={`animate__animated animate__slow ${anime} rounded-full ${size} border-4 border-neutral-50 shadow-xl shadow-slate-700`}
//     >
//       <img
//         className="w-full h-full rounded-full object-cover"
//         src={image}
//         alt=""
//       />
//     </div>
//   );
// };

// const Circle = () => {
//   return (
//     <div>
//       <IconContext.Provider
//         value={{
//           size: "25px",
//           color: "#a49fba",
//         }}
//       >
//         <CgShapeCircle />
//       </IconContext.Provider>
//     </div>
//   );
// };
// const Dot = () => {
//   return (
//     <div>
//       <IconContext.Provider
//         value={{
//           size: "25px",
//           color: "#fb397d",
//         }}
//       >
//         <GiPlainCircle />
//       </IconContext.Provider>
//     </div>
//   );
// };

// type test = {
//   name: string;
//   user_type: string;
//   image: any;
//   star: number;
//   text: string;
// };

// const testimonies: Array<test> = [
//   {
//     name: "Aigars Silkalns",
//     user_type: "user",
//     image: Customer1,
//     star: 5,
//     text: "“ I have been using it for a number of years. I use Snappy-fix for building websites. It's delivers original and responsive website with impressive functionalities. ”",
//   },
//   {
//     name: "Jeff Obuekwe",
//     user_type: "user",
//     image: Customer2,
//     star: 5,
//     text: "“ Snappy-fix has shown professionalism in delivering quality websites, They remain my number 1 ”",
//   },
//   {
//     name: "Simon",
//     user_type: "user",
//     image: Customer3,
//     star: 5,
//     text: "“ Quality job with full functionality, Thumbs up.”",
//   },
//   {
//     name: "Helen",
//     user_type: "user",
//     image: Client2,
//     star: 5,
//     text: "“ Delivered all my requested functionality in full working shape. Thanks again. ”",
//   },
// ];
// export default Testimonial;
