import ArtAuctionDetails1 from "@/components/auction-details/ArtAuctionDetails1";
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";


export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title: "Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionDetailsPage = () => {

  return (
    <>
      <Header4 />
      <Breadcrumb4 pagetitle="Auction Details" currentPage="Auction Details" />
      <ArtAuctionDetails1 />
      <Footer4 />
    </>
  );
};

export default AuctionDetailsPage;
