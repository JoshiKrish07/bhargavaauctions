import React from "react";
import blogData from "../../../data/blog-data.json";
import Link from "next/link";
import Footer5 from "@/components/footer/Footer5";
import Breadcrumb5 from "@/components/common/Breadcrumb5";
import InnerPageHeader5 from "@/components/header/InnerPageHeader5";
const CarAuctionBlogGrid = () => {
  const blogGridData = blogData["blog_grid"];
  return (
    <>
      <InnerPageHeader5 />
      <Breadcrumb5 pagetitle="Blog Grid" currentPage="Blog Grid" />
      <div className="blog-grid-section pt-110 mb-110">
  <div className="container">
    <div className="row g-4 mb-60">
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Smartwatch</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (20)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Tech Talk Exploring our th Latest Heavy Gadgets.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img1.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                03 January, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Computer</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (25)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Gadget Guide Source for Tech Reviews and News.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img2.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                28 January, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Drone</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (18)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Digital Delights Explor the World of All Gadgets.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img3.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                31 January, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Antiques</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (12)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Exploring the hrils tales and trends in the world of auctions.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img4.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                05 March, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Gadgets</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (25)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Gavel Gazette Your Guide Offer ton Bid &amp; Auction News.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img5.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                12 March, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Baroque</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (14)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Auctione Angle Behind the Scenes of the Bidding Process.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img6.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                16 March, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Antiques</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (08)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Winning Whispers Tips and Tricks for Successful Bidding.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img7.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                22 March, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Manuscripts</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (18)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Hamer Highlight Unveiling Auction Standouts antique.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img8.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                28 March, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
        <div className="blog-card2">
          <div className="blog-meta">
            <ul className="category">
              <li><Link href="/gadget-and-technology/blog-grid">Romanticism</Link></li>
            </ul>
            <div className="blog-comment">
              <span>Comment (10)</span>
            </div>
          </div>
          <h4><Link href="/gadget-and-technology/blog-details">Auction Avenue Your Roadmap to Winning Deals open.</Link></h4>
          <div className="blog-card-img-wrap">
            <Link href="/gadget-and-technology/blog-details" className="card-img">
              <img src="../assets/img/home5/blog-img9.jpg" alt="" />
            </Link>
            <div className="batch">
              <Link href="/gadget-and-technology/blog-grid" className="date">
                02 April, 2024
              </Link>
            </div>
          </div>
          <p>Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.</p>
          <Link className="view-button" href="/gadget-and-technology/blog-details">
            Read More
            <svg viewBox="0 0 13 20">
              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
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
                <svg width={16} height={13} viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.557 10.1026L1.34284 1.89603M15.557 10.1026C12.9386 8.59083 10.8853 3.68154 12.7282 0.489511M15.557 10.1026C12.9386 8.59083 7.66029 9.2674 5.81744 12.4593" strokeWidth="0.96" strokeLinecap="round" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer5 />
    </>
  );
};

export default CarAuctionBlogGrid;
