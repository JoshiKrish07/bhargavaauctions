import AntiquesAuctionSideBar from "@/components/auction-sidebar/AntiquesAuctionSideBar";
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionSidebarPage = () => {
  
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="Auction Sidebar" currentPage="Auction Sidebar" />
      <AntiquesAuctionSideBar/>
      <Footer3 />
    </>
  );
};

export default AuctionSidebarPage;
