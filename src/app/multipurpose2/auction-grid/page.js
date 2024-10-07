
import Header7 from "@/components/header/Header7";
import Breadcrumb7 from "@/components/common/Breadcrumb7";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Multipurpose2AucitonGrid from "@/components/auction-grid/Multipurpose2AucitonGrid";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title: "Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionGridPage = () => {

  return (
    <>
      <Header7 />
      <Breadcrumb7 currentPage={"Auction Grid"} pagetitle={"Auction Grid"} />
      <Multipurpose2AucitonGrid />
      <InnerPageFooter7 />
    </>
  );
};

export default AuctionGridPage;
