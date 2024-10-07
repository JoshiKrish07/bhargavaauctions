import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home2Blog from "@/components/blog/Home2Blog";
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import Home2Faq from "@/components/faq/Home2Faq";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import React from "react";
export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const AboutPage = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle="About Us" currentPage="About Us" />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home2Faq />
      <Home2Testimonial />
      <Home2Blog />
      <Footer2 />
    </>
  );
};

export default AboutPage;
