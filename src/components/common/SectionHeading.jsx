const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-[40px] font-bold text-[#fefefe]">
        {title}
      </h2>

      <p className="mt-4 text-sm md:text-xl text-[#707070]">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;