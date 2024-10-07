import Home1About from "@/components/about-section/Home1About";
import Home1Banner from "@/components/banner/Home1Banner";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home1Blog from "@/components/blog/Home1Blog";
import Home1Category from "@/components/category/Home1Category";
import Home1Faq from "@/components/faq/Home1Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home1LatestAuction from "@/components/latest-auction/Home1LatestAuction";
import Home1LiveAuction from "@/components/live-auction/Home1LiveAuction";
import Home1LogoSection from "@/components/logo-section/Home1LogoSection";
import Home1ProcessSection from "@/components/process-section/Home1ProcessSection";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1UpcomingAuction from "@/components/upcoming-auction/Home1UpcomingAuction";
// export const metadata = {
//   icons: {
//     icon: "/assets/img/fav-icon.svg",
//     title:"Probid- Multi Vendor Auction and Bidding Next js Template."
//   },
// };
export const metadata = {
  title: "Bhargava Auctions",
  icons: {
    // icon: "/assets/img/fav-icon.svg",
    icon: "/assets/img/bh-auction-logo.jpeg",
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <Home1Banner />
      <Home1LiveAuction />
      <Home1Category />
      <Home1LatestAuction />
      <Home1Banner2 />
      <Home1About />
      <Home1UpcomingAuction />
      <Home1ProcessSection />
      <Home1LogoSection />
      <Home1Faq />
      <Home1Testimonial />
      <Home1Blog />
      <Footer />
    </>
  );
}
