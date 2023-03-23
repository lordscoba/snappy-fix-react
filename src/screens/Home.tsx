import React from "react";
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
import NavbarMenu from "../components/Layout/Nav";
import { SnowPics } from "../images";

const Home = () => {
  const backgroundImage: any = {
    backgroundImage: `url(${SnowPics})`,
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="bg-no-repeat bg-cover bg-center" style={backgroundImage}>
        <NavbarMenu />
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
