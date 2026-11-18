import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  const skills = [
    { name: "Figma", percentage: 100 },
    { name: "Adobe XD", percentage: 100 },
    { name: "Adobe Photoshop", percentage: 85 },
    { name: "Adobe Illustrator", percentage: 60 },
    { name: "Adobe Premiere", percentage: 70 },
  ];

  return (
    <section
      id="about"
      className="max-w-[1298px] mx-auto px-5 py-24"
    >
      <SectionHeading
        title="About Me"
        subtitle="User Interface and User Experience and Also video editing"
      />

      {/* About Content */}
      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

        {/* Image */}
        <div className="relative mx-auto w-full max-w-[566px]">
          <div className="absolute top-20 left-5 w-[90%] h-[85%] bg-white/[0.04] rounded-t-[45%]" />

          <div className="relative aspect-[566/808] overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="About me"
              fill
              sizes="(max-width: 768px) 90vw, 566px"
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-lg md:text-xl text-[#959595] leading-[1.9]">
            A software engineer, the modern-day architect of digital
            realms, navigates the ethereal landscapes of code,
            sculpting intangible structures that shape our
            technological world. With fingers poised over keyboards
            like virtuoso pianists, they compose symphonies of logic.

            Their canvas is a screen, a vast expanse where lines
            of code dance in intricate patterns, weaving the fabric
            of programs and applications.
          </p>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 mt-10 px-8 py-3 rounded-lg text-white text-lg font-bold bg-gradient-to-r from-[#fd6f00] to-[#e46400]"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-24">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-5"
          >
            <div
              className="w-[130px] h-[130px] rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(#fd6f00 ${skill.percentage}%, #353535 0)`,
              }}
            >
              <div className="w-[108px] h-[108px] rounded-full bg-[#111111] flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#fd6f00] to-[#e46400] bg-clip-text text-transparent">
                  {skill.percentage}%
                </span>
              </div>
            </div>

            <h3 className="text-center text-lg md:text-xl font-bold text-[#959595]">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;