import Navbar from "../components/Navbar";
import MenuHero from "../components/MenuHero";
import CategoryFilters from "../components/CategoryFilters";
import SignatureBowls from "../components/SignatureBowls";
import SidesDrinks from "../components/SidesDrinks";
import CustomMarquee from "../components/CustomMarquee";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Menupage = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <MenuHero />

      <CategoryFilters />

      <SignatureBowls />

      <SidesDrinks />

      <CustomMarquee />

      <CTASection />

      <Footer />
    </div>
  );
};

export default Menupage;
