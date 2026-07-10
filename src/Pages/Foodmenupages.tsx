import Navbar from "../components/Navbar";
import MenuHero from "../components/MenuHero";
import CategoryFilters from "../components/CategoryFilters";
import SignatureBowls from "../components/SignatureBowls";
import SidesDrinks from "../components/SidesDrinks";
import CustomMarquee from "../components/CustomMarquee";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const MenuPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      <div className="pt-8">
        <Navbar />
      </div>

      <MenuHero />

      <CategoryFilters />

      <SignatureBowls />

      <SidesDrinks />

      <CustomMarquee />

      

      <Footer />

    </div>
  );
};

export default MenuPage;