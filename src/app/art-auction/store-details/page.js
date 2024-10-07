
import Header4 from "@/components/header/Header4";
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";
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
      <Header4 />
      <Breadcrumb4 pagetitle="Seller Details" currentPage="Seller Details" />

     <MultipurposeStoreDetails/>

      <Footer4 />
    </>
  );
};

export default StoreListPage;
