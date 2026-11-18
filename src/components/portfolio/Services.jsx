import SectionHeading from "./SectionHeading";
import {
  FaUsers,
  FaMobileScreenButton,
  FaPenNib,
  FaLaptopCode,
  FaPalette,
  FaVideo,
} from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      icon: <FaUsers />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <FaMobileScreenButton />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <FaPenNib />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <FaLaptopCode />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <FaPalette />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <FaVideo />,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-[1440px] mx-auto px-5 lg:px-20 py-24"
    >
      <SectionHeading
        title="Services"
        subtitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/[0.04] rounded-3xl p-8 flex flex-col items-center text-center gap-8 hover:bg-white/[0.08] transition duration-300"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="text-6xl text-[#fd6f00]">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#fd6f00]">
                {service.title}
              </h3>
            </div>

            <p className="text-lg text-[#575757] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;