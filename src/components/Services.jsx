import { FaBolt, FaPalette, FaUsers } from "react-icons/fa";
import Forservies from "./Forservies";

const cards = [
  {
    title: "Custom Design",
    icon: <FaPalette />,
  },
  {
    title: "Fast Delivery",
    icon: <FaBolt />,
  },
  {
    title: "Expert Team",
    icon: <FaUsers />,
  },
];

const Services = () => {
  return (

    <div>
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <span className="bg-[#f8aa00] text-black px-4 py-1 rounded-full text-sm">
          OUR SERVICES
        </span>

        <h2 className="text-6xl font-bold mt-6">
          Innovative Solutions for Modern Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((item) => (
            <div
              key={item.title}
              className="bg-[#efefef] text-black rounded-[35px] p-8 min-h-[260px]"
            >
              <div className="w-14 h-14 rounded-full bg-[#f8aa00] flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-8">{item.title}</h3>

              <p className="text-gray-700 mt-5">
                Bespoke experiences designed to scale your business and improve
                customer engagement.
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </section>


<Forservies/>

</div>
  );
};

export default Services;