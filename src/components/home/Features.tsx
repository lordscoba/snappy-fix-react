import { TfiUser, TfiPulse, TfiDashboard } from "react-icons/tfi";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Awesome UI and UX designs",
    description:
      "With our extensive knowledge of UI and UX, we employ creativity to give our clients the best.",
    icon: <TfiUser size={38} color="#fb397d" />,
  },
  {
    title: "Fast and Simple",
    description:
      'As the name implies "Snappy-Fix", we ensure efficiency without compromising fast delivery.',
    icon: <TfiPulse size={38} color="#fb397d" />,
  },
  {
    title: "Clean Code",
    description:
      "We write clean and maintainable code, making future updates easier for clients.",
    icon: <TfiDashboard size={38} color="#fb397d" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#5b32b4] transition-transform hover:scale-105">
            Some Awesome Features We Can Integrate Into Your Website
          </h2>

          <div className="h-1 w-16 bg-[#fb397d] mx-auto rounded transition-all hover:w-32" />
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-10">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group flex-1 p-8 rounded-3xl border transition-all duration-300 hover:bg-slate-50 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#5b32b4]">
                  {feature.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
