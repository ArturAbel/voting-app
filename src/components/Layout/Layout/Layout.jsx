import { getUserFromDB } from "../../../api/user/getUserFromDB";
import { useThemeStyles } from "../../../hooks/useThemeStyles";
import { setUser } from "../../../redux/slices/userSlice";
import { auth } from "../../../config/firebase";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useEffect } from "react";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Layout = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUserFromDB(auth.lastNotifiedUid);
        dispatch(setUser(data));
      } catch (error) {
        console.error("Error setting user: ", error);
      }
    };
    getUserData();
  }, []);

  if (!auth) return <div>Loading...</div>;

  return (
    <section className={styles.section}>
      <Navbar />
      <div className={styles.frame}>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
