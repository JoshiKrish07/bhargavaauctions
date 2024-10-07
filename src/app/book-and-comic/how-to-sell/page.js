
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
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
      <InnerPageHeader6 />
      <Breadcrumb6 currentPage={"How To Sell"} pagetitle={"How To Sell"} />
      <HowToSell/>
      <Footer6 />
    </>
  );
};

export default HowToSellPage;
