import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <section className={styles.section}>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layout;
