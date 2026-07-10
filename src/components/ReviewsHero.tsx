import Navbar from "./Navbar";


const ReviewsHero = () => {
  return (
    <section className="bg-black py-9">

        <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-22">
         
        <div className="text-center">
          <div className="inline-flex border border-[#f8aa00] rounded-full px-5 py-2 text-[#f8aa00] text-sm">
            CUSTOMER REVIEWS
          </div>

          <h1 className="text-white font-bold text-[72px] leading-[78px] mt-8">
            Loved By Thousands.
            <br />
            <span className="text-[#f8aa00]">
              Crafted For Excellence.
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Discover why our customers trust Noonna for
            their healthy and delicious meal experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsHero;