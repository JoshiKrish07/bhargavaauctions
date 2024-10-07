
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
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
      <Header4 />
      <Breadcrumb4 currentPage={"How To Sell"} pagetitle={"How To Sell"} />
      <HowToSell/>
      <Footer4 />
    </>
  );
};

export default HowToSellPage;
