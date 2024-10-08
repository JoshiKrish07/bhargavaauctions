"use client";
import { useEffect } from "react";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";

import ScrollTopBtn from "../components/common/ScrollTopBtn.jsx";
import useWow from "@/customHooks/useWow";
import Head from "next/head";
import { dmsans, playfair_display } from "@/fonts/font";
import Meta from "@/components/common/Meta";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  // useHoverEffect(".btn-hover");
  useWow();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html
      lang="en"
      className={`${playfair_display.variable} ${dmsans.variable}`}
    >
        <head>
        <link
          rel="icon"
          // href="/assets/img/fav-icon.svg"
          href="/assets/img/bh-auction-logo.jpeg"
          type="image/x-icon"
          sizes="16x16"
        />
           <meta name="description" content="Your description here" />
           <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Bhargava Auctions</title>
      </head>
      <body>
        {children} <ScrollTopBtn /> <ToastContainer />
      </body>
    </html>
  );
}
