const stats = [
  ["10k+", "ACTIVE CRAFTERS"],
  ["120+", "NUTRITION RECIPES"],
  ["100%", "ORGANIC FUEL"],
  ["24/7", "CARE SUPPORT"],
];

export default function StatsBar() {
  return (
    <section className="bg-[#F8AA00] py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-4 text-center">
        {stats.map(([value, label]) => (
          <div key={value}>
            <h3 className="text-6xl font-bold">
              {value}
            </h3>

            <p className="text-sm tracking-widest mt-3">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}