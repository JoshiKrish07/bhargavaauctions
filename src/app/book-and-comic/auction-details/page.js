import BookAndComicAtucitonDetails1 from "@/components/auction-details/BookAndComicAtucitonDetails1";
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title: "Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const AuctionDetailsPage = () => {

  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 pagetitle="Auction Details" currentPage="Auction Details" />

      <BookAndComicAtucitonDetails1 />
      <Footer6 />
    </>
  );
};

export default AuctionDetailsPage;
