const CategoryFilters = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">

      <h2 className="text-6xl font-bold text-white mb-6">
        Curated Bowls.
      </h2>

      <p className="text-gray-400 max-w-xl mb-10">
        Crafted with precision, sourced with integrity.
      </p>

      <div className="flex gap-4 flex-wrap">

        <button className="bg-[#f8aa00] text-black px-6 py-2 rounded-full">
          All Items
        </button>

        <button className="bg-white text-black px-6 py-2 rounded-full">
          Vegan
        </button>

        <button className="bg-white text-black px-6 py-2 rounded-full">
          High Protein
        </button>

        <button className="bg-white text-black px-6 py-2 rounded-full">
          Gluten Free
        </button>

      </div>

    </section>
  );
};

export default CategoryFilters;