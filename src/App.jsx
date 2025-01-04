import CandidatesDisplay from "./pages/CandidatesDisplay/CandidatesDisplay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout/Layout";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const routes = [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: "/", element: <CandidatesDisplay /> }],
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
