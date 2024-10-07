import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
import Link from "next/link";
import React from "react";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const CategoryPage = () => {
  return (
    <>
      <Header4 />
      <Breadcrumb4 pagetitle={"Category"} currentPage={"Category"} />
      <div className="category-grid-section pt-110 mb-110">
        <div className="container">
          <div className="row gy-5 row-cols-xl-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon1.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Renaissance Art
                    </Link>
                  </h5>
                  <span>45,533 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon2.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">Baroque Art</Link>
                  </h5>
                  <span>42,429 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon3.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">Rococo Art</Link>
                  </h5>
                  <span>45,958 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon4.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">Romanticism</Link>
                  </h5>
                  <span>44,208 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon5.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Impressionism
                    </Link>
                  </h5>
                  <span>41,564 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img5.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon6.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">Modernism</Link>
                  </h5>
                  <span>42,488 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon7.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Pencil Drawings
                    </Link>
                  </h5>
                  <span>45,958 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img7.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon8.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Black and White
                    </Link>
                  </h5>
                  <span>44,208 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img8.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon9.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Illustrations
                    </Link>
                  </h5>
                  <span>41,588 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img9.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon10.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Indigenous Art
                    </Link>
                  </h5>
                  <span>41,689 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img10.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon11.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">Oceanic Art</Link>
                  </h5>
                  <span>45,533 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img11.jpg" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card4 two">
                <div className="icon">
                  <img
                    src="../assets/img/home4/icon/home4-category-icon12.svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/art-auction/auction-sidebar">
                      Decorative Arts
                    </Link>
                  </h5>
                  <span>45,898 Item</span>
                </div>
                <div className="category-img">
                  <img src="../assets/img/home4/category-img12.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer4 />
    </>
  );
};

export default CategoryPage;
