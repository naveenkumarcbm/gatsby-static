import React from "react";
import { Link } from "gatsby";

const Header = ({headerclassName}) => {
  return (
    <div className={`header-wrapper ${headerclassName}`}>
      <header className="desktop-header hidden-xs hidden-sm hidden-md">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <div className="desktop-logo">
                <a href="https://www.coenterprise.com/">
                  <img
                    className="inverted-logo"
                    src="./B2B Consulting Partner _ IBM Sterling Partner _ Tableau Gold Partner _ CoEnterprise_files/coenterprise-logo-white-full.svg"
                    alt="CoEnterprise"
                  />
                  <img className="color-logo" src="./B2B Consulting Partner _ IBM Sterling Partner _ Tableau Gold Partner _ CoEnterprise_files/coenterprise-logo.svg" alt="CoEnterprise" />
                </a>
              </div>

              <div className="desktop-navbar-wrapper">
                <div className="desktop-search-hide">
                  <nav className="desktop-navbar">
                    <ul id="menu-navbar" className="desktop-navbar-menu submenu-js">
                      <li id="menu-item-46" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46">
                        <Link to="/who-we-help">
                          <a>Who We Help</a>
                        </Link>
                        <ul className="sub-menu">
                          <li id="menu-item-50" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                            <Link to="/who-we-help/supply-chain">
                              <a>Supply Chain</a>
                            </Link>
                          </li>
                          <li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                            <Link to="/who-we-help/it-edi">
                              <a>IT &amp; EDI</a>
                            </Link>
                          </li>
                          <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                            <Link to="/who-we-help/sales-marketing">
                              <a>Sales &amp; Marketing</a>
                            </Link>
                          </li>
                          <li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                            <Link to="/who-we-help/data-analytics">
                              <a>Data Analytics &amp; Business Intel</a>
                            </Link>
                          </li>
                          <li id="menu-item-207" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-207">
                            <Link to="/who-we-help/systems-integration">
                              <a>Systems Integration</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51">
                        <Link to="/solutions">
                          <a>Solutions</a>
                        </Link>
                        <ul className="sub-menu">
                          <li id="menu-item-1402" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1402">
                            <Link to="/solutions/syncrofy_supply_chain">
                              <a>Syncrofy for Supply Chain</a>
                            </Link>
                            <ul className="sub-menu">
                              <li id="menu-item-1679" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1679">
                                <Link to="/solutions/syncrofy_supply_chain/supply-chain-planner">
                                  <a>Supply Chain Planner</a>
                                </Link>
                              </li>
                              <li id="menu-item-1681" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1681">
                                <Link to="/solutions/syncrofy_supply_chain/category_manager">
                                  <a>Category Manager</a>
                                </Link>
                              </li>
                              <li id="menu-item-1680" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1680">
                                <Link to="/solutions/syncrofy_supply_chain/supply-chain-executive">
                                  <a>Supply Chain Executive</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-55">
                            <Link to="/solutions/syncrofy">
                              <a>Syncrofy for EDI &amp; IT</a>
                            </Link>

                            <ul className="sub-menu">
                              <li id="menu-item-1790" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1790">
                                <Link to="/solutions/syncrofy/it-manager">
                                  <a>IT Manager</a>
                                </Link>
                              </li>
                              <li id="menu-item-1789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1789">
                                <Link to="/solutions/syncrofy/edi-manager">
                                  <a>EDI Manager</a>
                                </Link>
                              </li>
                              <li id="menu-item-1788" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1788">
                                <Link to="/solutions/syncrofy/edi-executive">
                                  <a>EDI Executive</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="menu-item-1628" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1628">
                            <Link to="/solutions/syncrofy-integration-cloud">
                              <a>Syncrofy Integration Cloud</a>
                            </Link>
                          </li>
                          <li id="menu-item-54" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
                            <Link to="/solutions/integration">
                              <a>Integration</a>
                            </Link>
                          </li>
                          <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-52">
                            <Link to="/solutions/data-analytics">
                              <a>Data Analytics</a>
                            </Link>

                            <ul className="sub-menu">
                              <li id="menu-item-1953" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1953">
                                <Link to="/solutions/data-analytics/financial-services">
                                  <a>Financial Services</a>
                                </Link>
                              </li>
                              <li id="menu-item-1489" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1489">
                                <Link to="/solutions/data-analytics/insurance">
                                  <a>Insurance</a>
                                </Link>
                              </li>
                              <li id="menu-item-2006" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2006">
                                <Link to="/solutions/data-analytics/retail-and-cpg">
                                  <a>Retail &amp; Consumer Packaged Goods</a>
                                </Link>
                              </li>
                              <li id="menu-item-1952" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1952">
                                <Link to="/solutions/data-analytics/telecommunications">
                                  <a>Telecommunications</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-1710" className="menu-item menu-item-type-post_type_archive menu-item-object-pt_gallery_work menu-item-1710">
                        <Link to="/gallery-of-work">
                          <a>Gallery of Work</a>
                        </Link>
                      </li>
                      <li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56">
                        <Link to="/about">
                          <a>About</a>
                        </Link>
                        <ul className="sub-menu">
                          <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58">
                            <Link to="/about/partners">
                              <a>Partners</a>
                            </Link>
                          </li>
                          <li id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                            <Link to="/about/careers">
                              <a>Careers</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59">
                        <Link to="/resources">
                          <a>Resources</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <nav className="desktop-utility">
                    <ul id="menu-utility" className="desktop-utility-menu">
                      <li id="menu-item-64" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-64">
                        <Link to="/login">
                          <a>Login</a>
                        </Link>
                      </li>
                      <li id="menu-item-63" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
                        <Link to="/contact">
                          <a>contact</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <button className="desktop-flyout-search-open" type="button">
                    <i className="far fa-search"></i>
                  </button>
                </div>

                <a href="https://info.coenterprise.com/consultation" className="btn desktop-cta">
                  Schedule a Consultation
                </a>
              </div>

              <div className="desktop-flyout-search-form">
                <div className="desktop-flyout-search-form-spacing">
                  <form action="https://www.coenterprise.com/search/" method="get">
                    <input type="text" name="q" defaultValue="" className="form-control" placeholder="Search" autoComplete="off" />
                    <button className="button-search" type="submit">
                      <i className="far fa-search"></i>
                    </button>
                    <button className="button-close" type="button">
                      <i className="far fa-times"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="mobile-header hidden-lg hidden-xl">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <div className="mobile-logo">
                <a href="https://www.coenterprise.com/">
                  <img
                    className="inverted-logo"
                    src="./B2B Consulting Partner _ IBM Sterling Partner _ Tableau Gold Partner _ CoEnterprise_files/coenterprise-logo-white-full.svg"
                    alt="CoEnterprise"
                  />
                  <img className="color-logo" src="./B2B Consulting Partner _ IBM Sterling Partner _ Tableau Gold Partner _ CoEnterprise_files/coenterprise-logo.svg" alt="CoEnterprise" />
                </a>
              </div>

              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-collapse"
                aria-controls="mobile-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-collapse" className="collapse hidden-lg hidden-xl">
          <div className="container-fluid">
            <nav className="mobile-menu">
              <ul id="menu-navbar-1" className="mobile-navbar-menu submenu-js">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-46">
                  <Link to="/who-we-help">
                    <a>Who We Help</a>
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                      <Link to="/who-we-help/supply-chain">
                        <a>Supply Chain</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                      <Link to="/who-we-help/it-edi">
                        <a>IT &amp; EDI</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                      <Link to="/who-we-help/sales-marketing">
                        <a>Sales &amp; Marketing</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                      <Link to="/who-we-help/data-analytics">
                        <a>Data Analytics &amp; Business Intel</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-207">
                      <Link to="/who-we-help/systems-integration">
                        <a>Systems Integration</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51">
                  <Link to="/solutions">
                    <a>Solutions</a>
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1402">
                      <Link to="/solutions/syncrofy_supply_chain">
                        <a>Syncrofy for Supply Chain</a>
                      </Link>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1679">
                          <Link to="/solutions/syncrofy_supply_chain/supply-chain-planner">
                            <a>Supply Chain Planner</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1681">
                          <Link to="/solutions/syncrofy_supply_chain/category_manager">
                            <a>Category Manager</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1680">
                          <Link to="/solutions/syncrofy_supply_chain/supply-chain-executive">
                            <a>Supply Chain Executive</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-55">
                      <Link to="/solutions/syncrofy">
                        <a>Syncrofy for EDI &amp; IT</a>
                      </Link>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1790">
                          <Link to="/solutions/syncrofy/it-manager">
                            <a>IT Manager</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1789">
                          <Link to="/solutions/syncrofy/edi-manager">
                            <a>EDI Manager</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1788">
                          <Link to="/solutions/syncrofy/edi-executive">
                            <a>EDI Executive</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1628">
                      <Link to="/solutions/syncrofy-integration-cloud">
                        <a>Syncrofy Integration Cloud</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
                      <Link to="/solutions/integration">
                        <a>Integration</a>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-52">
                      <Link to="/solutions/data-analytics">
                        <a>Data Analytics</a>
                      </Link>

                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1953">
                          <Link to="/solutions/data-analytics/financial-services">
                            <a>Financial Services</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1489">
                          <Link to="/solutions/data-analytics/insurance">
                            <a>Insurance</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2006">
                          <Link to="/solutions/data-analytics/retail-and-cpg">
                            <a>Retail &amp; Consumer Packaged Goods</a>
                          </Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1952">
                          <Link to="/solutions/data-analytics/telecommunications">
                            <a>Telecommunications</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-pt_gallery_work menu-item-1710">
                  <Link to="/gallery-of-work">
                    <a>Gallery of Work</a>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56">
                  <Link to="/about">
                    <a>About</a>
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58">
                      <Link to="/about/partners">
                        <a>Partners</a>
                      </Link>{" "}
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                      <Link to="/about/careers">
                        <a>Careers</a>
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59">
                  <Link to="/resources">
                    <a>Resources</a>
                  </Link>{" "}
                </li>
              </ul>
              <ul id="menu-utility-1" className="mobile-utility-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-64">
                  <Link to="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63">
                  <Link to="/contact">
                    <a>contact</a>
                  </Link>
                </li>
              </ul>
              <div className="mobile-search-wrapper">
                <form className="mobile-search-form" action="https://www.coenterprise.com/search/" method="get">
                  <input type="text" name="q" defaultValue="" className="form-control" placeholder="Search" autoComplete="off" />
                  <button className="button-search" type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
