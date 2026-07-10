import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";


const ReviewsHero = () => {
  return (
    <section className="bg-black py-9">

        <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-22">

        <div className="inline-flex border border-[#f8aa00] rounded-full px-5 py-2 text-[#f8aa00] text-sm mb-8">
          CUSTOMER REVIEWS
        </div>

        <div className="flex items-center justify-between gap-10 bg-[#f8aa00] rounded-[30px] px-10 py-8">
          <h1 className="text-black font-bold text-[56px] leading-[62px]">
            Real Taste.
            <br />
            Real Reviews.
          </h1>

          <div className="text-right shrink-0">
            <h2 className="text-black font-bold text-6xl">4.9</h2>
            <div className="flex justify-end gap-1 text-black mt-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-black/70 text-sm mt-2">
              Based on 2,400+ Reviews
            </p>
          </div>
        </div>

        <p className="text-gray-400 max-w-2xl mt-6">
          Discover why our customers trust Noonna for
          their healthy and delicious meal experience.
        </p>
      </div>
    </section>
  );
};

export default ReviewsHero;
