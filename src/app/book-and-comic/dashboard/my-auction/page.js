
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import CarAuctiionMyAuction from "@/components/dashboard/CarAuctiionMyAuction";
import Footer6 from "@/components/footer/Footer6";
import Header6 from "@/components/header/Header5";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const MyAuctionPage = () => {

  return (
    <>
      <Header6 />
      <Breadcrumb6 pagetitle={"My Auction"} currentPage={"My Auction"} />
      <CarAuctiionMyAuction/>
      <Footer6 />
    </>
  );
};

export default MyAuctionPage;
