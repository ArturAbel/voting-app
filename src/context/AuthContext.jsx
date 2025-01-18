import { browserSessionPersistence, onAuthStateChanged, setPersistence } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await setPersistence(auth, browserSessionPersistence);
      } catch (error) {
        console.error("Error setting session persistence:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setIsLoading(true);
      if (currentUser) {
        const idTokenResult = await currentUser.getIdTokenResult();
        setUserAuth(currentUser);
        setIsAdmin(idTokenResult.claims.admin || false);
      } else {
        setUserAuth(null);
        setIsAdmin(false);
      }
      setIsLoading(false);
    });

    initializeAuth();

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ userAuth, isAdmin, isLoading, setUserAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
