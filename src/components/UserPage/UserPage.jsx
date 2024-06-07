import { AdminPage } from "../AdminPage/AdminPage";
import { Route, Routes } from "react-router-dom";
import { VotePage } from "../VotePage/VotePage";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

import "./UserPage.css";

export const UserPage = ({ user, isAdmin, users }) => {
  return (
    <section className="user-section">
      <div className="user-main">
        <Navbar user={user} isAdmin={isAdmin} />
        <Routes>
          <Route path="vote" element={<VotePage users={users} user={user} />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};
