
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader5 from "@/components/header/InnerPageHeader5";
import Breadcrumb5 from "@/components/common/Breadcrumb5";
import Link from "next/link";
import SingleSearchBox from "@/components/common/SingleSearchBox";
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
      <InnerPageHeader5 />
      <Breadcrumb5 pagetitle="Seller Details" currentPage="Seller Details" />

      <MultipurposeStoreDetails />

      <Footer6 />
    </>
  );
};

export default StoreListPage;
