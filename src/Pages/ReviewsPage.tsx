import ReviewsHero from "../components/ReviewsHero";
import RatingSummary from "../components/RatingSummary";
import FeaturedReviews from "../components/FeaturedReviews";
import CommunityReviews from "../components/CommunityReviews";

import CustojmMarquee from "../components/CustomMarquee";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const ReviewsPage = () => {
  return (
    <>
      <ReviewsHero />

      <RatingSummary />

      <FeaturedReviews />

      <CommunityReviews />

      <CustojmMarquee/>

      

      <Footer />
    </>
  );
};

export default ReviewsPage;