import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const cards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@noonna.com",
    button: "SEND EMAIL",
  },

  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9876543210",
    button: "CALL NOW",
  },

  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vijayawada, India",
    button: "GET DIRECTIONS",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-black pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-[#f8aa00] rounded-[35px] p-10"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <Icon
                  className="text-[#f8aa00]"
                  size={24}
                />
              </div>

              <h3 className="text-3xl font-bold mt-8">
                {card.title}
              </h3>

              <p className="mt-4 text-lg">
                {card.value}
              </p>

              <button className="mt-10 bg-black text-white rounded-full px-8 py-3">
                {card.button}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}