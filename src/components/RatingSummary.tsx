const stats = [
  ["4.9", "Average Rating"],
  ["12K+", "Happy Customers"],
  ["98%", "Retention Rate"],
];

export default function RatingSummary() {
  return (
    <section className="bg-black pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f8aa00] rounded-[40px] p-10">
          <div className="grid md:grid-cols-3 gap-10">
            {stats.map(([number, label]) => (
              <div
                key={label}
                className="text-center"
              >
                <h2 className="text-6xl font-bold">
                  {number}
                </h2>

                <p className="uppercase text-sm tracking-widest mt-3">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}