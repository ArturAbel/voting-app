import { getUserFromDB } from "../../../utils/dataBase/getUserFromDB";
import { setUser } from "../../../redux/slices/userSlice";
import { useAuth } from "../../../context/AuthContext";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import styles from "./Layout.module.css";

const Layout = () => {
  const dispatch = useDispatch();
  const { userAuth } = useAuth();

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserFromDB(userAuth.uid);
      dispatch(setUser(data));
    };
    getUserData();
  }, []);

  return (
    <section className={styles.section}>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layout;
