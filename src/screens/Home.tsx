import { useState, useEffect, useMemo } from "react";
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
import { SnowPics, SnowG, SnowC1, SnowC2 } from "../images";
import { Snow } from "../screens";

const backgrounds = [SnowPics, SnowG, SnowC1, SnowC2];

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  // Pick ONE random background per page load
  const randomBg = useMemo(() => {
    const index = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[index];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative"
      style={{ overflowX: "hidden", scrollBehavior: "smooth" }}
    >
      <Snow />
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${randomBg})` }}
      >
        <NavbarMenu background={scrolled ? "bg-[#884bdf]" : "bg-transparent"} />
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
