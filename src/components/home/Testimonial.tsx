import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Client2, Customer1, Customer2, Customer3 } from "../../images/bg-img";
import { CgShapeCircle } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";

const Testimonial = () => {
  let [show, setShow] = useState<number>(0);
  let [anime, setAnime] = useState<string>("");
  let [hide, setHide] = useState<number>(3);

  const changePlus = () => {
    setAnime("animate__slideInRight");
    if (show >= 3) {
      setShow(0);
    } else {
      setShow(++show);
    }
    if (hide >= 3) {
      setHide(0);
    } else {
      setHide(++hide);
    }
  };

  const changeMinus = () => {
    setAnime("animate__slideInLeft");
    if (show <= 0) {
      setShow(3);
    } else {
      setShow(--show);
    }
    if (hide <= 0) {
      setHide(3);
    } else {
      setHide(--hide);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      changePlus();
    }, 7000);
  });

  return (
    <section id="testimonial">
      <div className="flex flex-col p-4 space-y-6 justify-center">
        {testimonies.map((m, index) => {
          return (
            index === show && (
              <div
                key={index}
                className={`animate__animated animate__slow ${anime} flex flex-col space-y-6 justify-center`}
              >
                <div className="mx-auto">
                  <IconContext.Provider
                    value={{ size: "40px", color: "#89adeb" }}
                  >
                    <FaQuoteLeft />
                  </IconContext.Provider>
                </div>
                <p className="text-center text-[#726a84] text-2xl break-words w-full max-w-[40rem] mx-auto">
                  {m.text}
                </p>
                <div className="flex flex-row mx-auto">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <h3 className={` text-3xl text-[#5b32b4] mx-auto`}>{m.name}</h3>
                <p className={`text-[#b5aec4] mx-auto`}>{m.user_type}</p>
              </div>
            )
          );
        })}
        <div className="flex flex-row sm:space-x-1 md:space-x-6 justify-center mx-auto">
          <div className="self-center">
            <button type="button" onClick={changeMinus}>
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "#b5aec4",
                }}
              >
                <IoIosArrowBack />
              </IconContext.Provider>
            </button>
          </div>
          {testimonies.map((m, index) => {
            let show1 = show;
            if (show1 === 0) {
              show1 = 4;
            }
            return (
              index === show1 - 1 && (
                <Image
                  size="w-[5rem] h-[5rem]"
                  anime={anime}
                  key={m.name}
                  image={m.image}
                />
              )
            );
          })}
          {testimonies.map((m, index) => {
            return (
              index === show && (
                <Image
                  size="w-[6.5rem] h-[6.5rem] self-start"
                  anime={anime}
                  key={m.name}
                  image={m.image}
                />
              )
            );
          })}
          {testimonies.map((m, index) => {
            let show2 = show;
            if (show2 === 3) {
              show2 = -1;
            }
            // console.log(show2 + 1);
            return (
              index === show2 + 1 && (
                <Image
                  size="w-[5rem] h-[5rem]"
                  anime={anime}
                  key={m.name}
                  image={m.image}
                />
              )
            );
          })}
          <div className="self-center">
            <button type="button" onClick={changePlus}>
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "#b5aec4",
                }}
              >
                <IoIosArrowForward />
              </IconContext.Provider>
            </button>
          </div>
        </div>
        <div className="flex flex-row space-x-6 justify-center p-10">
          {testimonies.map((m, index) => {
            return index === show ? (
              <Dot key={index} />
            ) : (
              <Circle key={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Star = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "15px", color: "#f1b922" }}>
        <AiTwotoneStar />
      </IconContext.Provider>
    </>
  );
};

type Props = {
  image: any;
  anime: string;
  size: string;
};

const Image = ({ image, anime, size = "w-[5rem] h-[5rem]" }: Props) => {
  return (
    <div
      className={`animate__animated animate__slow ${anime} rounded-full ${size} border-4 border-neutral-50 shadow-xl shadow-slate-700`}
    >
      <img
        className="w-full h-full rounded-full object-cover"
        src={image}
        alt=""
      />
    </div>
  );
};

const Circle = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "25px",
          color: "#a49fba",
        }}
      >
        <CgShapeCircle />
      </IconContext.Provider>
    </div>
  );
};
const Dot = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "25px",
          color: "#fb397d",
        }}
      >
        <GiPlainCircle />
      </IconContext.Provider>
    </div>
  );
};

type test = {
  name: string;
  user_type: string;
  image: any;
  star: number;
  text: string;
};

const testimonies: Array<test> = [
  {
    name: "Aigars Silkalns",
    user_type: "user",
    image: Customer1,
    star: 5,
    text: "“ I have been using it for a number of years. I use Snappy-fix for building websites. It's delivers original and responsive website with impressive functionalities. ”",
  },
  {
    name: "Jeff Obuekwe",
    user_type: "user",
    image: Customer2,
    star: 5,
    text: "“ Snappy-fix has shown professionalism in delivering quality websites, They remain my number 1 ”",
  },
  {
    name: "Simon",
    user_type: "user",
    image: Customer3,
    star: 5,
    text: "“ Quality job with full functionality, Thumbs up.”",
  },
  {
    name: "Helen",
    user_type: "user",
    image: Client2,
    star: 5,
    text: "“ Delivered all my requested functionality in full working shape. Thanks again. ”",
  },
];
export default Testimonial;
