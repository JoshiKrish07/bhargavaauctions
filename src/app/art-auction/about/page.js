import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home2Blog from "@/components/blog/Home2Blog";
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Home2Faq from "@/components/faq/Home2Faq";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AboutPage = () => {
  return (
    <>
      <Header4 />
      <Breadcrumb4 pagetitle="About Us" currentPage="About Us" />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home2Faq />
      <Home2Testimonial />
      <Home2Blog />
      <Footer4 />
    </>
  );
};

export default AboutPage;
