import Breadcrumb7 from "@/components/common/Breadcrumb7";
import MultipurposeMyAuction from "@/components/dashboard/MultipurposeMyAuction";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Header7 from "@/components/header/Header7";
import Link from "next/link";
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
      <Header7 />
      <Breadcrumb7 pagetitle={"My Auction"} currentPage={"My Auction"} />
      <MultipurposeMyAuction/>
      <InnerPageFooter7 />
    </>
  );
};

export default MyAuctionPage;
