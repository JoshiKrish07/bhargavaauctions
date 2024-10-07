import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import HowTobuy from "@/components/how-to-buy/HowTobuy";

export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const Home1AboutowToBuyPage = () => {
  return (
    <>
      <InnerPageHeader1 />
      <Breadcrumb1 currentPage={"How to Bid"} pagetitle={"How to Bid"} />
      <HowTobuy />
      <Footer />
    </>
  );
};

export default Home1AboutowToBuyPage;
