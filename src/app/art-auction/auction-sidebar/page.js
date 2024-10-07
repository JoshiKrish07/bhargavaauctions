import ArtAuctionSideBar from "@/components/auction-sidebar/ArtAuctionSideBar";
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";



export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title: "Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionSidebarPage = () => {


  return (
    <>
      <Header4 />
      <Breadcrumb4 pagetitle="Auction Sidebar" currentPage="Auction Sidebar" />
      <ArtAuctionSideBar />
      <Footer4 />
    </>
  )
}

export default AuctionSidebarPage
