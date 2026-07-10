import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic Bowl",
    price: "$149",
    button: "Select Plan",
    features: [
      "15 meals per month",
      "Organic Basmati Rice",
      "1 Craft Curry choice",
      "1 Signature Side",
    ],
  },

  {
    name: "Pro Crafter",
    price: "$249",
    popular: true,
    button: "Start Crafting",
    features: [
      "25 meals per month",
      "Unlimited Curry Varieties",
      "Assorted Sides & Salads",
      "Soft Drinks & Desserts",
      "Surprise Weekly Desserts",
    ],
  },

  {
    name: "Elite Fuel",
    price: "$399",
    button: "Go Elite",
    features: [
      "40 meals per month",
      "Premium Wagyu Curries",
      "Unlimited Premium Sides",
      "4 Cheat Meals Included",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="p-24 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-[35px]
            border-2 border-white/20
            bg-[#F8AA00]
            p-8
            min-h-[520px]
            ${
              plan.popular
                ? "scale-105 shadow-[0_0_50px_rgba(248,170,0,.4)]"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-full text-xs">
                MOST POPULAR
              </div>
            )}

            <h3 className="text-4xl font-bold">
              {plan.name}
            </h3>

            <div className="mt-4">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              <span>/mo</span>
            </div>

            <div className="space-y-4 mt-10">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} />
                  {feature}
                </div>
              ))}
            </div>

            <button
              className={`absolute bottom-8 left-8 right-8 py-4 rounded-full
              ${
                plan.popular
                  ? "bg-black text-white"
                  : "border border-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}