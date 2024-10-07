import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home2Blog from "@/components/blog/Home2Blog";
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Home2Faq from "@/components/faq/Home2Faq";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AboutPage = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="About Us" currentPage="About Us" />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home2Faq />
      <Home2Testimonial />
      <Home2Blog />
      <Footer3 />
    </>
  );
};

export default AboutPage;
