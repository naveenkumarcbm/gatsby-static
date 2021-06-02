import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer bg-cover">
      <div className="container content-section">
        <div className="row">
          <div className="col-md content-section">
            <ul id="menu-footer-nav-1" className="footer-menu">
              <li id="menu-item-68" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-68">
                <Link to="/solutions"><a>Solutions</a></Link>
                <ul className="sub-menu">
                  <li id="menu-item-1403" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                    <Link to="/solutions/syncrofy_supply_chain"><a>Syncrofy for Supply Chain</a></Link>
                  </li>
                  <li id="menu-item-69" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69">
                    <Link to="/solutions/syncrofy"><a>Syncrofy for EDI &amp; IT</a></Link>
                  </li>
                  <li id="menu-item-1630" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1630">
                    <Link to="/solutions/syncrofy-integration-cloud"><a>Syncrofy Integration Cloud</a></Link>
                  </li>
                  <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70">
                    <Link to="/solutions/integration"><a>Integration</a></Link>
                  </li>
                  <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                    <Link to="/solutions/data-analytics"><a>Data Analytics</a></Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md content-section">
            <ul id="menu-footer-nav-2" className="footer-menu">
            <li id="menu-item-79" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79">
            {/* <Link to="/contact"><a>Contact</a></Link> */}
                <Link to="/contact"><a>USA Address:</a></Link>
                <ul className="contact-address">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                    <span>509 Ayinger LN,</span>
                    <span>Austin, TX-78728</span>
                    <span>Ph: 9441501817</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ul id="menu-footer-nav-3" className="footer-menu">
              <li id="menu-item-79" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79">
                <Link to="/contact"><a>India Address:</a></Link>
                <ul className="contact-address">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                    <span>B-12,Indian Airlines Employees colony,</span>
                    <span>Begumpet, Secunderabad, Hyderabad,</span>
                    <span>Telangana, India, 500003.</span>
                  </li>
                </ul>
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
              © 2021 copyright all rights reserved | <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
