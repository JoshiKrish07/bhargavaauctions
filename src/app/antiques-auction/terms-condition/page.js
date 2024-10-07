import Breadcrumb3 from "@/components/common/Breadcrumb3";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
const TermsConditionPage = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle="Terms" currentPage="Terms" />
      <div className="terms-and-conditions-page pt-110 mb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="update-date mb-40">
                <h6>
                  <i className="bi bi-caret-right-fill" /> Last Updated
                </h6>
                <p>02 February, 2023</p>
              </div>
            </div>
            <div className="col-lg-12 mb-70">
              <div className="terms-and-conditions">
                <h3>Bidding Terms &amp; Condition of Probid</h3>
                <p>
                  Urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc
                  posuere at augue eget porta. Inei odion goat tellus, dignissim
                  fermentumara purus nec, consequat dapibus metus.Vivamus urna
                  worlda mauris, goat te faucibus at egestas quis, fermentum
                  egetonav neque. Duis pharetra lectus nec risusonl
                  pellentesque, opi vitae aliquet nisi dapibus. Sed volutpat mi
                  velit, ateng maximus est eleifend accui Fusce porttitor ex
                  arcu. Phasellus viverra lorem a nibh placerat
                  tincidunt.bolgotai Aliquam andit rutrum elementum urna,
                  velgeria fringilla tellus varius ut. Morbi non velit odio.
                </p>
                <ul>
                  <li>
                    <strong>1) Fees and Payment: </strong> Clearly state your
                    pricing structure, payment terms, and any additional
                    charges. Specify when and how invoices will be issued, as
                    well as your accepted payment methods.
                  </li>
                  <li>
                    <strong>2) Termination and Cancellation:</strong> Outline
                    the process for terminating the consulting agreement and any
                    associated fees or penalties. Include a notice period
                    required for termination.
                  </li>
                  <li>
                    <strong>3) Liability and Indemnification:</strong> Describe
                    your liability limits and the circumstances under which you
                    will be held accountable for damages or losses. Include
                    clauses regarding indemnification, which can protect you
                    from client claims.
                  </li>
                  <li>
                    <strong>4) Governing Law and Jurisdiction:</strong> Define
                    the governing law that will apply to the contract and the
                    jurisdiction where any disputes will be resolved. This can
                    simplify legal matters if disagreements arise.
                  </li>
                </ul>
                <p>
                  It's important to have your terms and conditions reviewed by
                  legal counsel to ensure they comply with applicable laws and
                  regulations and to protect your interests. Customize the terms
                  to fit the specific requirements of your Bidding.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="terms-and-conditions">
                <h3>Buying Auction Terms &amp; Condition of Probid</h3>
                <p>
                  Urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc
                  posuere at augue eget porta. Inei odion goat tellus, dignissim
                  fermentumara purus nec, consequat dapibus metus.Vivamus urna
                  worlda mauris, goat te faucibus at egestas quis, fermentum
                  egetonav neque. Duis pharetra lectus nec risusonl
                  pellentesque, opi vitae aliquet nisi dapibus. Sed volutpat mi
                  velit, ateng maximus est eleifend accui Fusce porttitor ex
                  arcu. Phasellus viverra lorem a nibh placerat
                  tincidunt.bolgotai Aliquam andit rutrum elementum urna,
                  velgeria fringilla tellus varius ut. Morbi non velit odio.
                </p>
                <p>
                  It's important to have your terms and conditions reviewed by
                  legal counsel to ensure they comply with applicable laws and
                  regulations and to protect your interests. Customize the terms
                  to fit the specific requirements of your consulting business
                  and industry. Once finalized, provide a copy to clients before
                  beginning any consulting work.
                </p>
                <p>
                  While a career comes with many benefits, it also involves
                  challenges, such as dealing with client expectations, tight
                  deadlines, and continuous adaptation to new industries and
                  technologies. Overall, the consulting field can be highly
                  rewarding for those who enjoy a fast-paced, dynamic.
                </p>
                <div className="btn-area">
                  <button type="submit" className="primary-btn two btn-hover">
                    Accept
                    <span style={{ top: "40.5px", left: "84.2344px" }} />
                  </button>
                  <button
                    type="submit"
                    className="primary-btn two btn-hover black-bg"
                  >
                    Decline
                    <span style={{ top: "40.5px", left: "84.2344px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </>
  );
};

export default TermsConditionPage;
