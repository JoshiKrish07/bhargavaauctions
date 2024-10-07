import React from "react";
import blogData from "../../../data/blog-data.json";
import Link from "next/link";
import Header4 from "@/components/header/Header4";
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const CarAuctionBlogGrid = () => {
  const blogGridData = blogData["blog_grid"];
  return (
    <>
      <Header4 />
      <Breadcrumb4 pagetitle="Blog Grid" currentPage="Blog Grid" />
      <div className="blog-grid-section pt-110 mb-110">
        <div className="container">
          <div className="row g-4 mb-60">
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img1.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">BAROQUE</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (20)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      The auctioneer angle behind then scenes of bidding.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    03 January, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img2.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">ROCOCO</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (15)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Unction ascent rising new height in art bidding
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    24 March, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img3.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">ABSTRACT</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (12)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Auction alert stay informed, Bid you confidently.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    07 March, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img4.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">Renaissance</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (12)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Auctions Adventures Stories froms the Bidding Battlefield.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    14 May, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img5.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">Baroque</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (12)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Bidding Buzzs Exploring the World of Auctions art.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    18 May, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img6.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">Gadgets</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (15)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Auctione Angle Behind the Scenes of the Bidding Process.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    25 June, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img7.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">Antiques</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (18)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Winning Whispers Tips and Tricks for Successful Bidding.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    05 June, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img8.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">Manuscripts</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (12)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Hamer Highlight Unveiling Auction Standouts antique.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    12 June, 2024
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card four">
                <div className="blog-card-img-wrap">
                  <Link href="/art-auction/blog-details" className="card-img">
                    <img src="../assets/img/home4/blog-img9.jpg" alt="" />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                      <li>
                        <Link href="/art-auction/blog-grid">Romanticism</Link>
                      </li>
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (17)</span>
                    </div>
                  </div>
                  <h4>
                    <Link href="/art-auction/blog-details">
                      Auction Avenue Your Roadmap to Winning Deals open.
                    </Link>
                  </h4>
                  <Link
                    className="view-button"
                    href="/art-auction/blog-details"
                  >
                    Read More
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </div>
                <div className="batch">
                  <Link href="/art-auction/blog-grid" className="date">
                    02 June, 2024
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
      <Footer4 />
    </>
  );
};

export default CarAuctionBlogGrid;
