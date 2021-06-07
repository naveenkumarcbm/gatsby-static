import React from "react";
import Layout from "../../components/layout";

const Contact = () => {
  return (
    <Layout headerclassName="white-bg-header">
      <div className="aspot-bg-1 bg-cover bg-cover-bottom">
        <div className="content-container d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <p style={{ textAlign: "center" }}>CONTACT</p>
                <h1 className="heading-underline underline-blue" style={{ textAlign: "center" }}>
                  We would love to hear from you.
                </h1>
                <p style={{ textAlign: "center" }}>We appreciate your interest in Sass Innovations. Please complete the form below to send us a message and we will be happy to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <a className="hover-bucket content-section-tight" href="http://support.coenterprise.com/">
                <div className="hover-bucket-inner box-shadow-1 box-shadow-padding-2">
                  <div className="row">
                    <div className="col-md">
                      <p>
                        <img
                          loading="lazy"
                          className="aligncenter wp-image-692"
                          src="./Contact_Support-300x300.png"
                          alt="Sass Innovations Support"
                          width="150"
                          height="150"
                          srcSet="./Contact_Support-300x300.png 300w, ./Contact_Support.png 800w"
                          sizes="(max-width: 150px) 100vw, 150px"
                        />
                      </p>
                    </div>
                    <div className="col-md-8">
                      <h4>Need help?</h4>
                      <p>Access our support site here where you can submit a support ticket, utilize our troubleshooter, or access our knowledge base articles.</p>
                      <p className="font-weight-700 text-green" style={{ color: "#20A2B5" }}>
                        Learn More <i class="fas fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
