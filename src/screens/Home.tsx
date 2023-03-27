import React, { useState, useEffect } from "react";
import {
  Hero,
  Why,
  What,
  Features,
  Video,
  Counter,
  Pricing,
  Testimonial,
  Join,
  Team,
  ContactUs,
} from "../components/home";
import { NavbarMenu } from "../components/Layout";
import { SnowPics } from "../images";
import { Snow } from "../screens";

const Home = () => {
  const [scrollTop, setScrollTop] = useState<any>(0);
  const backgroundImage: any = {
    backgroundImage: `url(${SnowPics})`,
  };

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrollTop);

  return (
    <div
      className="relative"
      style={{ overflowX: "hidden", scrollBehavior: "smooth" }}
    >
      <Snow />
      <div className="bg-no-repeat bg-cover bg-center" style={backgroundImage}>
        {scrollTop > 40 ? (
          <NavbarMenu background={"bg-[#884bdf]"} />
        ) : (
          <NavbarMenu background={"bg-transparent"} />
        )}
        <Hero />
      </div>

      <Why />
      <What />
      <Features />
      <Video />
      <Counter />
      <Pricing />
      <Testimonial />
      <Join />
      <Team />
      <ContactUs />
    </div>
  );
};

export default Home;
