const reviews = [
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    review:
      "The quality and freshness are unmatched. Every bowl feels crafted specifically for me.",
  },

  {
    name: "Michael Chen",
    role: "Entrepreneur",
    review:
      "Noonna completely changed how I manage healthy eating during busy workdays.",
  },

  {
    name: "Emma Davis",
    role: "Designer",
    review:
      "Beautiful presentation, incredible taste, and always delivered on time.",
  },
];

export default function FeaturedReviews() {
  return (
    <section className="bg-black pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-5xl font-bold mb-12">
          Featured Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="bg-[#f8aa00] rounded-[35px] p-8"
            >
              <div className="text-3xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-lg leading-relaxed">
                {item.review}
              </p>

              <div className="mt-10">
                <h4 className="font-bold text-xl">
                  {item.name}
                </h4>

                <p className="text-sm opacity-70">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}