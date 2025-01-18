import { useThemeStyles } from "../../hooks/useThemeStyles";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const About = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <section className={styles.section}>
      <div className="footer-left-container">
        <h1 className={styles.name}>Artur Abel</h1>
        <div className="footer-slogan">
          At Liberty Hill College, we empower every student to soar to new heights. Join us and forge a future full of
          limitless possibilities.
        </div>
        <div className="footer-social-icons">
          <a href="">
            <img className="social-icon" src={""} alt="facebook" />
          </a>
          <a href="">
            <img className="social-icon" src={""} alt="linkedin" />
          </a>
          <a href="">
            <img className="social-icon" src={""} alt="x" />
          </a>
          <a href="">
            <img className="social-icon" src={""} alt="youtube" />
          </a>
        </div>
        <p className="footer-copyrights">Copyright ©2024 Liberty Hill College</p>
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
          <p>Liberty Hill College 1234 Academic Drive Knowledge City, XY 56789 USA</p>
          <p>Email: info@libertyhillcollege.edu</p>
          <p>Phone: (555) 123-4567</p>
          <img className="footer-seal" src={""} alt="seal" />
        </div>
      </div>
    </section>
  );
};

export default About;
