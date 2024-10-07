import Home6HighlightAuction from "@/components/auction/Home6HighlightAuction";
import Home6PopularAuction from "@/components/auction/Home6PopularAuction";
import Banner6 from "@/components/banner/Banner6";
import Home6Banner2 from "@/components/banner/Home6Banner2";
import Home6Blog from "@/components/blog/Home6Blog";
import Home6AuctionSpotlight from "@/components/category/Home6AuctionSpotlight";
import Home6Category from "@/components/category/Home6Category";
import Home6Featured from "@/components/featured/Home6Featured";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
import Home6LogoSection from "@/components/logo-section/Home6LogoSection";
import Home6ProcessSection from "@/components/process-section/Home6ProcessSection";
import Home6Testimonial from "@/components/testimonial/Home6Testimonial";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const page = () => {
  return (
    <>
      <InnerPageHeader6 />
      <Banner6 />
      <Home6AuctionSpotlight />
      <Home6Category />
      <Home6PopularAuction />
      <Home6ProcessSection />
      <Home6HighlightAuction />
      <Home6Banner2 />
      <Home6Featured />
      <Home6Testimonial />
      <Home6Blog />
      <Home6LogoSection />
      <Footer6 />
    </>
  );
};

export default page;
