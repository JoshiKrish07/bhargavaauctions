import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const FileNotFound = () => {
  return (
    <>
      <Header />
      <div className="error-page pt-110 mb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="error-wrap">
                <img src="assets/img/inner-pages/error-img.png" alt="" />
                <div className="error-content">
                  <h1>Sorry! We Can't Find That Page.</h1>
                  <p>
                    The page you are looking for was moved, removed, renamed or
                    never existed.
                  </p>
                  <div className="back-btn d-flex justify-content-center">
                    <Link className="primary-btn btn-hover" href="/adjh">
                      Go home
                      <span style={{ top: "40.5px", left: "84.2344px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FileNotFound;
