import { AdminPage } from "../AdminPage/AdminPage";
import { Route, Routes } from "react-router-dom";
import { VotePage } from "../VotePage/VotePage";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

import "./UserPage.css";

export const UserPage = ({ user, isAdmin, users }) => {

  return (
    <>
      <section className="user-section">
        <Navbar user={user} isAdmin={isAdmin} />
        <Routes>
          <Route path="vote" element={<VotePage users={users}/>} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
};
