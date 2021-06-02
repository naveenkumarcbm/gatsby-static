import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";

//All Global Styles
import "../../styles/fonts.css";
import "../../styles/embedpress.css";
import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/style-footer.css";
import "../../styles/visitor.css";
import "../../styles/blocks.style.build.css";
import "../../styles/all.css";
// Shared components
import Header from "../header";
import Footer from "../footer";

export default function Layout({ headerclassName = "", children }) {
  return (
    <div className="page-template page-template-template-about page-template-template-about-php page page-id-34 page-parent" cz-shortcut-listen="true">
      <Helmet>
        <script src={withPrefix("bootstrap.all.min.js")} type="text/javascript" />
        <script src={withPrefix("front.js")} type="text/javascript" />
        <script src={withPrefix("jquery-migrate.min.js")} type="text/javascript" />
        <script src={withPrefix("jquery.min.js")} type="text/javascript" />
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <Header headerclassName={headerclassName} />
      {children}
      <Footer />
    </div>
  );
}
