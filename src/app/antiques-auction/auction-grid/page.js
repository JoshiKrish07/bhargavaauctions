import AntiquesAuctionGrid from "@/components/auction-grid/AntiquesAuctionGrid";
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionGrid = () => {
  
  return (
    <>
      <Header3 />
      <Breadcrumb3 currentPage={"Auction Grid"} pagetitle={"Auction Grid"} />
      <AntiquesAuctionGrid/>
      <Footer3 />
    </>
  );
};

export default AuctionGrid;
