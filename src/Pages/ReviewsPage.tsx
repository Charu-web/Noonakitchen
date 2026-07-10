import ReviewsHero from "../components/ReviewsHero";
import RatingSummary from "../components/RatingSummary";
import FeaturedReviews from "../components/FeaturedReviews";
import CommunityReviews from "../components/CommunityReviews";

import CustomMarquee from "../components/CustomMarquee";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const ReviewsPage = () => {
  return (
    <>
      <ReviewsHero />

      <RatingSummary />

      <FeaturedReviews />

      <CommunityReviews />

      <CustomMarquee />

      <CTASection />

      <Footer />
    </>
  );
};

export default ReviewsPage;
