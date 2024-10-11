import MultipurposeDetails1 from "@/components/auction-details/MultipurposeDetails1";
import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
// export const metadata = {
//   title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
//   icons: {
//     icon: "/assets/img/fav-icon.svg",
//   },
// };

export const metadata = {
  title: "Bhargava Auctions",
  icons: {
    // icon: "/assets/img/fav-icon.svg",
    icon: "/assets/img/bh-auction-logo.jpeg",
  },
};
const AuctionDetailsPage = ( {params} ) => {
  const { id } = params;
  return (
    <div>
      {/* <InnerPageHeader1 /> */}
      <Header />
      <Breadcrumb1 pagetitle="Auction Details" currentPage="Auction Details" />
      <MultipurposeDetails1 lotId={id} />
      <Footer />
    </div>
  );
};

export default AuctionDetailsPage;
