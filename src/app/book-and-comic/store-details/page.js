
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import MultipurposeStoreDetails from "@/components/store-details/MultipurposeStoreDetails";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title: "Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const StoreListPage = () => {

  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 pagetitle="Seller Details" currentPage="Seller Details" />

      <MultipurposeStoreDetails />

      <Footer6 />
    </>
  );
};

export default StoreListPage;
