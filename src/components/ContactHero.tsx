import Navbar from "./Navbar";


const ContactHero = () => {
  return (
    <section className="bg-black py-9">
        <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <div className="inline-flex items-center gap-2 border border-[#f8aa00] rounded-full px-5 py-2 text-[#f8aa00] text-sm">
          CONTACT US
        </div>

        <h1 className="text-white text-[72px] leading-[78px] font-bold mt-8">
          Let's Connect &
          <br />
          <span className="text-[#f8aa00]">
            Create Your Perfect Bowl.
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg">
          Questions, feedback, or custom requests?
          Our team is ready to help you craft the perfect
          nutrition experience.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;