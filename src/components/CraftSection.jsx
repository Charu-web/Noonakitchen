const CraftSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-6xl font-bold mb-16">
          The Craft Behind
          <span className="text-[#f8aa00]"> The Bowl</span>
        </h2>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          <div className="bg-[#ececec] rounded-[40px] p-8 text-black">
            <h3 className="text-4xl font-bold">
              Farm to Table Sourcing
            </h3>

            <p className="mt-5 max-w-lg">
              We partner with local farms to ensure every vegetable arrives
              fresh and nutrient rich.
            </p>

            <div className="flex gap-4 mt-10">
              <img
                src="/veg1.jpg"
                alt=""
                className="w-32 h-32 rounded-3xl object-cover"
              />

              <img
                src="/veg2.jpg"
                alt=""
                className="w-32 h-32 rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="bg-[#f8aa00] rounded-[40px] p-10 flex flex-col justify-center items-center text-center text-black">
            <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center">
              🌿
            </div>

            <h4 className="text-2xl font-bold mt-8">
              100% Organic
            </h4>

            <p className="mt-4">
              No pesticides. No GMOs. Just pure nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;