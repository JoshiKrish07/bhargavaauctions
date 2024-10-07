
import Header7 from "@/components/header/Header7";
import Breadcrumb7 from "@/components/common/Breadcrumb7";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Multipurpose2Details2 from "@/components/auction-details/Multipurpose2Details2";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const AuctionDetails2Page = () => {

  return (
    <>
      <Header7 />
      <Breadcrumb7 pagetitle="Auction Details" currentPage="Auction Details" />
      <Multipurpose2Details2 />
      <InnerPageFooter7 />
    </>
  );
};

export default AuctionDetails2Page;
