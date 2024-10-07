import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="home1-footer-top-area">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="footer-top-banner">
                <div className="banner-content">
                  <span>How to use</span>
                  <h2><Link href="/how-to-buy">How to bid your item</Link></h2>
                </div>
                <Link href="/how-to-buy" className="arrow">
                  <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M0.495049 0H99.9999V18.6274L18.8119 99.9997L0 81.3723L55.4455 26.4705L0.495049 26.9607V0Z" />
                      <path d="M100 100.001V37.2559L73.2673 63.7264V100.001H100Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-top-banner two">
                <div className="banner-content">
                  <span>How to use</span>
                  <h2><Link href="/how-to-sell">How to sell your item</Link></h2>
                </div>
                <Link href="/how-to-sell" className="arrow">
                  <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M0.495049 0H99.9999V18.6274L18.8119 99.9997L0 81.3723L55.4455 26.4705L0.495049 26.9607V0Z" />
                      <path d="M100 100.001V37.2559L73.2673 63.7264V100.001H100Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-menu-wrap">
              <div className="row g-lg-4 gy-5">
                <div className="col-lg-2 col-sm-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Category</h4>
                    </div>
                    <div className="menu-container">
                      <ul className="widget-list">
                        <li><Link href="/auction-grid">Automotive</Link></li>
                        <li><Link href="/auction-grid">Antiques</Link></li>
                        <li><Link href="/auction-grid">Digital art</Link></li>
                        <li><Link href="/auction-grid">Books &amp; comics</Link></li>
                        <li><Link href="/auction-grid">Gadget</Link></li>
                        <li><Link href="/auction-grid">Electronics</Link></li>
                        <li><Link href="/auction-grid">Coin</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Company</h4>
                    </div>
                    <div className="menu-container">
                      <ul className="widget-list">
                        <li><Link href="/how-to-buy">How to bid with us</Link></li>
                        <li><Link href="/how-to-sell">How to sell with us</Link></li>
                        <li><Link href="/about">About us</Link></li>
                        <li><Link href="/faq">F.A.Q</Link></li>
                        <li><a href="#">Our Brand</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex align-items-center justify-content-lg-center justify-content-start">
                  <div className="footer-logo-area">
                    <div className="footer-logo">
                      <img src="assets/img/footer-logo.svg" alt="" />
                    </div>
                    <div className="social-area">
                      <h5>Social Just You Connected Us!</h5>
                      <p>All of update in social</p>
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
                <div className="col-lg-4 col-sm-6 d-flex justify-content-sm-end justify-content-start">
                  <div className="newletter-and-payment-wrap">
                    <div className="newletter-area">
                      <h4>Join Our Newsletter &amp; More information.</h4>
                      <form>
                        <div className="form-inner">
                          <input type="email" placeholder="Email Address" />
                          <button type="submit"><i className="bi bi-arrow-right" /></button>
                        </div>
                      </form>
                    </div>
                    <div className="payment-area">
                      <h6>Secured Payment Gateways</h6>
                      <ul className="payment-options">
                        <li><img src="assets/img/home1/icon/visa.svg" alt="" /></li>
                        <li><img src="assets/img/home1/icon/master-card.svg" alt="" /></li>
                        <li><img src="assets/img/home1/icon/american-express.svg" alt="" /></li>
                        <li><img src="assets/img/home1/icon/maestro.svg" alt="" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="copyright-area">
                <p>©Copyright 2024 <Link href="/">Probid</Link> | Design By <a href="https://www.egenslab.com/">Egens Lab</a></p>
              </div>
              <div className="footer-bottom-right">
                <ul>
                  <li><Link href="/support-center">Support Center</Link></li>
                  <li><Link href="/terms-condition">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
