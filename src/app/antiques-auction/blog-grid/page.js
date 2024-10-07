import React from "react";
import blogData from "../../../data/blog-data.json";
import Link from "next/link";
import Header3 from "@/components/header/Header3";
import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const CarAuctionBlogGrid = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="Blog Grid" currentPage="Blog Grid" />
      <div className="blog-grid-section pt-110 mb-110">
        <div className="container">
          <div className="row g-4 mb-60">
            <div
              className="col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card three">
                <div className="blog-card-img-wrap">
                  <Link
                    href="/antiques-auction/blog-details"
                    className="card-img"
                  >
                    <img src="../assets/img/home3/blog-img1.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/antiques-auction/blog-grid">
                          DIGITAL ART
                        </Link>
                      </li>
                      <li />
                    </ul>
                    <div className="blog-date">
                      <Link href="/antiques-auction/blog-grid">
                        23 January, 2024
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link href="/antiques-auction/blog-details">
                      Vintage Vibes Stories Behind Antique Auction Finds.
                    </Link>
                  </h4>
                  <Link
                    className="view-button2"
                    href="/antiques-auction/blog-details"
                  >
                    Read More
                    <div className="arrow">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0261 10.3381L1.68853 1L0.999512 1.68902L10.3376 11.0266L3.88123 11.0266L3.88123 12.0005L12 12.0005L12 3.88172L11.0261 3.88172L11.0261 10.3381Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.15 3.73194L12.15 12.1507L3.73126 12.1507L3.73126 10.8768L9.97546 10.8768L0.787402 1.68924L1.68856 0.788085L10.8761 9.97615L10.8761 3.73194L12.15 3.73194ZM11.85 4.03194L11.1761 4.03194L11.1761 10.7004L1.68856 1.21236L1.21167 1.68924L10.6998 11.1768L4.03125 11.1768L4.03125 11.8507L11.85 11.8507L11.85 4.03194Z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card three">
                <div className="blog-card-img-wrap">
                  <Link
                    href="/antiques-auction/blog-details"
                    className="card-img"
                  >
                    <img src="../assets/img/home3/blog-img2.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/antiques-auction/blog-grid">Antiques</Link>
                      </li>
                      <li />
                    </ul>
                    <div className="blog-date">
                      <Link href="/antiques-auction/blog-grid">
                        14 March, 2024
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link href="/antiques-auction/blog-details">
                      Heritage Hamer Where History Meets the Auction Gavel.
                    </Link>
                  </h4>
                  <Link
                    className="view-button2"
                    href="/antiques-auction/blog-details"
                  >
                    Read More
                    <div className="arrow">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0261 10.3381L1.68853 1L0.999512 1.68902L10.3376 11.0266L3.88123 11.0266L3.88123 12.0005L12 12.0005L12 3.88172L11.0261 3.88172L11.0261 10.3381Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.15 3.73194L12.15 12.1507L3.73126 12.1507L3.73126 10.8768L9.97546 10.8768L0.787402 1.68924L1.68856 0.788085L10.8761 9.97615L10.8761 3.73194L12.15 3.73194ZM11.85 4.03194L11.1761 4.03194L11.1761 10.7004L1.68856 1.21236L1.21167 1.68924L10.6998 11.1768L4.03125 11.1768L4.03125 11.8507L11.85 11.8507L11.85 4.03194Z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card three">
                <div className="blog-card-img-wrap">
                  <Link
                    href="/antiques-auction/blog-details"
                    className="card-img"
                  >
                    <img src="../assets/img/home3/blog-img3.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/antiques-auction/blog-grid">Antiques</Link>
                      </li>
                      <li />
                    </ul>
                    <div className="blog-date">
                      <Link href="/antiques-auction/blog-grid">
                        18 March, 2024
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link href="/antiques-auction/blog-details">
                      Exploring the hrils tales and trends in the world of
                      auctions.
                    </Link>
                  </h4>
                  <Link
                    className="view-button2"
                    href="/antiques-auction/blog-details"
                  >
                    Read More
                    <div className="arrow">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0261 10.3381L1.68853 1L0.999512 1.68902L10.3376 11.0266L3.88123 11.0266L3.88123 12.0005L12 12.0005L12 3.88172L11.0261 3.88172L11.0261 10.3381Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.15 3.73194L12.15 12.1507L3.73126 12.1507L3.73126 10.8768L9.97546 10.8768L0.787402 1.68924L1.68856 0.788085L10.8761 9.97615L10.8761 3.73194L12.15 3.73194ZM11.85 4.03194L11.1761 4.03194L11.1761 10.7004L1.68856 1.21236L1.21167 1.68924L10.6998 11.1768L4.03125 11.1768L4.03125 11.8507L11.85 11.8507L11.85 4.03194Z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card three">
                <div className="blog-card-img-wrap">
                  <Link
                    href="/antiques-auction/blog-details"
                    className="card-img"
                  >
                    <img src="../assets/img/home3/blog-img4.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/antiques-auction/blog-grid">
                          Porcelain
                        </Link>
                      </li>
                      <li />
                    </ul>
                    <div className="blog-date">
                      <Link href="/antiques-auction/blog-grid">
                        18 May, 2024
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link href="/antiques-auction/blog-details">
                      Bidder's Beat off Insights from the Auction Floor This.
                    </Link>
                  </h4>
                  <Link
                    className="view-button2"
                    href="/antiques-auction/blog-details"
                  >
                    Read More
                    <div className="arrow">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0261 10.3381L1.68853 1L0.999512 1.68902L10.3376 11.0266L3.88123 11.0266L3.88123 12.0005L12 12.0005L12 3.88172L11.0261 3.88172L11.0261 10.3381Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.15 3.73194L12.15 12.1507L3.73126 12.1507L3.73126 10.8768L9.97546 10.8768L0.787402 1.68924L1.68856 0.788085L10.8761 9.97615L10.8761 3.73194L12.15 3.73194ZM11.85 4.03194L11.1761 4.03194L11.1761 10.7004L1.68856 1.21236L1.21167 1.68924L10.6998 11.1768L4.03125 11.1768L4.03125 11.8507L11.85 11.8507L11.85 4.03194Z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card three">
                <div className="blog-card-img-wrap">
                  <Link
                    href="/antiques-auction/blog-details"
                    className="card-img"
                  >
                    <img src="../assets/img/home3/blog-img5.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/antiques-auction/blog-grid">Gadgets</Link>
                      </li>
                      <li />
                    </ul>
                    <div className="blog-date">
                      <Link href="/antiques-auction/blog-grid">
                        25 May, 2024
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link href="/antiques-auction/blog-details">
                      Gavel Gazette Your Guide Offer ton Bid &amp; Auction News.
                    </Link>
                  </h4>
                  <Link
                    className="view-button2"
                    href="/antiques-auction/blog-details"
                  >
                    Read More
                    <div className="arrow">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0261 10.3381L1.68853 1L0.999512 1.68902L10.3376 11.0266L3.88123 11.0266L3.88123 12.0005L12 12.0005L12 3.88172L11.0261 3.88172L11.0261 10.3381Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.15 3.73194L12.15 12.1507L3.73126 12.1507L3.73126 10.8768L9.97546 10.8768L0.787402 1.68924L1.68856 0.788085L10.8761 9.97615L10.8761 3.73194L12.15 3.73194ZM11.85 4.03194L11.1761 4.03194L11.1761 10.7004L1.68856 1.21236L1.21167 1.68924L10.6998 11.1768L4.03125 11.1768L4.03125 11.8507L11.85 11.8507L11.85 4.03194Z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card three">
                <div className="blog-card-img-wrap">
                  <Link
                    href="/antiques-auction/blog-details"
                    className="card-img"
                  >
                    <img src="../assets/img/home3/blog-img6.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/antiques-auction/blog-grid">
                          Renaissance
                        </Link>
                      </li>
                      <li />
                    </ul>
                    <div className="blog-date">
                      <Link href="/antiques-auction/blog-grid">
                        02 June, 2024
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link href="/antiques-auction/blog-details">
                      Auctions Adventures Stories froms the Bidding Battlefield.
                    </Link>
                  </h4>
                  <Link
                    className="view-button2"
                    href="/antiques-auction/blog-details"
                  >
                    Read More
                    <div className="arrow">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0261 10.3381L1.68853 1L0.999512 1.68902L10.3376 11.0266L3.88123 11.0266L3.88123 12.0005L12 12.0005L12 3.88172L11.0261 3.88172L11.0261 10.3381Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.15 3.73194L12.15 12.1507L3.73126 12.1507L3.73126 10.8768L9.97546 10.8768L0.787402 1.68924L1.68856 0.788085L10.8761 9.97615L10.8761 3.73194L12.15 3.73194ZM11.85 4.03194L11.1761 4.03194L11.1761 10.7004L1.68856 1.21236L1.21167 1.68924L10.6998 11.1768L4.03125 11.1768L4.03125 11.8507L11.85 11.8507L11.85 4.03194Z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item paginations-button">
                    <a href="#">
                      <svg
                        width={16}
                        height={13}
                        viewBox="0 0 16 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.557 10.1026L1.34284 1.89603M15.557 10.1026C12.9386 8.59083 10.8853 3.68154 12.7282 0.489511M15.557 10.1026C12.9386 8.59083 7.66029 9.2674 5.81744 12.4593"
                          strokeWidth="0.96"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer3 />
    </>
  );
};

export default CarAuctionBlogGrid;
