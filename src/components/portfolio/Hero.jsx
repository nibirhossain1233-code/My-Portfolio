import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaDownload,
} from "react-icons/fa6";

const Hero = () => {
  const socialLinks = [
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaDribbble />, link: "#" },
    { icon: <FaBehance />, link: "#" },
  ];

  const statistics = [
    { number: "5+", title: "Experiences" },
    { number: "20+", title: "Project done" },
    { number: "80+", title: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      className="max-w-[1280px] mx-auto px-5 lg:px-0 py-16 lg:py-24"
    >
      <div className="grid lg:grid-cols-2 items-center gap-16">

        {/* Hero Content */}
        <div>
          <p className="text-2xl text-[#707070]">Hi I am</p>

          <h2 className="text-2xl md:text-[28px] text-[#959595] font-bold mt-2">
            Mahmood Fazile
          </h2>

          <h1 className="text-4xl sm:text-5xl xl:text-[70px] font-black mt-6 bg-gradient-to-r from-[#984300] via-[#fd6f00] to-[#ca5900] bg-clip-text text-transparent">
            UI/UX designer
          </h1>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-10">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center text-white text-xl hover:bg-[#fd6f00] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="#contact"
              className="px-10 py-3 rounded-lg text-white text-lg font-bold bg-gradient-to-r from-[#fd6f00] to-[#e46400]"
            >
              Hire Me
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-10 py-3 rounded-lg border-2 border-[#959595] text-[#959595] font-bold flex items-center gap-3"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-16 p-5 sm:p-6 rounded-lg bg-white/[0.04]">
            {statistics.map((item, index) => (
              <div
                key={item.title}
                className={`${index !== 2 ? "border-r border-[#959595]" : ""}`}
              >
                <h3 className="text-xl sm:text-2xl text-[#fd6f00] font-extrabold">
                  {item.number}
                </h3>

                <p className="text-xs sm:text-base text-[#dfdfdf] font-bold mt-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-[85%] aspect-square rounded-full bg-[#fd6f00]/20 bottom-0" />

          <div className="relative w-full max-w-[520px] aspect-[520/781] overflow-hidden rounded-t-[45%]">
            <Image
              src="/images/profile.png"
              alt="Mahmood Fazile"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;