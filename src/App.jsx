import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { UserPage } from "./pages/UserPage/UserPage";
import useFetchData from "./hooks/useFetchData";
import { votersURL } from "./utils/variables";
import { useState } from "react";

function App() {
  const { data, loading, error } = useFetchData(votersURL);
  const [validUser, setValidUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              users={data}
              loading={loading}
              error={error}
              setValidUser={setValidUser}
              setUser={setUser}
              user={user}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route
          path="/user"
          element={
            validUser ? (
              <UserPage users={data} user={user} isAdmin={isAdmin} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route />
        <Route
          path="/admin"
          element={
            validUser && isAdmin ? (
              <AdminPage users={data} />
            ) : (
              <Navigate to="/user" />
            )
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
