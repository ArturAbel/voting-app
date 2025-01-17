import CandidatesDisplay from "./pages/CandidatesDisplay/CandidatesDisplay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import { LINK } from "./constants/navigation";

function App() {
  const routes = [
    {
      path: `/${LINK.LOGIN}`,
      element: <LoginPage />,
    },
    {
      path: `/${LINK.HOME}`,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ path: `/${LINK.HOME}`, element: <CandidatesDisplay /> }],
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
