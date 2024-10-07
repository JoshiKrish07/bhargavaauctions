
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import CarAuctionGrid from "@/components/auction-grid/CarAuctionGrid";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionGridPage = () => {
 
  return (
    <>
      <Header2 />
      <Breadcrumb2 currentPage={"Auction Grid"} pagetitle={"Auction Grid"} />
      <CarAuctionGrid/>
      <Footer2 />
    </>
  );
};

export default AuctionGridPage;
