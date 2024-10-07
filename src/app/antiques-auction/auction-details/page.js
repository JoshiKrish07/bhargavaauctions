
import Header3 from "@/components/header/Header3";
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import AntiquesAuctionDetails from "@/components/auction-details/AntiquesAuctionDetails1";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionDetailsPage = () => {
  

  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="Auction Details" currentPage="Auction Details" />
      <AntiquesAuctionDetails/>
      <Footer3 />
    </>
  );
};

export default AuctionDetailsPage;
