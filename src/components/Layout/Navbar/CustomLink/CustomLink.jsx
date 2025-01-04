import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "./CustomLink.css";

export const CustomLink = ({ to, children, onClick }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "link active-link" : "link"} onClick={onClick}>
      <Link to={to}>{children}</Link>
    </li>
  );
};
