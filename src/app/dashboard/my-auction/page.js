import Breadcrumb1 from "@/components/common/Breadcrumb1";
import MultipurposeMyAuction from "@/components/dashboard/MultipurposeMyAuction";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Probid- Multi Vendor Auction and Bidding Next js Template.",
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const MyAuctionPage = () => {
  return (
    <>
      <InnerPageHeader1 />
      <Breadcrumb1 pagetitle={"My Auction"} currentPage={"My Auction"} />
      <MultipurposeMyAuction/>
      <Footer />
    </>
  );
};

export default MyAuctionPage;
