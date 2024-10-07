import BookAndComicGrid from "@/components/auction-grid/BookAndComicGrid";
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const AuctionGrid = () => {

  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 currentPage={"Auction Grid"} pagetitle={"Auction Grid"} />
      <BookAndComicGrid/>
      <Footer6 />
    </>
  );
};

export default AuctionGrid;
