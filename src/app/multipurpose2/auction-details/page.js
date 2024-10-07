
import Header7 from "@/components/header/Header7";
import Breadcrumb7 from "@/components/common/Breadcrumb7";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Multipurpose2Details1 from "@/components/auction-details/Multipurpose2Details1";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const AuctionDetailsPage = () => {

  return (
    <>
      <Header7 />
      <Breadcrumb7 pagetitle="Auction Details" currentPage="Auction Details" />
      <Multipurpose2Details1 />
      <InnerPageFooter7 />
    </>

  )
}

export default AuctionDetailsPage
