import PricingCards from "../components/PricingCards";
import CustojmMarquee from "../components/CustomMarquee";
import StatsBar from "../components/StatsBar";
import DoctorConsultation from "../components/DoctorConsultation";
import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Menupage = () => {
  return (
    <div className="bg-[black]">
      <Hero />

      <PricingCards />

      <StatsBar />

      <DoctorConsultation />

      <CustojmMarquee/>

      

      <Footer />
    </div>
  );
};

export default Menupage;