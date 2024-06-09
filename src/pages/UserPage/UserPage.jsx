import { VotePage } from "../../components/VotePage/VotePage";
import { useThemeContext } from "../../context/ThemeContext";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { AdminPage } from "../AdminPage/AdminPage";
import { Routes, Route } from "react-router-dom";

import "./UserPage.css";

export const UserPage = ({ user, isAdmin, users }) => {
  const { darkTheme } = useThemeContext();

  return (
    <section className={`user-section ${darkTheme ? "darkSection" : ""}`}>
      <div>
        <Navbar user={user} isAdmin={isAdmin} />
        <h3 className="vote-title">liberty hill college elections</h3>
        <Routes>
          <Route path="/" element={<VotePage users={users} user={user} />} />
          <Route path="admin" element={<AdminPage users={users} />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};
