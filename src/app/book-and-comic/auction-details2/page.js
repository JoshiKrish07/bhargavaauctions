import BookandComicAucitonDetails from "@/components/auction-details/BookandComicAucitonDetails";
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";


const AuctionDetails2Page = () => {

  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 pagetitle="Auction Details" currentPage="Auction Details" />
      <BookandComicAucitonDetails />
      <Footer6 />
    </>
  );
};

export default AuctionDetails2Page;
