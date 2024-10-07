

import Header7 from "@/components/header/Header7";
import Breadcrumb7 from "@/components/common/Breadcrumb7";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Multipurpose2AuctionSideBar from "@/components/auction-sidebar/Multipurpose2AuctionSideBar";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionSidebarPage = () => {

  return (
    <>
    <Header7/>
    <Breadcrumb7 pagetitle="Auction Sidebar" currentPage="Auction Sidebar"/>
    <Multipurpose2AuctionSideBar/>
    <InnerPageFooter7/>
   </>
  )
}

export default AuctionSidebarPage
