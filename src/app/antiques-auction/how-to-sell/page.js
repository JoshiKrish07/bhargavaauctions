
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import HowTobuy from "@/components/how-to-buy/HowTobuy";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const HowToSell = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="How to Bid" currentPage="How to Bid" />
      <HowTobuy/>
      <Footer3 />
    </>
  );
};

export default HowToSell;
