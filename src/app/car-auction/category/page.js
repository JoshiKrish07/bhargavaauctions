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
const CategoryPage = () => {
  return (
    <>
      <Header2 />
      <Breadcrumb2 pagetitle={"Category"} currentPage={"Category"} />
      <div className="category-grid-section pt-110 mb-110">
        <div className="container">
          <div className="row gy-sm-5 g-4 row-cols-xxl-6 row-cols-xl-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img
                    src="../assets/img/home2/icon/mercedes-logo.svg"
                    alt=""
                  />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Mercedes</Link>
                  </h5>
                  <span>5,533 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/toyota-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">
                      Toyota Camry
                    </Link>
                  </h5>
                  <span>8,842 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/bmw-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">BMW</Link>
                  </h5>
                  <span>6,698 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/tesla-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Tesla</Link>
                  </h5>
                  <span>4,256 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/hyundai-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Hyundai</Link>
                  </h5>
                  <span>7,920 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/nissan-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">
                      Nissan Rogue
                    </Link>
                  </h5>
                  <span>9,178 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/honda-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Honda</Link>
                  </h5>
                  <span>5,615 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img
                    src="../assets/img/home2/icon/chevrolet-logo.svg"
                    alt=""
                  />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Chevrolet</Link>
                  </h5>
                  <span>6,248 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img
                    src="../assets/img/home2/icon/land-rover-logo.svg"
                    alt=""
                  />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Land Rover</Link>
                  </h5>
                  <span>6,698 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/audi-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Audi</Link>
                  </h5>
                  <span>6,859 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/bentley-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Bentley</Link>
                  </h5>
                  <span>6,698 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/ferrari-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Ferrari</Link>
                  </h5>
                  <span>7,244 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/ford-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Ford</Link>
                  </h5>
                  <span>4,147 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/lambor-logo.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Lamborghini</Link>
                  </h5>
                  <span>8,898 Item</span>
                </div>
              </div>
            </div>
            <div
              className="col wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="category-card2 two">
                <div className="icon">
                  <img src="../assets/img/home2/icon/lexus.svg" alt="" />
                </div>
                <div className="category-content">
                  <h5>
                    <Link href="/car-auction/auction-sidebar">Lexus</Link>
                  </h5>
                  <span>6,358 Item</span>
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

export default CategoryPage;
