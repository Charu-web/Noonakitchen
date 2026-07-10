import BowlCard from "./BowlCard";

const bowls = [
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    name: "Harvest Bowl",
    category: "Seasonal Special",
    price: "$14.50",
    description:
      "Roasted sweet potato, shredded kale, wild rice, tahini drizzle.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    name: "Spicy Tuna",
    category: "Fan Favorite",
    price: "$16.00",
    description:
      "Fresh tuna, avocado, edamame, cucumber.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    name: "Harvest Bowl",
    category: "Seasonal Special",
    price: "$14.50",
    description:
      "Roasted sweet potato, shredded kale.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    name: "Zen Garden",
    category: "Plant Based",
    price: "$13.00",
    description:
      "Crispy tofu, broccoli, carrots, red cabbage.",
  },
];

const SignatureBowls = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold text-white">
          Signature Bowls
        </h2>

        <span className="text-[#f8aa00] text-sm uppercase">
          08 Variations
        </span>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {bowls.map((item, index) => (
          <BowlCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
};

export default SignatureBowls;