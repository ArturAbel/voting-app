import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LINK } from "../constants/navigation";
import { auth } from "../config/firebase";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const { userAuth, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!userAuth || !auth.currentUser)) {
      navigate(`/${LINK.LOGIN}`);
    }
  }, [userAuth, isLoading, navigate]);

  return userAuth ? children : null;
};
