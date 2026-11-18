import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { FiPenTool, FiMonitor, FiSmartphone, FiLayers, FiCode, FiTrendingUp } from "react-icons/fi";

const services = [
  ["App Design", FiSmartphone], ["Web Design", FiMonitor], ["Graphic Design", FiPenTool],
  ["Prototyping", FiLayers], ["Web Development", FiCode], ["UX Research", FiTrendingUp],
];

export default function Services() {
  return (
    <section id="services" className="section-space">
      <Container>
        <SectionHeading title="Services" description="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(([title, Icon]) => (
            <article key={title} className="glass-card flex min-h-[250px] flex-col items-center justify-center rounded-3xl px-8 py-9 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/30">
              <Icon className="mb-5 text-accent" size={58} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold leading-relaxed text-accent">{title}</h3>
              <p className="mt-4 max-w-[340px] text-[17px] leading-[1.7] tracking-wide text-[#777]">Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}