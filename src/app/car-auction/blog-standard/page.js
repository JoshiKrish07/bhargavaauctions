import Breadcrumb2 from "@/components/common/Breadcrumb2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Link from "next/link";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const CarAuctionBlogStandrad = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 currentPage="Blog Standrad" pagetitle="Blog Standrad" />
      <div className="blog-standard-page pt-110 mb-110">
        <div className="container">
          <div className="row gy-5 mb-70">
            <div className="col-lg-8">
              <div className="row gy-5 mb-60">
                <div
                  className="col-lg-12 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card">
                    <div className="blog-card-img-wrap">
                      <Link
                        href="/car-auction/blog-details"
                        className="card-img"
                      >
                        <img
                          src="../assets/img/inner-pages/blog-st-img1.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <Link href="/car-auction/blog-grid" className="date">
                          03 January, 2024
                        </Link>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="blog-meta">
                        <ul className="category">
                          <li>
                            <Link href="/car-auction/blog-grid">ANTIQUE</Link>
                          </li>
                        </ul>
                        <div className="blog-comment">
                          <span>Comment (20)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/car-auction/blog-details">
                          Decoding the cloud and deep drive told creative design
                          for work.
                        </Link>
                      </h4>
                      <p>
                        Morbi non justo aliquam, maximus nulla laoreet, euismod
                        diam. Sed ultricies luctus tellus ac ultricies. Rob quis
                        commodo est. Aenean aliquet sem dolor, non pulvinar mi
                        maximus a. Ut eu consequat elit. Praesent consectetur
                        quis enim non condimentum.
                      </p>
                      <Link
                        className="view-button"
                        href="/car-auction/blog-details"
                      >
                        Read More
                        <svg viewBox="0 0 13 20">
                          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 wow animate fadeInDown"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card">
                    <div className="blog-card-img-wrap">
                      <Link
                        href="/car-auction/blog-details"
                        className="card-img"
                      >
                        <img
                          src="../assets/img/inner-pages/blog-st-img2.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <Link href="/car-auction/blog-grid" className="date">
                          12 January, 2024
                        </Link>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="blog-meta">
                        <ul className="category">
                          <li>
                            <Link href="/car-auction/blog-grid">
                              RENAISSANCE
                            </Link>
                          </li>
                        </ul>
                        <div className="blog-comment">
                          <span>Comment (20)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/car-auction/blog-details">
                          Exploring then shrills trends in the world bidding
                          auctions.
                        </Link>
                      </h4>
                      <p>
                        Morbi non justo aliquam, maximus nulla laoreet, euismod
                        diam. Sed ultricies luctus tellus ac ultricies. Rob quis
                        commodo est. Aenean aliquet sem dolor, non pulvinar mi
                        maximus a. Ut eu consequat elit. Praesent consectetur
                        quis enim non condimentum.
                      </p>
                      <Link
                        className="view-button"
                        href="/car-auction/blog-details"
                      >
                        Read More
                        <svg viewBox="0 0 13 20">
                          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 wow animate fadeInDown"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card">
                    <div className="blog-card-img-wrap">
                      <Link
                        href="/car-auction/log-details"
                        className="card-img"
                      >
                        <img
                          src="../assets/img/inner-pages/blog-st-img3.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="batch">
                        <Link href="/car-auction/blog-grid" className="date">
                          15 January, 2024
                        </Link>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="blog-meta">
                        <ul className="category">
                          <li>
                            <Link href="/car-auction/blog-grid">
                              ROMANTICISM
                            </Link>
                          </li>
                        </ul>
                        <div className="blog-comment">
                          <span>Comment (25)</span>
                        </div>
                      </div>
                      <h4>
                        <Link href="/car-auction/blog-details">
                          Bidder's beat insights from the auctions floor on this
                          bid .
                        </Link>
                      </h4>
                      <p>
                        Morbi non justo aliquam, maximus nulla laoreet, euismod
                        diam. Sed ultricies luctus tellus ac ultricies. Rob quis
                        commodo est. Aenean aliquet sem dolor, non pulvinar mi
                        maximus a. Ut eu consequat elit. Praesent consectetur
                        quis enim non condimentum.
                      </p>
                      <Link
                        className="view-button"
                        href="/car-auction/blog-details"
                      >
                        Read More
                        <svg viewBox="0 0 13 20">
                          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
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
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Category</h5>
                  <ul className="category-list">
                    <li>
                      <Link href="/car-auction/blog-grid">
                        Digital Art
                        <span>(20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">
                        Automotive
                        <span>(15)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">
                        Antiques
                        <span>(25)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">
                        Gadget and Technology
                        <span>(20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">
                        Real State
                        <span>(30)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">
                        Old Coin
                        <span>(22)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-sidebar">
                        Books &amp; Comic
                        <span>(40)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Popular Post</h5>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/car-auction/blog-details">
                        <img
                          src="../assets/img/inner-pages/popular-post-img1.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/car-auction/blog-grid">
                        20 February, 2024
                      </Link>
                      <h6>
                        <Link href="/car-auction/blog-details">
                          Gavel Gazette Guide Offer News.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/car-auction/blog-details">
                        <img
                          src="../assets/img/inner-pages/popular-post-img2.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/car-auction/blog-grid">
                        12 January, 2024
                      </Link>
                      <h6>
                        <Link href="/car-auction/blog-details">
                          Rutrum Vitae Augue Idel And Euismod Pulvi.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/car-auction/blog-details">
                        <img
                          src="../assets/img/inner-pages/popular-post-img3.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/car-auction/blog-grid">
                        04 January, 2024
                      </Link>
                      <h6>
                        <Link href="/car-auction/blog-details">
                          Decoding the Cloud And Deep Dive Creative.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">New Tags</h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/car-auction/blog-grid">Porcelain</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Manuscripts</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Ceramics</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Renaissance</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Baroque Art</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Rococo Art</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Romanticism</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Photography</Link>
                    </li>
                    <li>
                      <Link href="/car-auction/blog-grid">Smartwatches</Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widget">
                  <h5 className="widget-title">Social Share</h5>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default CarAuctionBlogStandrad;
