
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
import HowTobuy from "@/components/how-to-buy/HowTobuy";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title: "Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const Home1AboutowToBuyPage = () => {
  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 currentPage={"How to Bid"} pagetitle={"How to Bid"} />
      <HowTobuy />
      <Footer6 />
    </>
  );
};

export default Home1AboutowToBuyPage;
