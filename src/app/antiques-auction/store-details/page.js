import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import AntiquesStoreDetails from "@/components/store-details/AntiquesStoreDetails";
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
      <Header3 />
      <Breadcrumb3 pagetitle="Seller Details" currentPage="Seller Details" />
      <MultipurposeStoreDetails />
      <Footer3 />
    </>
  );
};

export default StoreListPage;
