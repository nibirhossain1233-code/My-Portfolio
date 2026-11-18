import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(Object.fromEntries(formData));

    // এখানে পরবর্তীতে backend API integrate করবে
  };

  const inputClass =
    "w-full bg-white/[0.04] rounded-lg px-6 py-4 text-[#959595] outline-none border border-transparent focus:border-[#fd6f00] transition placeholder:text-[#959595]";

  return (
    <section
      id="contact"
      className="max-w-[1012px] mx-auto px-5 py-24"
    >
      <SectionHeading
        title="Contact me"
        subtitle="Cultivating Connections: Reach Out and Connect with Me"
      />

      <form onSubmit={handleSubmit} className="space-y-7">

        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-7">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={inputClass}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={inputClass}
          />
        </div>

        {/* Phone and Service */}
        <div className="grid md:grid-cols-2 gap-7">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={inputClass}
          />

          <select
            name="service"
            defaultValue=""
            required
            className={inputClass}
          >
            <option value="" disabled>
              Service of Interest
            </option>

            <option value="App Design">App Design</option>
            <option value="Web Design">Web Design</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </div>

        {/* Timeline and Details */}
        <div className="grid md:grid-cols-2 gap-7">
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            className={inputClass}
          />

          <textarea
            name="details"
            placeholder="Project Details..."
            rows="5"
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-3 px-10 py-3 rounded-lg border-2 border-[#959595] text-[#959595] text-lg font-bold hover:bg-[#fd6f00] hover:border-[#fd6f00] hover:text-white transition"
          >
            Send
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;