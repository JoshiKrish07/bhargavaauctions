import Home3HighestBidding from "@/components/auction/Home3HighestBidding";
import Home3LiveSection from "@/components/auction/Home3LiveSection";
import Home3PopulerSection from "@/components/auction/Home3PopulerSection";
import Home3Banner from "@/components/banner/Home3Banner";
import Home3Banner2 from "@/components/banner/Home3Banner2";
import Home3Banner3 from "@/components/banner/Home3Banner3";
import Home3Blog from "@/components/blog/Home3Blog";
import Home3Category from "@/components/category/Home3Category";
import Home3Faq from "@/components/faq/Home3Faq";
import Home3Featured from "@/components/featured/Home3Featured";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Home3Testimonial from "@/components/testimonial/Home3Testimonial";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const page = () => {
  return (
    <>
      <Header3 />
      <Home3Banner />
      <Home3LiveSection />
      <Home3Banner2 />
      <Home3HighestBidding />
      <Home3Category />
      <Home3Banner3 />
      <Home3PopulerSection />
      <Home3Faq />
      <Home3Testimonial />
      <Home3Featured />
      <Home3Blog />
      <Footer3 />
    </>
  );
};

export default page;
