import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <LandingPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
