
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
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
      <Header4 />
      <Breadcrumb4 currentPage={"How to Bid"} pagetitle={"How to Bid"} />
     <HowTobuy/>
      <Footer4 />
    </>
  );
};

export default Home1AboutowToBuyPage;
