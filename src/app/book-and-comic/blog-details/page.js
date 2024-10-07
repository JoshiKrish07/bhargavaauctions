
import Breadcrumb6 from "@/components/common/Breadcrumb6";
import Footer6 from "@/components/footer/Footer6";
import InnerPageHeader6 from "@/components/header/InnerPageHeader6";
import Link from "next/link";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};

const CarAuctionBlogDetails = () => {
  return (
    <>
      <InnerPageHeader6 />
      <Breadcrumb6 pagetitle="Blog Details" currentPage="Blog Details" />
      <div className="blog-details-page pt-110 mb-110">
        <div className="container">
          <div className="row mb-70">
            <div className="col-12">
              <div className="blog-details-author-meta">
                <div className="author-area">
                  <div className="author-img">
                    <img
                      src="../assets/img/inner-pages/blog-meta-author-img.png"
                      alt=""
                    />
                  </div>
                  <div className="author-content">
                    <h6>
                      By, <Link href="/book-and-comic/blog-grid">Cooper Jogan</Link>
                    </h6>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                    </svg>
                    5 Jan, 2022
                  </li>
                  <li>
                    <svg
                      width={12}
                      height={16}
                      viewBox="0 0 12 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.80968 15.0679C9.5273 12.1176 8.80817 8.40483 6.09966 6.24033C6.09808 6.23911 6.0965 6.23758 6.09523 6.23666L6.10694 6.26482L6.10504 6.28594C6.63276 7.63466 6.55873 9.11531 5.91047 10.3857L5.45362 11.2813L5.31347 10.2917C5.21824 9.62039 4.95659 8.98001 4.55353 8.43177H4.48994L4.4564 8.33993C4.46115 9.3657 4.23778 10.3762 3.7996 11.3294C3.22474 12.5768 3.30922 14.0152 4.02581 15.1778L4.52031 15.9804L3.63066 15.6168C2.16361 15.0171 0.990804 13.8618 0.412783 12.4473C-0.234842 10.8678 -0.114934 9.03633 0.733906 7.54925C1.17652 6.77572 1.48657 5.95443 1.65583 5.10773L1.82129 4.27787L2.24334 5.01804C2.44487 5.37098 2.59326 5.75301 2.68532 6.15432L2.69481 6.16381L2.70462 6.22809L2.71379 6.22533C3.97804 4.6002 4.73545 2.57805 4.84586 0.530486L4.87434 0L5.33435 0.290191C7.21173 1.47391 8.51552 3.37301 8.91827 5.5069L8.92744 5.55067L8.93219 5.5574L8.95275 5.52924C9.3207 5.05906 9.51496 4.4998 9.51496 3.91115V2.99956L10.0835 3.72626C11.4053 5.41537 12.083 7.51068 11.9919 9.62651C11.8799 12.117 10.4761 14.3029 8.23648 15.4873L7.26678 16L7.80968 15.0679Z" />
                    </svg>
                    3.9K View
                  </li>
                  <li>
                    <a href="#comment-area">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="M14.5672 14.9619C14.5917 15.0728 14.5913 15.1878 14.5658 15.2986C14.5403 15.4093 14.4905 15.513 14.42 15.6021C14.3494 15.6912 14.2599 15.7635 14.158 15.8136C14.056 15.8638 13.9441 15.8906 13.8305 15.8922C13.7133 15.8916 13.5977 15.8643 13.4925 15.8124L12.1483 15.1555C10.8921 15.6143 9.51644 15.6277 8.2515 15.1936C6.98655 14.7595 5.90904 13.9042 5.19922 12.7708C6.15026 12.8941 7.11661 12.8159 8.03545 12.5413C8.95429 12.2667 9.80505 11.8018 10.5324 11.1768C11.2598 10.5518 11.8476 9.78079 12.2575 8.91379C12.6674 8.0468 12.8902 7.10326 12.9116 6.14449C12.9119 5.70944 12.8674 5.27551 12.7787 4.84961C13.6879 5.29062 14.4611 5.96909 15.0165 6.81329C15.572 7.65749 15.8891 8.63608 15.9342 9.64561C15.9643 10.4111 15.8346 11.1744 15.5535 11.887C15.2724 12.5996 14.846 13.2459 14.3014 13.7847L14.5672 14.9619Z" />
                          <path d="M6.0757 0.216683C4.48484 0.198937 2.95187 0.812778 1.81293 1.92361C0.673981 3.03443 0.0220199 4.55159 1.29169e-06 6.14239C-0.000538167 6.95003 0.167902 7.74885 0.494497 8.48752C0.821091 9.22618 1.29861 9.88834 1.89638 10.4315L1.65183 11.737C1.63148 11.8466 1.63545 11.9593 1.66346 12.0673C1.69147 12.1752 1.74285 12.2756 1.81395 12.3615C1.88505 12.4474 1.97414 12.5166 2.07493 12.5642C2.17572 12.6119 2.28575 12.6368 2.39724 12.6373C2.52333 12.6371 2.64739 12.6056 2.75837 12.5458L4.19679 11.773C4.8041 11.9679 5.43791 12.0675 6.0757 12.0685C7.66662 12.0862 9.19965 11.4723 10.3386 10.3614C11.4776 9.25051 12.1295 7.73326 12.1514 6.14239C12.1294 4.55159 11.4774 3.03443 10.3385 1.92361C9.19953 0.812778 7.66656 0.198937 6.0757 0.216683ZM3.79731 7.05184C3.64711 7.05184 3.50027 7.0073 3.37538 6.92385C3.25049 6.8404 3.15314 6.72179 3.09566 6.58302C3.03818 6.44424 3.02314 6.29154 3.05244 6.14422C3.08175 5.9969 3.15408 5.86157 3.26029 5.75536C3.36651 5.64915 3.50183 5.57682 3.64915 5.54751C3.79647 5.51821 3.94917 5.53325 4.08795 5.59073C4.22672 5.64821 4.34533 5.74555 4.42878 5.87045C4.51223 5.99534 4.55678 6.14217 4.55678 6.29238C4.55678 6.4938 4.47676 6.68698 4.33433 6.8294C4.19191 6.97183 3.99874 7.05184 3.79731 7.05184ZM6.0757 7.05184C5.92549 7.05184 5.77866 7.0073 5.65377 6.92385C5.52887 6.8404 5.43153 6.72179 5.37405 6.58302C5.31657 6.44424 5.30153 6.29154 5.33083 6.14422C5.36013 5.9969 5.43247 5.86157 5.53868 5.75536C5.64489 5.64915 5.78022 5.57682 5.92754 5.54751C6.07486 5.51821 6.22756 5.53325 6.36633 5.59073C6.50511 5.64821 6.62372 5.74555 6.70717 5.87045C6.79062 5.99534 6.83516 6.14217 6.83516 6.29238C6.83516 6.4938 6.75515 6.68698 6.61272 6.8294C6.47029 6.97183 6.27712 7.05184 6.0757 7.05184ZM8.35409 7.05184C8.20388 7.05184 8.05704 7.0073 7.93215 6.92385C7.80726 6.8404 7.70992 6.72179 7.65244 6.58302C7.59495 6.44424 7.57991 6.29154 7.60922 6.14422C7.63852 5.9969 7.71085 5.86157 7.81707 5.75536C7.92328 5.64915 8.0586 5.57682 8.20592 5.54751C8.35324 5.51821 8.50595 5.53325 8.64472 5.59073C8.78349 5.64821 8.90211 5.74555 8.98556 5.87045C9.06901 5.99534 9.11355 6.14217 9.11355 6.29238C9.11355 6.4938 9.03354 6.68698 8.89111 6.8294C8.74868 6.97183 8.55551 7.05184 8.35409 7.05184Z" />
                        </g>
                      </svg>
                      840 Comment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-details-thumb">
                <img
                  src="../assets/img/inner-pages/blog-details-thumb-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row gy-5 mb-70">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <h1>
                  Winning whispers tips and tricks borns from successful
                  bidding.
                </h1>
                <span className="line-break" />
                <span className="line-break" />
                <p className="first-para">
                  NSuspendisse bibendum efficitur orci, a pretium erat mattis
                  nec. Vestibulum antena ypsumi primis inaetahsjanl faucibus
                  orci luctus etenjot ultrices posuere cubilia curae curabitur.
                </p>
                <span className="line-break" />
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
                <blockquote>
                  <p className="blockquote-text">
                    "I work with Alguneb Johnl on many projects, he always
                    toldagona exci my expectations with his quality work and
                    fastestopa tope service, very smooth and simple
                    communication."
                  </p>
                  <h3 className="blockquote-author">Leslie Alexander</h3>
                  <svg
                    className="quotes"
                    xmlns="http://www.w3.org/2000/svg"
                    width={93}
                    height={90}
                    viewBox="0 0 93 90"
                  >
                    <path d="M52.3886 44.806L92.5 88.7114V0.5H52.3886V44.806ZM0.5 44.806L40.61 88.7114V0.5H0.5V44.806Z" />
                  </svg>
                </blockquote>
                <img
                  src="../assets/img/inner-pages/blog-details-img1.jpg"
                  alt=""
                />
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <h2>Our Begin Now To Beingonl.</h2>
                <span className="line-break" />
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
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <div className="row g-4">
                  <div className="col-lg-6">
                    <img
                      src="../assets/img/inner-pages/blog-details-img2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="../assets/img/inner-pages/blog-details-img3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <h2>Our Begin Now To Beingonl.</h2>
                <span className="line-break" />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                    </svg>
                    Nulla vestibulum vestibulum varius told this.
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                    </svg>
                    Consequat congue sem. In convallis purus ut.
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                    </svg>
                    Vitae efficitur risus molestie. Donec laoreet.
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                    </svg>
                    Est vel feugiat dapibus. Quisque velit ullamcorp.
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                    </svg>
                    Pharetra vitae, varius in dui. Cras et aliquam.
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                    >
                      <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                    </svg>
                    Tortor eget vestibulum vestibulum, leo cursus.
                  </li>
                </ul>
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
                      <Link href="/book-and-comic/blog-grid">
                        Digital Art
                        <span>(20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">
                        Automotive
                        <span>(15)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">
                        Antiques
                        <span>(25)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">
                        Gadget and Technology
                        <span>(20)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">
                        Real State
                        <span>(30)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">
                        Old Coin
                        <span>(22)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-sidebar">
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
                      <Link href="/book-and-comic/blog-details">
                        <img
                          src="../assets/img/inner-pages/popular-post-img1.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/book-and-comic/blog-grid">20 February, 2024</Link>
                      <h6>
                        <Link href="/book-and-comic/blog-details">
                          Gavel Gazette Guide Offer News.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/book-and-comic/blog-details">
                        <img
                          src="../assets/img/inner-pages/popular-post-img2.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/book-and-comic/blog-grid">12 January, 2024</Link>
                      <h6>
                        <Link href="/book-and-comic/blog-details">
                          Rutrum Vitae Augue Idel And Euismod Pulvi.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/book-and-comic/blog-details">
                        <img
                          src="../assets/img/inner-pages/popular-post-img3.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/book-and-comic/blog-grid">04 January, 2024</Link>
                      <h6>
                        <Link href="/book-and-comic/blog-details">
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
                      <Link href="/book-and-comic/blog-grid">Porcelain</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Manuscripts</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Ceramics</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Renaissance</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Baroque Art</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Rococo Art</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Romanticism</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Photography</Link>
                    </li>
                    <li>
                      <Link href="/book-and-comic/blog-grid">Smartwatches</Link>
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
          <div className="blog-tag">
            <h6>Tag:</h6>
            <ul>
              <li>
                <Link href="/book-and-comic/blog-grid">Industry,</Link>
              </li>
              <li>
                <Link href="/book-and-comic/blog-grid">Marketing,</Link>
              </li>
              <li>
                <Link href="/book-and-comic/blog-grid">Technology,</Link>
              </li>
              <li>
                <Link href="/book-and-comic/blog-grid">Health Care</Link>
              </li>
            </ul>
          </div>
          <div className="row mb-110">
            <div className="col-lg-12">
              <div className="details-navigation">
                <div className="single-navigation">
                  <Link href="/book-and-comic/blog-details" className="nav-btn">
                    <div className="arrow">
                      <svg
                        width={16}
                        height={13}
                        viewBox="0 0 16 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.58563 6.98704L15.7913 6.98738L15.7913 6.01295L2.58563 6.0133L7.15096 1.44797L6.46232 0.75933L0.72148 6.50017L6.46232 12.241L7.15096 11.5524L2.58563 6.98704Z"
                          strokeWidth="0.3"
                        />
                      </svg>
                    </div>
                    Previous Post
                  </Link>
                  <div className="content">
                    <h6>
                      <Link href="/book-and-comic/blog-details">
                        Challenges creating structure multiple brand system.
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="single-navigation two text-end">
                  <div className="content">
                    <h6>
                      <Link href="/book-and-comic/blog-details">
                        Challenges creating structure multiple brand system.
                      </Link>
                    </h6>
                  </div>
                  <Link href="/book-and-comic/blog-details" className="nav-btn">
                    Next Post
                    <div className="arrow">
                      <svg
                        width={16}
                        height={13}
                        viewBox="0 0 16 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4144 6.01333L0.208692 6.01299L0.208692 6.98741L13.4144 6.98707L8.84904 11.5524L9.53768 12.241L15.2785 6.5002L9.53768 0.759362L8.84904 1.448L13.4144 6.01333Z"
                          strokeWidth="0.3"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="comment-area">
                <div className="comment-title">
                  <h4>Comments (03)</h4>
                  <div className="dash" />
                </div>
                <ul className="comment">
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="../assets/img/inner-pages/comment-author-01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Mr. Bowmik Haldar,</h6>
                          <span>05 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply (02)
                        </div>
                      </div>
                    </div>
                    <ul className="comment-replay">
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img
                              src="../assets/img/inner-pages/comment-author-02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Jacoline Juie,</h6>
                              <span>05 January, 2024</span>
                            </div>
                            <p>
                              However, here are some well-regarded car
                              dealerships known for their customer service,
                              inventory, and overall reputation. It's always a
                              good idea to research and read reviews specific...
                            </p>
                            <div className="replay-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                              >
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <img
                              src="../assets/img/inner-pages/comment-author-03.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Robert Smith,</h6>
                              <span>05 January, 2024</span>
                            </div>
                            <p>
                              However, here are some well-regarded car
                              dealerships known for their customer service,
                              inventory, and overall reputation. It's always a
                              good idea to research and read reviews specific...
                            </p>
                            <div className="replay-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                              >
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                              </svg>
                              Reply
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="../assets/img/inner-pages/comment-author-04.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Srileka Panday,</h6>
                          <span>08 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply (02)
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="../assets/img/inner-pages/comment-author-05.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Mr. Bowmik Haldar,</h6>
                          <span>23 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply (02)
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="inquiry-form">
                  <div className="title">
                    <h4>Leave Your Comment:</h4>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Your Name* :</label>
                          <input type="text" placeholder="Jackson Mile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-30">
                          <label>Your Email* :</label>
                          <input type="email" placeholder="example@gamil.com" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-50">
                          <label>Your Comments*</label>
                          <textarea
                            placeholder="Write Something..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-inner">
                      <button className="primary-btn btn-hover" type="submit">
                        Post Comment
                       <span style={{top: '40.5px', left: '84.2344px'}} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer6 />
    </>
  );
};

export default CarAuctionBlogDetails;
