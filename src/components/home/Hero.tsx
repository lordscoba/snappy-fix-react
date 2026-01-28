import { useState } from "react";
import { WelcomeImg } from "../../images/bg-img";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        {/* Left content */}
        <div className="z-10 max-w-xl">
          <h1 className="text-white text-5xl md:text-8xl font-semibold animate__animated animate__bounceInDown">
            Snappy-Fix Tech
          </h1>

          <p className="text-white mt-4 text-lg animate__animated animate__bounceInLeft">
            Build any website of your dreams
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="support@snappy-fix.com"
              className="bg-[#9572e8] p-4 rounded-full outline-none text-white placeholder:text-white/70 w-full"
            />

            <button
              type="submit"
              className="text-white bg-[#fb397d] px-10 py-4 rounded-full hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right image */}
        <div className="hidden md:block relative z-10">
          <img
            src={WelcomeImg}
            alt="Welcome illustration"
            loading="lazy"
            className="w-[40rem] animate__animated animate__pulse animate__infinite"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
