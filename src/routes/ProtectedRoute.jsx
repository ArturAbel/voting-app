import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !auth.currentUser) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? children : null;
};
