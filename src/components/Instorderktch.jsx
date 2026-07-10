import Pricing from "./PricingCards";
import StatsBar from "./StatsBar";
import octorConsultation from "./VideoSection";
import CustomMarquee from "./CustomMarquee";

export default function Forservies() {
  return (
    <section className=" py-16">
         <PricingCards />
        
              <StatsBar />
        
              <DoctorConsultation />
        
              <CustojmMarquee/>
        
    </section>
  );
}