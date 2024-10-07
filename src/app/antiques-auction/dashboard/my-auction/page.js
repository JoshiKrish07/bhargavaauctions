import Breadcrumb3 from "@/components/common/Breadcrumb3";
import CarAuctiionMyAuction from "@/components/dashboard/CarAuctiionMyAuction";
import MultipurposeMyAuction from "@/components/dashboard/MultipurposeMyAuction";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const MyAuctionPage = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle={"My Auction"} currentPage={"My Auction"} />
      <MultipurposeMyAuction/>
      <Footer3 />
    </>
  );
};

export default MyAuctionPage;
