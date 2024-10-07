import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import MultipurposeStoreDetails from "@/components/store-details/MultipurposeStoreDetails";

export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const StoreDetailsPage = () => {
  return (
    <>
      <InnerPageHeader1 />
      <Breadcrumb1
        pagetitle={"Seller Details"}
        currentPage={"Seller Details"}
      />
      <MultipurposeStoreDetails />
      <Footer />
    </>
  );
};

export default StoreDetailsPage;
