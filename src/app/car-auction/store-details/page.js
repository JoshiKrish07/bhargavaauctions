
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Breadcrumb2 from "@/components/common/Breadcrumb2";
import CarAuctionStoreDetails from "@/components/store-details/CarAuctionStoreDetails";
import MultipurposeStoreDetails from "@/components/store-details/MultipurposeStoreDetails";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const StoreListPage = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle="Seller Details" currentPage="Seller Details" />
      <MultipurposeStoreDetails />
      <Footer2 />
    </>
  );
};

export default StoreListPage;
