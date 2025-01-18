import { useThemeStyles } from "../../../../../hooks/useThemeStyles";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";
import { useState } from "react";

export const LinkSetting = ({ to, text, onClick }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const styles = useThemeStyles(lightStyles, darkStyles);
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleLinkOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      className={`${styles.link} ${isActive && styles.active} ${isHovered && styles.hover}`}
      onMouseEnter={handleLinkOnMouseEnter}
      onMouseLeave={handleLinkOnMouseLeave}
      onClick={onClick}
      to={to}
    >
      {text}
    </Link>
  );
};
