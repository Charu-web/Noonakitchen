const communityReviews = Array.from(
  { length: 6 },
  (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    review:
      "Amazing food quality and healthy meal options. Highly recommended.",
  })
);

export default function CommunityReviews() {
  return (
    <section className="bg-black pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-5xl font-bold mb-12">
          Community Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {communityReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#1A1A1A] border border-white/10 rounded-[30px] p-8"
            >
              <div className="text-[#f8aa00]">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-white mt-4">
                {review.review}
              </p>

              <div className="mt-6 text-gray-400">
                {review.name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#f8aa00] px-10 py-4 rounded-full font-semibold">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}