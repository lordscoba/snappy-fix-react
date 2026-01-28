import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TfiRulerPencil } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Website Originality",
    description:
      "We build websites to the taste and expectations of our client",
    icon: <MdOutlinePhoneAndroid size={45} color="#fb397d" />,
  },
  {
    title: "Updated Designs",
    description:
      "We build websites to the taste and expectations of our client",
    icon: <TfiRulerPencil size={45} color="#fb397d" />,
  },
  {
    title: "Full Functionality",
    description: "We make sure your websites are fully functional as expected",
    icon: <CiSettings size={45} color="#fb397d" />,
  },
];

const Why = () => {
  return (
    <section id="why" className="px-6 py-16 md:px-24 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#5b32b4] transition-transform hover:scale-105">
          Why We Are Special
        </h2>

        <div className="h-1 w-16 bg-[#fb397d] mx-auto rounded transition-all hover:w-32" />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <article
            key={index}
            className="group grid place-items-center text-center border-2 p-8 max-w-[20rem] rounded-3xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xl"
          >
            <div className="transition-transform group-hover:scale-110">
              {feature.icon}
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#5b32b4]">
              {feature.title}
            </h3>

            <p className="mt-2 text-gray-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Why;
