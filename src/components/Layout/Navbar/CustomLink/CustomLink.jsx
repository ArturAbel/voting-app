import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "./CustomLink.css";

export const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "link active-link" : "link"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
