
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import HowTobuy from "@/components/how-to-buy/HowTobuy";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const HowToBuePage = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle="How To Sell" currentPage="How To Sell" />
      <HowTobuy/>
      <Footer2 />
    </>
  );
};

export default HowToBuePage;
