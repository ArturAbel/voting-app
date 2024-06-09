
import {
  facebookIcon,
  linkedinIcon,
  xIcon,
  youtubeIcon,
  sealIcon,
} from "../../utils/variables";

import "./Footer.css";


export const Footer = () => {
  return (
    <footer>
      <div className="footer-left-container">
        <h2 className="footer-get-in-touch">get in touch</h2>
        <div className="footer-slogan">
          At Liberty Hill College, we empower every student to soar to new
          heights. Join us and forge a future full of limitless possibilities.
        </div>
        <div className="footer-social-icons">
          <a href="">
            <img className="social-icon" src={facebookIcon} alt="facebook" />
          </a>
          <a href="">
            <img className="social-icon" src={linkedinIcon} alt="linkedin" />
          </a>
          <a href="">
            <img className="social-icon" src={xIcon} alt="x" />
          </a>
          <a href="">
            <img className="social-icon" src={youtubeIcon} alt="youtube" />
          </a>
        </div>
        <p className="footer-copyrights">
          Copyright ©2024 Liberty Hill College
        </p>
      </div>
      <div className="footer-right-container">
        <ul className="footer-list">
          <li className="list-item-title">
            <strong>Policies</strong>
          </li>
          <li className="list-item-title">
            <strong>Overview</strong>
          </li>
          <li className="list-item">
            <a href="">Privacy policy</a>
          </li>
          <li className="list-item">
            <a href="">Membership & Community</a>
          </li>
          <li className="list-item">
            <a href="">Information policy</a>
          </li>
          <li className="list-item">
            <a href="">Data & Registries</a>
          </li>
          <li className="list-item">
            <a href="">Energy policy</a>
          </li>
          <li className="list-item">
            <a href="">ACGMail</a>
          </li>
        </ul>
        <div className="footer-address">
          <p>
            Liberty Hill College 1234 Academic Drive Knowledge City, XY 56789
            USA
          </p>
          <p>Email: info@libertyhillcollege.edu</p>
          <p>Phone: (555) 123-4567</p>
          <img className="footer-seal" src={sealIcon} alt="seal" />
        </div>
      </div>
    </footer>
  );
};
