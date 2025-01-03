import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setIsLoading(true);
      if (currentUser) {
        const idTokenResult = await currentUser.getIdTokenResult();
        setUser(currentUser);
        setIsAdmin(idTokenResult.claims.admin || false);
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  return <AuthContext.Provider value={{ user, isAdmin, isLoading, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
