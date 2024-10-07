
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

const Home1AboutowToBuyPage = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 currentPage={"How to Bid"} pagetitle={"How to Bid"} />
     <HowTobuy/>
      <Footer3 />
    </>
  );
};

export default Home1AboutowToBuyPage;
