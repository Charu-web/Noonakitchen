import Navbar from "../components/Navbar";
import BowlDetailsHero from "../components/BowlDetailsHero";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import CustomMarquee from "../components/CustomMarquee";

export default function BowlDetailsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="pt-8">
        <Navbar />
      </div>

      <BowlDetailsHero />

      <CustomMarquee />

      

      <Footer />
    </div>
  );
}