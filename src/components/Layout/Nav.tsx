import { useState } from "react";
import { SnappyFixLogo } from "../../images/logo";

type NavProps = {
  background: string;
};

const Nav = ({ background }: NavProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <nav className={`fixed p-6 ${background} w-full z-50`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img className="w-[7rem]" src={SnappyFixLogo} alt="logo" />

        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-2 lg:space-x-5 text-white">
          <a href="#hero">Home</a>
          <a href="#why">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop button */}
        <div className="hidden md:block text-white">
          <button className="rounded-t-3xl rounded-r-3xl py-3 px-14 bg-transparent border-2 border-[#9572e8] hover:bg-[#fb397d] hover:border-none">
            Login
          </button>
        </div>

        {/* Hamburger */}
        <div className="flex md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className={`hamburger focus:outline-none ${open ? "open" : ""}`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="absolute z-20 flex flex-col items-center py-8 mt-10 space-y-6 font-bold bg-[#9572e8] left-6 right-6 drop-shadow-md text-white md:hidden">
            <a onClick={closeMenu} href="#hero">
              Home
            </a>
            <a onClick={closeMenu} href="#why">
              About
            </a>
            <a onClick={closeMenu} href="#features">
              Features
            </a>
            <a onClick={closeMenu} href="#pricing">
              Pricing
            </a>
            <a onClick={closeMenu} href="#testimonial">
              Testimonials
            </a>
            <a onClick={closeMenu} href="#team">
              Team
            </a>
            <a onClick={closeMenu} href="#contact">
              Contact
            </a>

            <button className="rounded-t-3xl rounded-r-3xl py-3 px-14 bg-transparent border-2 border-[#fff] hover:bg-[#fb397d] hover:border-none">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
