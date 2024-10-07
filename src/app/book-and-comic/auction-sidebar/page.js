
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import BookAndComicSidebar from "@/components/auction-sidebar/BookAndComicSideBar";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const AuctionSidebarPage = () => {
 
  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 pagetitle="Auction Sidebar" currentPage="Auction Sidebar" />
      <BookAndComicSidebar/>
      <Footer6 />
    </>
  );
};

export default AuctionSidebarPage;
