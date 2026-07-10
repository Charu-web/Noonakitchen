import {
  Leaf,
  Wheat,
  CircleDollarSign,
  Dumbbell,
  Sparkles,
} from "lucide-react";

export default function BowlDetailsHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-20">

      <div className="grid grid-cols-[220px_1fr] gap-10">

        {/* LEFT */}

        <div>
          <h2 className="text-4xl font-bold mb-8">
            The Anatomy
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-10">

            {[
              "Organic Kale",
              "Red Quinoa",
              "Sweet Potato",
              "Organic Kale",
              "Red Quinoa",
              "Sweet Potato",
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#f8aa00] flex items-center justify-center">
                  <Leaf size={18} color="black" />
                </div>

                <p className="text-xs mt-2 text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-5">
            Health Benefits
          </h2>

          <div className="space-y-4">

            <div className="bg-[#f8aa00] rounded-[30px] p-6 text-black">
              <CircleDollarSign size={20} />

              <h3 className="text-2xl font-bold mt-4">
                High Fiber
              </h3>

              <p className="text-sm mt-2">
                Promotes digestive health and
                keeps you feeling full longer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#f8aa00] rounded-[30px] p-5 text-black">
                <Dumbbell />

                <h3 className="font-bold mt-4">
                  Clean Protein
                </h3>

                <p className="text-sm mt-2">
                  18g plant-based protein from
                  quinoa and seeds.
                </p>
              </div>

              <div className="bg-[#f8aa00] rounded-[30px] p-5 text-black">
                <Sparkles />

                <h3 className="font-bold mt-4">
                  Antioxidant Rich
                </h3>

                <p className="text-sm mt-2">
                  Packed with vitamins A, C,
                  and K.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="bg-[#f8aa00] rounded-[50px] overflow-hidden">

          <div className="grid grid-cols-2">

            <div className="p-14 text-black">

              <div className="flex gap-3 mb-8">
                <span className="border border-black rounded-full px-4 py-1 text-sm">
                  GLUTEN-FREE
                </span>

                <span className="border border-black rounded-full px-4 py-1 text-sm">
                  DAIRY-FREE
                </span>
              </div>

              <h1 className="text-6xl font-bold mb-8">
                Harvest Bowl
              </h1>

              <p className="text-lg leading-9">
                A nutrient-dense masterpiece of
                earthy flavors and vibrant
                textures.
              </p>

              <p className="text-lg leading-9 mt-8">
                We pair protein-rich organic
                quinoa with maple-roasted sweet
                potatoes, tender shredded kale,
                and flame-grilled chicken.
              </p>

              <h2 className="text-6xl font-bold mt-14">
                $14.50
              </h2>

            </div>

            <img
              src="https://images.unsplash.com/photo-1512058564366-c9e3e0466c88"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}