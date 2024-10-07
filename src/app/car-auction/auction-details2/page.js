import CarAuctionDetails2 from "@/components/auction-details/CarAuctionDetails2";
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionDetails2Page = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle="Auction Details" currentPage="Auction Details" />
      <CarAuctionDetails2 />
      <Footer2 />
    </>
  );
};

export default AuctionDetails2Page;
