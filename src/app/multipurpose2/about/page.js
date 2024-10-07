import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home2Blog from "@/components/blog/Home2Blog";
import Breadcrumb7 from "@/components/common/Breadcrumb7";
import Home2Faq from "@/components/faq/Home2Faq";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Header7 from "@/components/header/Header7";
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
      <Header7 />
      <Breadcrumb7 pagetitle="About Us" currentPage="About Us" />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home2Faq />
      <Home2Testimonial />
      <Home2Blog />
      <InnerPageFooter7 />
    </>
  );
};

export default AboutPage;
