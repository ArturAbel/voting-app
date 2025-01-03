import { Footer } from "../../components/Layout/Footer/Footer";
import { useThemeContext } from "../../context/ThemeContext";
import { Navbar } from "../../components/Layout/Navbar/Navbar";

import "./UserPage.css";

export const UserPage = ({ user, isAdmin }) => {
  const { darkTheme } = useThemeContext();

  return (
    <section className={`user-section ${darkTheme ? "darkSection" : ""}`}>
      <div>
        <Navbar user={user} isAdmin={isAdmin} />
        <h3 className="vote-title">liberty hill college elections</h3>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};
