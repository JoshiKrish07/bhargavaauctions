
import Header3 from "@/components/header/Header3";
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import AntiquesAuctionDetails2 from "@/components/auction-details/AntiquesAuctionDetails2";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionDetails2Page = () => {
  
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="Auction Details" currentPage="Auction Details" />
      <AntiquesAuctionDetails2/>

      <Footer3 />
    </>
  );
};

export default AuctionDetails2Page;
