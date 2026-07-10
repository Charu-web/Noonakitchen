const items = [
  {
    name: "Steamed Edamame",
    price: "$4.50",
  },
  {
    name: "Miso Soup",
    price: "$3.00",
  },
  {
    name: "Iced Matcha Latte",
    price: "$5.50",
  },
  {
    name: "Ginger Lemonade",
    price: "$4.00",
  },
];

export default function SidesDrinks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Sides
          </h2>

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full px-6 py-5 flex justify-between mb-4"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Drinks
          </h2>

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full px-6 py-5 flex justify-between mb-4"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}