import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#F8AA00] rounded-[40px] text-center py-20">
          <h2 className="text-[72px] font-bold text-black leading-none">
            Ready to
            <span className="text-purple-500">
              {" "}
              BowlCraft{" "}
            </span>
            Your
            <br />
            Life?
          </h2>

          <p className="text-gray-100 mt-5">
            Join over 100,000 members transforming
            their nutrition journey.
          </p>

          <div className="flex justify-center gap-5 mt-10">
            <button className="bg-black rounded-full px-6 py-3 flex items-center gap-3">
              <FaApple size={24} />
              <span>App Store</span>
            </button>

            <button className="bg-black rounded-full px-6 py-3 flex items-center gap-3">
              <FaGooglePlay size={20} />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}