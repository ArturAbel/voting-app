import { ThemeProvider } from "./context/ThemeContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
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
      {!validUser && (
        <LoginPage
          users={data}
          loading={loading}
          error={error}
          setValidUser={setValidUser}
          setUser={setUser}
          user={user}
          setIsAdmin={setIsAdmin}
        />
      )}
      {validUser && <UserPage users={data} user={user} isAdmin={isAdmin} />}
    </ThemeProvider>
  );
}

export default App;
