import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home5blog from "@/components/blog/Home5blog";
import Breadcrumb5 from "@/components/common/Breadcrumb5";
import Home2Faq from "@/components/faq/Home2Faq";
import InnerpageFooter5 from "@/components/footer/InnerpageFooter5";
import InnerPageHeader5 from "@/components/header/InnerPageHeader5";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home5Testimonial from "@/components/testimonial/Home5Testimonial";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <InnerPageHeader5 />
      <Breadcrumb5 pagetitle="About Us" currentPage="About Us" />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home2Faq />
      <Home5Testimonial />
      <Home5blog />
      <InnerpageFooter5 />
    </>
  );
};

export default AboutPage;
