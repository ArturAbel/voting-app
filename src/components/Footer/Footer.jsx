import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-left-container">
        <h2 className="footer-get-in-touch">get in touch</h2>
        <div className="footer-slogan">
          <p>
            At Liberty Hill College, we empower every student to soar to new
            heights. Join us and forge a future full of limitless possibilities.
          </p>
        </div>
        <div className="footer-social-icons">
          <a href="">
            <img
              className="social-icon"
              src="../../assets/svg/socials/facebook.svg"
              alt="facebook"
            />
          </a>
          <a href="">
            <img
              className="social-icon"
              src="../../assets/svg/socials/linkedin.svg"
              alt="facebook"
            />
          </a>
          <a href="">
            <img
              className="social-icon"
              src="../../assets/svg/socials/x.svg"
              alt="facebook"
            />
          </a>
          <a href="">
            <img
              className="social-icon"
              src="../../assets/svg/socials/youtube.svg"
              alt="facebook"
            />
          </a>
        </div>
        <p className="footer-copyrights">
          Copyright ©2024 Liberty Hill College
        </p>
      </div>
      <div className="footer-right-container">
        <ul className="footer-list">
          <li className="list-item">
            <strong>Policies</strong>
          </li>
          <li className="list-item">
            <strong>Overview</strong>
          </li>
          <li className="list-item">Privacy policy</li>
          <li className="list-item">Membership & Community</li>
          <li className="list-item">Information policy </li>
          <li className="list-item">Data & Registries</li>
          <li className="list-item">Energy policy</li>
          <li className="list-item">ACGMail</li>
        </ul>
        <div className="footer-address">
          <p>
            Liberty Hill College 1234 Academic Drive Knowledge City, XY 56789
            USA
          </p>
          <p>Email: info@libertyhillcollege.edu</p>
          <p>Phone: (555) 123-4567</p>
          <img
            className="footer-seal"
            src="../../assets/svg/app/seal.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};
