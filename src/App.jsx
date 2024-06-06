import { useState } from "react";
import { LoginPage } from "./components/LoginPage/LoginPage";

function App() {
  const [validUser, setValidUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <section>
      {!validUser && (
        <LoginPage setValidUser={setValidUser} setUser={setUser} user={user} />
      )}
    </section>
  );
}

export default App;


