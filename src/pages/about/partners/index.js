import React from "react";
import Layout from "../../../components/layout";

const Careers = () => {
  return (
    <Layout>
    <div className="aspot-spacer aspot-bg-dark-blue bg-cover">
      <div className="hexagon1"></div>
      <div className="hexagon2"></div>
      <div className="hexagon3"></div>
      <div className="hexagon4"></div>

      <div className="content-container-lg pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 content-inverse content-section">
              <p style={{textAlign: "center"}}>OVERVIEW</p>
              <h1 style={{textAlign: "center"}}>Partners</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md content-inverse">
              <p style={{textAlign: "center"}}>
                We partner with the world’s most innovative technology companies to deliver exceptional solutions to our valued customers and set them up for continued success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="content-container bg-shapes-3 bg-full-width-repeat">
      <div className="container">
        <div className="content-container border-bottom-grey">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="800"
                  height="377"
                  src="../../IBM.png"
                  className="image-center"
                  alt="IBM Platinum Business Partner"
                  loading="lazy"
                  srcSet="../../IBM.png 800w, ../../IBM-300x141.png 300w"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">IBM</h3>
              <p>Sass Innovations is an <a href="http://www.ibm.com/">IBM</a> Platinum Business Partner and one of IBM’s largest B2B Integration software resellers.</p>
              <p><a className="btn btn-orange-outline" href="/about/partners/ibm/">Learn More About Our Partnership</a></p>
            </div>
          </div>
        </div>

        <div className="content-container border-bottom-grey">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="800"
                  height="242"
                  src="../../Tableau.png"
                  className="image-center"
                  alt="Tableau Partner"
                  loading="lazy"
                  srcSet="../../Tableau.png 800w, ../../Tableau-300x91.png 300w"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">Tableau</h3>
              <p>Sass Innovations is a <a href="http://www.tableau.com/">Tableau</a> Gold Partner. We help Tableau users quickly analyze, visualize, and share information seamlessly.</p>
              <p><a className="btn btn-orange-outline" href="/about/partners/tableau/">Learn More About Our Partnership</a></p>
            </div>
          </div>
        </div>

        <div className="content-container border-bottom-grey">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="800"
                  height="583"
                  src="../../Salesforce.png"
                  className="image-center"
                  alt="Salesforce Partner"
                  loading="lazy"
                  srcSet="../../Salesforce.png 800w, ../../Salesforce-300x219.png 300w"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">Salesforce</h3>
              <p>
                Sass Innovations is a <a href="http://www.salesforce.com/">Salesforce</a> Consulting Partner delivering solutions to complex business data problems across all Salesforce clouds and
                industries.
              </p>
              <p><a className="btn btn-orange-outline" href="https://www.salesforce.com/" target="_blank" rel="noopener">Learn More About Our Partnership</a></p>
            </div>
          </div>
        </div>

        <div className="content-container border-bottom-grey">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="1543"
                  height="368"
                  src="../../Logo-Wordmark-Blue.png"
                  className="image-center"
                  alt=""
                  loading="lazy"
                  srcSet="
                    ../../Logo-Wordmark-Blue.png          1543w,
                    ../../Logo-Wordmark-Blue-800x191.png   800w,
                    ../../Logo-Wordmark-Blue-300x72.png    300w,
                    ../../Logo-Wordmark-Blue-1536x366.png 1536w
                  "
                  sizes="(max-width: 1543px) 100vw, 1543px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">Snowflake</h3>
              <p>
                Sass Innovations is a <a href="https://www.snowflake.com/">Snowflake</a> Partner – the only data platform built for the cloud, for all your data and all your users, enabling users to
                mobilize their data to advance their business.
              </p>
              <p><a className="btn btn-orange-outline" href="https://www.snowflake.com/" target="_blank" rel="noopener">Learn More About Snowflake</a></p>
            </div>
          </div>
        </div>

        <div className="content-container border-bottom-grey">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="800"
                  height="280"
                  src="../../alteryx.png"
                  className="image-center"
                  alt="Alteryx Partner"
                  loading="lazy"
                  srcSet="../../alteryx.png 800w, ../../alteryx-300x105.png 300w"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">Alteryx</h3>
              <p>Sass Innovations helps <a href="http://www.alteryx.com/">Alteryx</a> users share and understand their data in a less complicated and insightful manner.</p>
              <p><a className="btn btn-orange-outline" href="https://www.alteryx.com/" target="_blank" rel="noopener">Learn More About Alteryx</a></p>
            </div>
          </div>
        </div>

        <div className="content-container border-bottom-grey">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="572"
                  height="157"
                  src="../../Automated-Insights-Logo.png"
                  className="image-center"
                  alt=""
                  loading="lazy"
                  srcSet="../../Automated-Insights-Logo.png 572w, ../../Automated-Insights-Logo-300x82.png 300w"
                  sizes="(max-width: 572px) 100vw, 572px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">Automated Insights</h3>
              <p>
                We speak the language of your data. Naturally, businesses want to make decisions better and faster, but are you interpreting your data correctly? That’s where we come in with our
                proprietary Natural Language Generation (NLG) platform. By delivering the right insight, to the right person, at the right time we automate the analysis of your data through NLG saving
                you time and money.
              </p>
              <p><a className="btn btn-orange-outline" href="https://automatedinsights.com/" target="_blank" rel="noopener">Learn More About Automated Insights</a></p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="row">
            <div className="col-md-3">
              <p>
                <img
                  width="570"
                  height="355"
                  src="../../edi_alliance-logo-whtspc.jpg"
                  className="image-center"
                  alt=""
                  loading="lazy"
                  srcSet="../../edi_alliance-logo-whtspc.jpg 570w, ../../edi_alliance-logo-whtspc-300x187.jpg 300w"
                  sizes="(max-width: 570px) 100vw, 570px"
                />
              </p>
            </div>
            <div className="col-md-8 offset-md-1">
              <h3 className="h4">EDI Alliance</h3>
              <p>We speak EDI so you don’t have to.</p>
              <p><a className="btn btn-orange-outline" href="https://www.edialliance.com/syncrofy/" target="_blank" rel="noopener">Learn more about our Syncrofy partnership with EDI Alliance</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="content-container-lg bg-cover bg-shapes-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 style={{textAlign: "center"}}>Interested in partnering with us?</h2>
            <p className="h2" style={{textAlign: "center"}}><span className="font-weight-300">Get in touch. We’d love to hear from you.</span></p>
            <p style={{textAlign: "center"}}><a className="btn btn-aqua" href="/contact/">Contact Us</a></p>
          </div>
        </div>
      </div>
    </div>

    </Layout>
  )
}

export default Careers;