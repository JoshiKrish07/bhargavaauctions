import MultipurposeDetails1 from "@/components/auction-details/MultipurposeDetails1";
import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const AuctionDetailsPage = () => {

  return (
    <div>
      <InnerPageHeader1 />
      <Breadcrumb1 pagetitle="Auction Details" currentPage="Auction Details" />
      <MultipurposeDetails1 />
      <Footer />
    </div>
  );
};

export default AuctionDetailsPage;
