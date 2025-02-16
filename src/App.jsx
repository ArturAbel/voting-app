import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PollDisplay from "./pages/PollDisplay/PollDisplay";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { fetchMyPolls } from "./api/polls/fetchMyPolls";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import PollBoard from "./pages/PollBoard/PollBoard";
import { fetchPoll } from "./api/polls/fetchPoll";
import MyPolls from "./pages/MyPolls/MyPolls";
import { LINK } from "./constants/navigation";
import About from "./pages/About/About";

function App() {
  const routes = [
    {
      path: `/${LINK.LOGIN}`,
      element: <LoginPage />,
    },
    {
      path: `/${LINK.POLL_BOARD}`,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: `/${LINK.POLL_BOARD}`, element: <PollBoard /> },
        {
          path: `/${LINK.MY_POLLS}`,
          loader: fetchMyPolls,
          element: <MyPolls />,
          children: [{ path: ":id", element: <PollDisplay />, loader: fetchPoll }],
        },
        { path: `/${LINK.ABOUT}`, element: <About /> },
      ],
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
