import Home2PopularAuction from "@/components/auction/Home2PopularAuction";
import Home2Banner from "@/components/banner/Home2Banner";
import Home2Banner2 from "@/components/banner/Home2Banner2";
import Home2Banner3 from "@/components/banner/Home2Banner3";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2Category from "@/components/category/Home2Category";
import Home2Faq from "@/components/faq/Home2Faq";
import Footer2 from "@/components/footer/Footer2";
import Header from "@/components/header/Header2";
import Home2latestAuction from "@/components/latest-auction/Home2latestAuction";
import Home2LogoSection from "@/components/logo-section/Home2LogoSection";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import Home2UpcomingAuction from "@/components/upcoming-auction/Home2UpcomingAuction";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const HomePage = () => {
  return (
    <>
      <Header />
      <Home2Banner />
      <Home2Category />
      <Home2latestAuction />
      <Home2Banner2 />
      <Home2UpcomingAuction />
      <Home2Banner3 />
      <Home2PopularAuction />
      <Home2ProcessSection />
      <Home2Faq />
      <Home2LogoSection />
      <Home2Testimonial />
      <Home2Blog />
      <Footer2 />
    </>
  );
};

export default HomePage;
