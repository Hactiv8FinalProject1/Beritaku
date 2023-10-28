import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>
                <b>Beritaku</b>
              </h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                inventore quasi consequuntur eos, sit recusandae cumque nemo
                officia quod ipsam ducimus delectus nesciunt eius minima rem
                iure saepe. Officia, quasi?
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <h6 className="text-center">
                <b>Information</b>
              </h6>
              <div className="genre-container">
                <ul className="footer-links text-center">
                  <li>
                    <p>
                      <Link to="/">Indonesia</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/programming">Programming</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/covid19">Covid-19</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6 col-md-2">
              <h6 className="text-center">
                <b>Beritaku Media</b>
              </h6>
              <ul className="footer-links text-center">
                <li>
                  <p>Google News</p>
                </li>
                <li>
                  <p>Recode</p>
                </li>
                <li>
                  <p>Hacker News</p>
                </li>
                <li>
                  <p>CNET</p>
                </li>
                <li>
                  <p>BBC News</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className=" link facebook" href="https://facebook.com/">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="https://twitter.com/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="https://www.instagram.com/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://linkedin.com/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="youtube" href="https://youtube.com/">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
