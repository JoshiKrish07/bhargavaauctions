
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import HowToSell from "@/components/how-to-sell/HowToSell";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const HowToSellPage = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle="How to Bid" currentPage="How to Bid" />
      <HowToSell/>
      <Footer2 />
    </>
  );
};

export default HowToSellPage;
