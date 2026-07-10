import { useState } from "react";
import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import Services from "../components/Services";
import Pricing from "../components/PricingCards";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div>
      <section className="relative h-[720px] bg-[#f8aa00] rounded-b-[80px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <Navbar />

          {/* Left Content */}
          <div className="absolute left-12 top-[180px] z-20">
            <h1 className="text-black font-bold text-[70px] leading-[72px]">
              Crafting Bowls
              <br />
              Beyond Ordinary
            </h1>

            <p className="text-black text-[22px] mt-5 max-w-[500px] leading-[40px]">
              From fresh ingredients to your table, we build custom bowls that
              fuel your body and delight your taste buds.
            </p>
          </div>

          {/* Stats */}
          <div className="absolute right-20 top-[150px] bg-black rounded-[30px] p-8 text-white z-20">
            <div className="flex gap-8">
              <div>
                <h3 className="text-[55px] font-bold">10+</h3>
                <p className="text-xs uppercase">Modern Kitchens</p>
              </div>

              <div>
                <h3 className="text-[55px] font-bold">100+</h3>
                <p className="text-xs uppercase">Customers Serving</p>
              </div>
            </div>
          </div>

          {/* Center Circle */}
          <div className="absolute left-1/2 top-[380px] -translate-x-1/2 -translate-y-1/2">
            <div className="w-[520px] h-[520px] rounded-full bg-[#e39a00] flex items-center justify-center">
              <HeroCarousel />
            </div>
          </div>

          {/* CTA */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex rounded-full overflow-hidden bg-black/20 backdrop-blur-md z-20">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-10 py-4 transition-all ${
                activeTab === "services"
                  ? "bg-black text-[#f8aa00]"
                  : "text-white"
              }`}
            >
              Personalized Meal Subscriptions
            </button>

            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-10 py-4 transition-all ${
                activeTab === "pricing"
                  ? "bg-black text-[#f8aa00]"
                  : "text-white"
              }`}
            >
              Order Instantly from the Kitchen
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      {activeTab === "services" ? <Services /> : <Pricing />}
    </div>
  );
};

export default Hero;