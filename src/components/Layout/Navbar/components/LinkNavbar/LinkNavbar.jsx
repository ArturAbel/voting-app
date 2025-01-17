import { Link, useLocation } from "react-router-dom";

import styles from "./LinkNavbar.module.css";

const LinkNavbar = ({ to, text }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Link to={to} className={`${styles.link} ${path === to && styles.active}`}>
      {text}
    </Link>
  );
};

export default LinkNavbar;
