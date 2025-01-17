import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

import styles from "./LinkSetting.module.css";

export const LinkSetting = ({ to, text, onClick }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
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
