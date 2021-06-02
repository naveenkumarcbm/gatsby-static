import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-cover">
      <div className="container content-section">
        <div className="row">
          <div className="col-lg-4 content-section">
            <div className="footer-logo">
              <a href="https://www.coenterprise.com/">
                <img src="./coenterprise-logo-white.svg" alt="CoEnterprise" />
              </a>
            </div>
          </div>

          <div className="col-md content-section">
            <ul id="menu-footer-nav-1" className="footer-menu">
              <li id="menu-item-68" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-68">
                <a href="https://www.coenterprise.com/solutions/">Solutions</a>
                <ul className="sub-menu">
                  <li id="menu-item-1403" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                    <a href="https://www.coenterprise.com/solutions/syncrofy_supply_chain/">Syncrofy for Supply Chain</a>
                  </li>
                  <li id="menu-item-69" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69">
                    <a href="https://www.coenterprise.com/solutions/syncrofy/">Syncrofy for EDI &amp; IT</a>
                  </li>
                  <li id="menu-item-1630" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1630">
                    <a href="https://www.coenterprise.com/solutions/syncrofy-integration-cloud/">Syncrofy Integration Cloud</a>
                  </li>
                  <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70">
                    <a href="https://www.coenterprise.com/solutions/integration/">Integration</a>
                  </li>
                  <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                    <a href="https://www.coenterprise.com/solutions/data-analytics/">Data Analytics</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md content-section">
            <ul id="menu-footer-nav-2" className="footer-menu">
              <li id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                <a href="https://www.coenterprise.com/who-we-help/">Who We Help</a>
              </li>
              <li id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-34 current_page_item menu-item-75">
                <a href="https://www.coenterprise.com/about/" aria-current="page">
                  About
                </a>
              </li>
              <li id="menu-item-76" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76">
                <a href="https://www.coenterprise.com/resources/">Resources</a>
              </li>
              <li id="menu-item-73" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73">
                <a href="https://www.coenterprise.com/blog/">Blog</a>
              </li>
              <li id="menu-item-77" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77">
                <a href="https://www.coenterprise.com/news/">News</a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ul id="menu-footer-nav-3" className="footer-menu">
              <li id="menu-item-79" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79">
                <a href="https://www.coenterprise.com/contact/">Contact</a>
              </li>
              <li id="menu-item-78" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78">
                <a href="https://www.coenterprise.com/about/careers/">Careers</a>
              </li>
            </ul>

            <ul className="footer-social">
              <li>
                <a href="https://twitter.com/coenterprise" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/coenterprise/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/CoEnterprise/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md text-center footer-copy">
            <p className="text-small">
              © 2021 copyright all rights reserved | <a href="https://www.coenterprise.com/privacy-policy/">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
