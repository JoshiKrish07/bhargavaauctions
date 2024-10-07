import ArtAucitonGrid from "@/components/auction-grid/ArtAucitonGrid"
import Breadcrumb4 from "@/components/common/Breadcrumb4"
import Footer4 from "@/components/footer/Footer4"
import Header4 from "@/components/header/Header4"
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const AuctionGrid = () => {

  return (
    <>
      <Header4 />
      <Breadcrumb4 currentPage={"Auction Grid"} pagetitle={"Auction Grid"} />
      <ArtAucitonGrid />
      <Footer4 />
    </>
  )
}

export default AuctionGrid
