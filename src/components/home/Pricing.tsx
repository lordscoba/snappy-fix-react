import { Footer } from "../../images/bg-img";

type Plan = {
  title: string;
  price: number;
  starting: number;
  weeks: number;
  featured?: boolean;
};

const plans: Plan[] = [
  { title: "Blog Websites", price: 80, starting: 40, weeks: 2 },
  { title: "Investment Websites", price: 500, starting: 350, weeks: 4 },
  {
    title: "E-commerce Websites",
    price: 500,
    starting: 350,
    weeks: 4,
    featured: true,
  },
  { title: "Education Websites", price: 500, starting: 350, weeks: 4 },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${Footer})` }}
    >
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#5b32b4] transition-transform hover:scale-105">
            Pricing Plans
          </h2>
          <div className="h-1 w-16 bg-[#fb397d] mx-auto rounded transition-all hover:w-32" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  plan: Plan;
};

const PriceCard = ({ plan }: CardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
      ${plan.featured ? "border-[#fb397d] ring-2 ring-[#fb397d]/30" : ""}`}
    >
      {plan.featured && (
        <span className="absolute top-4 right-4 bg-[#fb397d] text-white text-xs px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <h3 className="text-xl font-semibold text-[#5b32b4]">{plan.title}</h3>

      <div className="mt-6 flex justify-center items-start gap-1">
        <span className="text-lg text-[#fb397d]">$</span>
        <span className="text-5xl font-bold text-[#fb397d]">{plan.price}</span>
      </div>

      <ul className="mt-8 space-y-3 text-gray-600">
        <li>Starting from ${plan.starting}</li>
        <li>{plan.weeks} weeks delivery</li>
        <li>Free hosting</li>
        <li>Responsive design</li>
      </ul>

      <button
        className={`mt-10 w-full rounded-full py-3 font-medium transition
        ${
          plan.featured
            ? "bg-[#fb397d] text-white hover:opacity-90"
            : "bg-[#5b32b4] text-white hover:bg-[#47238f]"
        }`}
      >
        Select Plan
      </button>
    </div>
  );
};

export default Pricing;
