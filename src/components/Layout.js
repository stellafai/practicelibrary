import React from "react";
import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";
import Drawer from "./shared/Drawer";
import Footer from "./shared/BodyFooter";

const Layout = ({ ogContent, children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>
        {ogContent && ogContent.title
          ? ogContent.title
          : "Stellafai's Practice Library"}
      </title>
      <meta
        property="og:title"
        content={
          ogContent && ogContent.title
            ? ogContent.title
            : "Stellafai's Practice Library"
        }
      />
      <meta
        property="og:description"
        content={
          ogContent && ogContent.desc
            ? ogContent.desc
            : "Practices that empower teams to collaborate and deliver iteratively"
        }
      />
      <meta property="og:site_name" content="Stellafai's Practice Library" />
      <meta
        property="og:image"
        content={
          ogContent && ogContent.image
            ? ogContent.image
            : "https://cdn.prod.website-files.com/66fd74636f0cd08e0279e29f/672c9fc0380ad92a8f9f2922_webclip.png"
        }
      />
      <meta
        property="twitter:image"
        content={
          ogContent && ogContent.image
            ? ogContent.image
            : "https://cdn.prod.website-files.com/66fd74636f0cd08e0279e29f/672c9fc0380ad92a8f9f2922_webclip.png"
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Drawer />
    {children}
    <Footer />
  </>
);

export default Layout;
