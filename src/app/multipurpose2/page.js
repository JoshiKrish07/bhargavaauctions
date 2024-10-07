import Home7Auction from "@/components/auction/Home7Auction";
import Home7NewArival from "@/components/auction/Home7NewArival";
import Banner7 from "@/components/banner/Banner7";
import Home7Banner2 from "@/components/banner/Home7Banner2";
import Home7Blog from "@/components/blog/Home7Blog";
import Home7Category from "@/components/category/Home7Category";
import Home7Faq from "@/components/faq/Home7Faq";
import Home7Featured from "@/components/featured/Home7Featured";
import Home7Fetature2 from "@/components/featured/Home7Fetature2";
import Footer7 from "@/components/footer/Footer7";
import Header7 from "@/components/header/Header7";
import Home7LiveAuction from "@/components/live-auction/Home7LiveAuction";
import Home7LogoSection from "@/components/logo-section/Home7LogoSection";
import Home7ProcessSection from "@/components/process-section/Home7ProcessSection";
import Home7Testimonial from "@/components/testimonial/Home7Testimonial";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const page = () => {
  return (
    <>
      <Header7 />
      <Banner7 />
      <Home7LiveAuction />
      <Home7Category />
      <Home7Featured />
      <Home7Auction />
      <Home7NewArival />
      <Home7Banner2 />
      <Home7ProcessSection />
      <Home7Fetature2 />
      <Home7Faq />
      <Home7LogoSection />
      <Home7Testimonial />
      <Home7Blog />
      <Footer7 />
    </>
  );
};

export default page;
