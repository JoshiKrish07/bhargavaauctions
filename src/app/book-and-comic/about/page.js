import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home6Blog from "@/components/blog/Home6Blog";
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Home1Faq from "@/components/faq/Home1Faq";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
import Home6LogoSection from "@/components/logo-section/Home6LogoSection";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home6Testimonial from "@/components/testimonial/Home6Testimonial";
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
      <InnerPageHeader6 />
      <Breadcrumb6 pagetitle="About Us" currentPage="About Us" />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home1Faq />
      <Home6Testimonial />
      <Home6Blog />
      <Home6LogoSection />
      <Footer6 />
    </>
  );
};

export default AboutPage;
