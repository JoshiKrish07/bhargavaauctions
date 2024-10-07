import Home4AuctionClose from "@/components/auction/Home4AuctionClose";
import Home4LiveActuction from "@/components/auction/Home4LiveActuction";
import Home4TrandingAuction from "@/components/auction/Home4TrandingAuction";
import Banner4 from "@/components/banner/Banner4";
import Home4Banner2 from "@/components/banner/Home4Banner2";
import Home4Blog from "@/components/blog/Home4Blog";
import Home4Category from "@/components/category/Home4Category";
import Home4Featured from "@/components/featured/Home4Featured";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
import Home4processSection from "@/components/process-section/Home4processSection";
import Home4Testimonial from "@/components/testimonial/Home4Testimonial";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const page = () => {
  return (
    <>
      <Header4 />
      <Banner4 />
      <Home4LiveActuction />
      <Home4Category />
      <Home4TrandingAuction />
      <Home4Banner2 />
      <Home4processSection />
      <Home4AuctionClose />
      <Home4Featured />
      <Home4Testimonial />
      <Home4Blog />
      <Footer4 />
    </>
  );
};

export default page;
