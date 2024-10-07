
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import CarAuctionSidebar from "@/components/auction-sidebar/CarAuctionSidebar";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionSidebarPage = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle="Auction Sidebar" currentPage="Auction Sidebar" />
      <CarAuctionSidebar/>
      <Footer2 />
    </>
  );
};

export default AuctionSidebarPage;
