import { useThemeStyles } from "../../../../../hooks/useThemeStyles";
import { Link, useLocation } from "react-router-dom";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const LinkNavbar = ({ to, text }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const location = useLocation();
  const path = location.pathname;

  return (
    <Link to={to} className={`${styles.link} ${path === to && styles.active}`}>
      {text}
    </Link>
  );
};

export default LinkNavbar;
