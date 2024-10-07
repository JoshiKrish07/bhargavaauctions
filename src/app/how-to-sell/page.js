

import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import HowToSell from "@/components/how-to-sell/HowToSell";


export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const HowToSellPage = () => {
  return (
    <>
      <InnerPageHeader1 />
      <Breadcrumb1 currentPage={"How To Sell"} pagetitle={"How To Sell"} />
     <HowToSell/>
      <Footer />
    </>
  );
};

export default HowToSellPage;
