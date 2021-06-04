import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="homepage-aspot aspot-bg-blue bg-cover">
        <div className="hexagon1"></div>
        <div className="hexagon2"></div>
        <div className="hexagon3"></div>
        <div className="hexagon4"></div>
        <div className="hexagon5"></div>
        <div className="hexagon6"></div>
        <div className="d-flex align-items-center h-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 content-inverse">
                <p className="h5">
                  We Are <span style={{color: '#ff9029'}}>Sass Innovations</span>
                </p>
                <h1>
                  <strong>Empowering faster, smarter decision-making</strong>
                </h1>
              </div>
              <div className="col-lg col-xl-4 offset-xl-1">
                <div className="homepage-offer box-shadow-2">
                  <h3>Recipient of the Marketing Innovation Partner Award from Tableau!</h3>

                  <img
                    width="450"
                    height="305"
                    src="./Tableau_PartnerAward_2020MarketingInnovation.png"
                    className="homepage-offer-graphic"
                    alt=""
                    loading="lazy"
                    srcSet="
                      ./Tableau_PartnerAward_2020MarketingInnovation.png         450w,
                      ./Tableau_PartnerAward_2020MarketingInnovation-300x203.png 300w
                    "
                    sizes="(max-width: 450px) 100vw, 450px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-shapes-3 bg-full-width">
        <div className="container">
          <div className="row">
            <div className="col-md content-section text-center">
              <h2 className="heading-underline underline-purple" style={{textAlign: "center"}}>
                Who We Help
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 content-section-tight">
              <a href="/who-we-help/supply-chain/" className="feature-bucket box-shadow-1 box-shadow-padding-2 height-100 bg-cover green">
                <div className="row">
                  <div className="col-lg-auto">
                    <p>
                      <img
                        width="300"
                        height="300"
                        src="./Home_SupplyChain-300x300.png"
                        className="image-center"
                        alt="Who We Help Supply Chain"
                        loading="lazy"
                        srcSet="./Home_SupplyChain-300x300.png 300w, ./Home_SupplyChain.png 800w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </p>
                  </div>
                  <div className="col-lg">
                    <h4>Supply Chain</h4>
                    <p>If you’re a supply chain professional you know that timely execution requires access to real-time information and business intelligence. Let us help you with that.</p>
                    <p className="learn-more">
                      <span className="hover-text">Learn More </span>
                      <i className="fal fa-long-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 content-section-tight">
              <a href="/who-we-help/it-edi/" className="feature-bucket box-shadow-1 box-shadow-padding-2 height-100 bg-cover purple">
                <div className="row">
                  <div className="col-lg-auto">
                    <p>
                      <img
                        width="300"
                        height="300"
                        src="./WhoWeHelp_Software_EDI-300x300.png"
                        className="image-center"
                        alt="Who We Help IT and EDI"
                        loading="lazy"
                        srcSet="./WhoWeHelp_Software_EDI-300x300.png 300w, ./WhoWeHelp_Software_EDI.png 800w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </p>
                  </div>
                  <div className="col-lg">
                    <h4>IT &amp; EDI</h4>
                    <p>
                      A lack of data visibility not only affects your EDI team, but IT as well who must spend hours answering EDI-related questions. We can help you take back control over your data
                      and make it more actionable.
                    </p>
                    <p className="learn-more">
                      <span className="hover-text">Learn More </span>
                      <i className="fal fa-long-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 content-section-tight">
              <a href="/who-we-help/sales-marketing/" className="feature-bucket box-shadow-1 box-shadow-padding-2 height-100 bg-cover orange">
                <div className="row">
                  <div className="col-lg-auto">
                    <p>
                      <img
                        width="300"
                        height="300"
                        src="./Home_SalesandMarketing-300x300.png"
                        className="image-center"
                        alt="sales and marketing"
                        loading="lazy"
                        srcSet="./Home_SalesandMarketing-300x300.png 300w, ./Home_SalesandMarketing.png 800w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </p>
                  </div>
                  <div className="col-lg">
                    <h4>Sales &amp; Marketing</h4>
                    <p>Looking to improve your reporting through Tableau and Salesforce? Let us take the wheel and help you see your customers in a whole new light.</p>
                    <p className="learn-more">
                      <span className="hover-text">Learn More </span>
                      <i className="fal fa-long-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 content-section-tight">
              <a href="/who-we-help/data-analytics/" className="feature-bucket box-shadow-1 box-shadow-padding-2 height-100 bg-cover blue">
                <div className="row">
                  <div className="col-lg-auto">
                    <p>
                      <img
                        width="300"
                        height="300"
                        src="./Home_DataAndBusinessIntel-300x300.png"
                        className="image-center"
                        alt="data analytics"
                        loading="lazy"
                        srcSet="./Home_DataAndBusinessIntel-300x300.png 300w, ./Home_DataAndBusinessIntel.png 800w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </p>
                  </div>
                  <div className="col-lg">
                    <h4>Data Analytics &amp; Business Intel</h4>
                    <p>
                      We know you depend on the ability to draw meaningful insights and conclusions from your data. Our experts can help you solve business problems with your data and drive long-term
                      success.
                    </p>
                    <p className="learn-more">
                      <span className="hover-text">Learn More </span>
                      <i className="fal fa-long-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 content-section-tight">
              <a href="/who-we-help/systems-integration/" className="feature-bucket box-shadow-1 box-shadow-padding-2 height-100 bg-cover blue-purple">
                <div className="row">
                  <div className="col-lg-auto">
                    <p>
                      <img
                        width="300"
                        height="300"
                        src="./WhoWeHelp_Services_SysIntegrations-300x300.png"
                        className="image-center"
                        alt="system integrations"
                        loading="lazy"
                        srcSet="
                          ./WhoWeHelp_Services_SysIntegrations-300x300.png 300w,
                          ./WhoWeHelp_Services_SysIntegrations.png         800w
                        "
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                    </p>
                  </div>
                  <div className="col-lg">
                    <h4>Systems Integration</h4>
                    <p>Seamless connectivity for your on-premise solutions and cloud-based applications.</p>
                    <p className="learn-more">
                      <span className="hover-text">Learn More </span>
                      <i className="fal fa-long-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container-lg bg-shapes-5 bg-full-width-repeat">
        <div className="container">
          <div className="row align-items-center wide-gutters">
            <div className="col-lg-4 content-section">
              <h2 className="paragraph">SOLUTIONS</h2>
              <h3 className="h2 heading-underline underline-blue">Unlock your data’s full potential.</h3>
              <p>No two customers are alike. That’s why we ensure that every customer has access to the right information and solutions.</p>
              <p>
                <a className="btn btn-aqua" href="/solutions/">
                  All Solutions
                </a>
              </p>
            </div>
            <div className="col-lg">
              <div className="row">
                <div className="col-md-6 solution-bucket-column-stagger">
                  <div className="content-section-tight">
                    <a href="/solutions/syncrofy/" className="solution-bucket-wrapper">
                      <div className="solution-bucket box-shadow-1 box-shadow-padding-2">
                        <p>
                          <img
                            width="300"
                            height="300"
                            src="./Home_Syncrofy-300x300.png"
                            className=""
                            alt="syncrofy"
                            loading="lazy"
                            srcSet="./Home_Syncrofy-300x300.png 300w, ./Home_Syncrofy.png 800w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <h4>Syncrofy for EDI &amp; IT</h4>
                        <p>Our powerful, cloud-based data visibility platform.</p>
                        <p className="learn-more">Learn More</p>
                      </div>
                    </a>
                  </div>
                  <div className="content-section-tight">
                    <a href="/solutions/integration/" className="solution-bucket-wrapper">
                      <div className="solution-bucket box-shadow-1 box-shadow-padding-2">
                        <p>
                          <img
                            width="300"
                            height="300"
                            src="./Home_Integration-300x300.png"
                            className=""
                            alt="integration"
                            loading="lazy"
                            srcSet="./Home_Integration-300x300.png 300w, ./Home_Integration.png 800w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <h4>Integration</h4>
                        <p>Award-winning IBM consulting and services.</p>
                        <p className="learn-more">Learn More</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="content-section-tight">
                    <a href="/solutions/data-analytics/" className="solution-bucket-wrapper">
                      <div className="solution-bucket box-shadow-1 box-shadow-padding-2">
                        <p>
                          <img
                            width="300"
                            height="300"
                            src="./Home_DataAnalytics-300x300.png"
                            className=""
                            alt="data analytics"
                            loading="lazy"
                            srcSet="./Home_DataAnalytics-300x300.png 300w, ./Home_DataAnalytics.png 800w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <h4>Data Analytics</h4>
                        <p>Customized Tableau consulting and services.</p>
                        <p className="learn-more">Learn More</p>
                      </div>
                    </a>
                  </div>
                  <div className="content-section-tight">
                    <a href="/solutions/hybrid-integration-platform/" className="solution-bucket-wrapper">
                      <div className="solution-bucket box-shadow-1 box-shadow-padding-2">
                        <p>
                          <img
                            width="300"
                            height="300"
                            src="./Home_HIP-300x300.png"
                            className=""
                            alt="Hybrid Integration Platform"
                            loading="lazy"
                            srcSet="./Home_HIP-300x300.png 300w, ./Home_HIP.png 800w"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </p>
                        <h4>Hybrid Integration Platform</h4>
                        <p>The tools to consolidate and simplify the integration process.</p>
                        <p className="learn-more">Learn More</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shapes-3 bg-full-width">
        <div className="content-container testimonial-block-bg-3">
          <div className="container">
            <div id="homepage-carousel" className="carousel slide">
              <div className="row">
                <div className="col-md offset-md-1 content-section">
                  <h2 className="paragraph">CASE STUDIES</h2>
                  <h2 className="heading-underline underline-orange">See what our clients have to say about us.</h2>
                  <p>
                    <a className="btn btn-orange-outline" href="/case-studies">
                      View All Case Studies
                    </a>
                  </p>
                </div>

                <div className="col-md-5 offset-md-1 content-section order-md-first">
                  <ol className="carousel-indicators homepage-carousel-indicators">
                    <li data-target="#homepage-carousel" className="active" data-slide-to="0">
                      <img
                        width="2000"
                        height="463"
                        src="./BN_Logo_FeaturedImage.png"
                        className="image-center"
                        alt=""
                        loading="lazy"
                        srcSet="
                          ./BN_Logo_FeaturedImage.png          2000w,
                          ./BN_Logo_FeaturedImage-800x185.png   800w,
                          ./BN_Logo_FeaturedImage-300x69.png    300w,
                          ./BN_Logo_FeaturedImage-1536x356.png 1536w,
                          ./BN_Logo_FeaturedImage-2048x474.png 2048w
                        "
                        sizes="(max-width: 2000px) 100vw, 2000px"
                      />
                    </li>

                    <li data-target="#homepage-carousel" className="" data-slide-to="1">
                      <img
                        width="800"
                        height="200"
                        src="./hachette-book-group-case-study.jpg"
                        className="image-center"
                        alt="Hachette Book Group"
                        loading="lazy"
                        srcSet="
                          ./hachette-book-group-case-study.jpg        800w,
                          ./hachette-book-group-case-study-300x75.jpg 300w
                        "
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </li>
                  </ol>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row justify-content-center">
                        <div className="col-lg-10 content-section">
                          <div className="box-shadow-1 box-shadow-padding-3 testimonial-block-bg-2">
                            <h4 className="text-grey">
                              Syncrofy allows us to further strengthen relationships with our vendors because we can track everything and identify any patterns or potential challenges.
                            </h4>
                            <br />
                            <div className="row align-items-center">
                              <div className="col-md border-left-grey">
                                <div className="mb-3 mb-md-0">
                                  <h5 className="scrunch">Barnes &amp; Noble Education, Inc.</h5>
                                  <p className="scrunch">Joe Gavin, EDI Manager</p>
                                </div>
                              </div>
                              <div className="col-md-4 order-md-first">
                                <p className="scrunch">
                                  <a
                                    href="/case-studies/case-study-leading-college-bookseller-gains-edi-visibility-and-further-enhances-vendor-relations-with-syncrofy/"
                                    className="btn btn-orange"
                                  >
                                    Read Full Case Study
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row justify-content-center">
                        <div className="col-lg-10 content-section">
                          <div className="box-shadow-1 box-shadow-padding-3 testimonial-block-bg-2">
                            <h4 className="text-grey">
                              “The fact that Sass Innovations was New York-based and very responsive was certainly appealing to us. That combined with their reputation as a company that would work with
                              you to customize and tweak their solutions to your specific needs was a major plus and really something we were looking for in a partner.”
                            </h4>
                            <br />
                            <div className="row align-items-center">
                              <div className="col-md border-left-grey">
                                <div className="mb-3 mb-md-0">
                                  <h5 className="scrunch">Hachette Book Group</h5>
                                  <p className="scrunch">Jon Jarocha, EDI Manager</p>
                                </div>
                              </div>
                              <div className="col-md-4 order-md-first">
                                <p className="scrunch">
                                  <a href="/case-studies/case-study-hachette-book-group/" className="btn btn-orange">
                                    Read Full Case Study
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container-lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 content-section text-center">
              <h2 className="heading-underline underline-purple" style={{textAlign: "center"}}>
                Our Partners
              </h2>
              <p className="text-big" style={{textAlign: "center"}}>
                We work with the world’s most innovative technology partners in order to deliver our customers innovative solutions for today and beyond.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md content-section-tight">
              <div className="row">
                <div className="col-md-6 col-lg-3 content-section-tight">
                  <div className="box-shadow-1 box-shadow-padding-2 d-flex align-items-center h-100">
                    <img
                      width="175"
                      height="75"
                      src="./ibm-partner-log.png"
                      className="image-center partner-logo"
                      alt="IBM"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 content-section-tight">
                  <div className="box-shadow-1 box-shadow-padding-2 d-flex align-items-center h-100">
                    <img
                      width="200"
                      height="56"
                      src="./tableau-partner-logo.jpg"
                      className="image-center partner-logo"
                      alt="Tableau"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 content-section-tight">
                  <div className="box-shadow-1 box-shadow-padding-2 d-flex align-items-center h-100">
                    <img
                      width="121"
                      height="85"
                      src="./salesforce-partner-logo.png"
                      className="image-center partner-logo"
                      alt="Salesforce"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 content-section-tight">
                  <div className="box-shadow-1 box-shadow-padding-2 d-flex align-items-center h-100">
                    <img
                      width="800"
                      height="191"
                      src="./Snowflake-logo-800x191.png"
                      className="image-center partner-logo"
                      alt=""
                      loading="lazy"
                      srcSet="
                        ./Snowflake-logo-800x191.png         800w,
                        ./Snowflake-logo-300x72.png          300w,
                        ./Snowflake-logo-1536x366.png       1536w,
                        ./Snowflake-logo-e1612643218150.png  121w
                      "
                      sizes="(max-width: 800px) 100vw, 800px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <p style={{textAlign: "center"}}>
                <a className="btn btn-purple" href="/about/partners/">
                  Go to Our Partners Page
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 content-section text-center">
              <h2 className="paragraph" style={{textAlign: "center"}}>
                RESOURCES
              </h2>
              <h3 className="h2 heading-underline underline-purple" style={{textAlign: "center"}}>
                Connect. Collaborate. Trade.
              </h3>
              <p className="text-big" style={{textAlign: "center"}}>
                Learn how you can increase productivity and drive better decisions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md content-section-tight">
              <div className="row">
                <div className="col-lg-4 content-section-tight">
                  <div className="resource-bucket-wrapper h-100 content-tight">
                    <div
                      className="resource-bucket box-shadow-1 h-100 bg-cover content-inverse links-inverse"
                      style={{backgroundImage: `url(./Revolutionize-EDI-Webinar-300x165.jpg)`}}
                    >
                      <div className="resource-bucket-spacing resource-bucket-color-overlay box-shadow-padding-2 h-100 webinar">
                        <div className="resource-bucket-top">
                          <p className="post-type scrunch-top">Webinar</p>
                          <h4 className="font-weight-bold">
                            <a target="_blank" href="https://info.coenterprise.com/revolutionize-edi-ondemand-webinar">
                              Revolutionize Your EDI in 25 Minutes or Less
                            </a>
                          </h4>
                        </div>
                        <div className="resource-bucket-bottom">
                          <p className="scrunch-bottom">
                            <a target="_blank" href="https://info.coenterprise.com/revolutionize-edi-ondemand-webinar" className="arrow-link">
                              Watch Now
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 content-section-tight">
                  <div className="resource-bucket-wrapper h-100 content-tight">
                    <div
                      className="resource-bucket box-shadow-1 h-100 bg-cover content-inverse links-inverse"
                      style={{backgroundImage: `url(./Syncrofy-doc-search-300x162.png)`}}
                    >
                      <div className="resource-bucket-spacing resource-bucket-color-overlay box-shadow-padding-2 h-100 blog">
                        <div className="resource-bucket-top">
                          <p className="post-type scrunch-top">Blog</p>
                          <h4 className="font-weight-bold">
                            <a href="/blog/3-quick-and-easy-ways-to-find-a-document-in-syncrofy/">3 Quick and Easy Ways to Find a Document in Syncrofy</a>
                          </h4>
                          <p>
                            <small>By: Pasquale Gatti</small>
                          </p>
                        </div>
                        <div className="resource-bucket-bottom">
                          <p className="scrunch-bottom">
                            <a href="/blog/3-quick-and-easy-ways-to-find-a-document-in-syncrofy/" className="arrow-link">
                              Read Now
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 content-section-tight">
                  <div className="resource-bucket-wrapper h-100 content-tight">
                    <div
                      className="resource-bucket box-shadow-1 h-100 bg-cover content-inverse links-inverse"
                      style={{backgroundImage: `url(./Syncrofy-PR-300x166.jpg)`}}
                    >
                      <div className="resource-bucket-spacing resource-bucket-color-overlay box-shadow-padding-2 h-100 in the press">
                        <div className="resource-bucket-top">
                          <p className="post-type scrunch-top">In The Press</p>
                          <h4 className="font-weight-bold">
                            <a target="_blank" href="https://www.supplychaindive.com/press-release/20190925-coenterprise-announces-syncrofy-cloud-for-retailers-and-the-supply-chain/">
                              Sass Innovations Announces Syncrofy Cloud for Retailers and the Supply Chain
                            </a>
                          </h4>
                        </div>
                        <div className="resource-bucket-bottom">
                          <p className="scrunch-bottom">
                            <a
                              target="_blank"
                              href="https://www.supplychaindive.com/press-release/20190925-coenterprise-announces-syncrofy-cloud-for-retailers-and-the-supply-chain/"
                              className="arrow-link"
                            >
                              Read Now
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container-lg bg-cover bg-shapes-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 style={{textAlign: "center"}}>Have a question?</h2>
              <h2 className="font-weight-200" style={{textAlign: "center"}}>
                Drop us a line.
              </h2>
              <p style={{textAlign: "center"}}>
                <a className="btn btn-aqua" href="/contact/">
                  Reach Out Today
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
