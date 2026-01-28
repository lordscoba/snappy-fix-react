const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#f5f9fc] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#5b32b4]">
              Get in touch with us
            </h2>
            <div className="mt-3 h-1 w-16 bg-[#fb397d] rounded" />
          </div>

          <p className="text-[#726a84] max-w-md">
            We'll send you epic newsletters on the latest developments in our
            tech firm — all FREE!
          </p>

          <ul className="space-y-4 text-[#726a84]">
            <li>
              <span className="font-semibold text-[#5b32b4]">Address:</span>{" "}
              Ihiagwa, Owerri West, Imo State.
            </li>
            <li>
              <span className="font-semibold text-[#5b32b4]">Phone:</span> +234
              808 769 0994
            </li>
            <li>
              <span className="font-semibold text-[#5b32b4]">Email:</span>{" "}
              lordscoba2tm@gmail.com
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form className="space-y-5">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" />

            <button
              type="submit"
              className="w-full bg-[#fb397d] text-white py-3 rounded-3xl font-medium
                         transition-all duration-300 hover:bg-[#5b32b4] hover:shadow-xl
                         active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Input = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full border border-gray-200 rounded-2xl px-5 py-3
               placeholder:text-[#cec1f4]
               focus:outline-none focus:ring-2 focus:ring-[#fb397d]/40
               transition"
  />
);

const Textarea = ({ placeholder }: { placeholder: string }) => (
  <textarea
    placeholder={placeholder}
    rows={4}
    className="w-full border border-gray-200 rounded-2xl px-5 py-3 resize-none
               placeholder:text-[#cec1f4]
               focus:outline-none focus:ring-2 focus:ring-[#fb397d]/40
               transition"
  />
);

export default ContactUs;
