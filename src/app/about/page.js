import Home1About from "@/components/about-section/Home1About";
import Home5About from "@/components/about-section/Home5About";
import Home1Blog from "@/components/blog/Home1Blog";
import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Home1Faq from "@/components/faq/Home1Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home2ProcessSection from "@/components/process-section/Home2ProcessSection";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
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
      <Header />
      <Breadcrumb1 pagetitle={"About Us"} currentPage={"About Us"} />
      <Home5About />
      <Home1About />
      <Home2ProcessSection />
      <Home1Faq />
      <Home1Testimonial />
      <Home1Blog />
      <Footer />
    </>
  );
};

export default AboutPage;
