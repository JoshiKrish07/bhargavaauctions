import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import MultipurposeStoreList from "@/components/store-list/MultipurposeStoreList";

export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const StoreListPage = () => {
  return (
    <div>
      <InnerPageHeader1 />
      <Breadcrumb1 pagetitle="Seller List" currentPage="Seller List" />
      <MultipurposeStoreList />
      <Footer />
    </div>
  );
};

export default StoreListPage;
