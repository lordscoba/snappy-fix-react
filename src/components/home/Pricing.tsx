import React from "react";
import { Footer } from "../../images/bg-img";

const price1: number = 80;
const price2: number = 500;
const starting1: number = 40;
const starting2: number = 350;
const weeks1: number = 2;
const weeks2: number = 4;
const text_color1: string = "#ffffff"; //white
const text_color2: string = "#726a84"; //general
const text_color3: string = "#fb397d"; //red
const text_color4: string = "#5b32b4"; //purple

const Pricing = () => {
  const backgroundImage: any = {
    backgroundImage: `url(${Footer})`,
  };
  return (
    <section
      style={backgroundImage}
      className="h-full bg-no-repeat bg-cover bg-center bg-fixed bg-clip-border py-5"
    >
      <div className="flex flex-col p-0 md:p-0 space-y-14">
        <h3 className="text-center text-5xl text-[#5b32b4] hover:text-6xl">
          Pricing Plan
        </h3>
        <hr className="text-white bg-[#fb397d] border-none h-1 w-1/12 mx-auto hover:w-1/2 mt-0" />
        {/* <div className="flex flex-col space-y-2 md:space-x-0 mx-auto md:flex-row px-20 w-full"> */}
        <div className="flex flex-wrap justify-center space-y-2">
          <Snippet
            title="Blog Websites"
            price={price1}
            starting={starting1}
            weeks={weeks1}
            title_color="#ffffff"
            button_color={text_color2}
            title_text_color={text_color4}
            price_color="#fb397d"
            footer_color={text_color1}
          />
          <Snippet
            title="Investment Websites"
            price={price2}
            starting={starting2}
            weeks={weeks2}
            title_color="#ffffff"
            button_color={text_color2}
            title_text_color={text_color4}
            price_color="#fb397d"
            footer_color={text_color1}
          />
          <Snippet
            title="E-commerce Websites"
            price={price2}
            starting={starting2}
            weeks={weeks2}
            title_color="#a865e1"
            button_color="#a865e1"
            title_text_color={text_color1}
            price_color={text_color1}
            footer_color={text_color1}
          />
          <Snippet
            title="Education Websites"
            price={price2}
            starting={starting2}
            weeks={weeks2}
            title_color="#ffffff"
            button_color={text_color2}
            title_text_color={text_color4}
            price_color={text_color3}
            footer_color={text_color1}
          />
        </div>
      </div>
    </section>
  );
};

type Props = {
  title: string;
  price: number;
  starting: number;
  weeks: number;
  title_color: string;
  button_color: string;
  title_text_color: string;
  price_color: string;
  footer_color: string;
};

const Snippet = ({
  title,
  price,
  starting,
  weeks,
  title_color,
  button_color,
  title_text_color,
  price_color,
  footer_color,
}: Props) => {
  return (
    <>
      <div className="p-0 grid place-items-center border-2 rounded-t-3xl rounded-r-3xl w-full max-w-[17rem] hover:drop-shadow-2xl bg-white">
        <div
          className="rounded-t-3xl w-full p-9 text-center"
          style={{
            backgroundColor: title_color,
          }}
        >
          <h5
            className="text-1xl font-normal"
            style={{
              color: title_text_color,
            }}
          >
            {title}
          </h5>
          <h2 className="flex flex-row justify-center">
            <span
              className="self-start text-lg"
              style={{
                color: price_color,
              }}
            >
              $
            </span>
            <span
              className="text-5xl"
              style={{
                color: price_color,
              }}
            >
              {price}
            </span>
          </h2>
        </div>
        <hr className="h-[0.1rem] bg-gray-400 w-full" />
        <p className="p-2 text-[#726a84]">starting from ${starting}</p>
        <hr className="h-[0.1rem] bg-gray-400 w-full" />
        <p className="p-2 text-[#726a84]">{weeks} weeks delivery date</p>
        <hr className="h-[0.1rem] bg-gray-400 w-full" />
        <p className="p-2 text-[#726a84]">Free hosting</p>
        <hr className="h-[0.1rem] bg-gray-400 w-full" />
        <p
          className="py-2 w-full text-center rounded-br-3xl"
          style={{
            backgroundColor: button_color,
            color: footer_color,
          }}
        >
          Select Plan
        </p>
      </div>
    </>
  );
};

export default Pricing;
