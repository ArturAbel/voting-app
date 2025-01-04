import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <section className={styles.section}>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
