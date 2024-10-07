import Home5About from "@/components/about-section/Home5About";
import Home5AuctionCard from "@/components/auction/Home5AuctionCard";
import Home5SpotLight from "@/components/auction/Home5SpotLight";
import Home5UpcomingAuction from "@/components/auction/Home5UpcomingAuction";
import Banner5 from "@/components/banner/Banner5";
import Home5Banner2 from "@/components/banner/Home5Banner2";
import Home5blog from "@/components/blog/Home5blog";
import Home5Category from "@/components/category/Home5Category";
import Home5Faq from "@/components/faq/Home5Faq";
import Home5Featured from "@/components/featured/Home5Featured";
import Footer6 from "@/components/footer/Footer6";
import Header5 from "@/components/header/Header5";
import Home5ProcessSection from "@/components/process-section/Home5ProcessSection";
import Home5Testimonial from "@/components/testimonial/Home5Testimonial";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const page = () => {
  return (
    <>
      <Header5 />
      <Banner5 />
      <Home5SpotLight />
      <Home5Category />
      <Home5AuctionCard />
      <Home5Banner2 />
      <Home5ProcessSection />
      <Home5UpcomingAuction />
      <Home5About />
      <Home5Featured />
      <Home5Faq />
      <Home5Testimonial />
      <Home5blog />
      <Footer6 />
    </>
  );
};

export default page;
