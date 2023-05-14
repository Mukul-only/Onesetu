import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/Error";
import BusinessInfoPage from "./pages/createReportPages/BusinessInfoPage";
import PersonalInfoPage from "./pages/createReportPages/PersonalInfoPage";
import ReviewReportPage from "./pages/createReportPages/ReviewReportPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <LandingPage /> },
        {
          path: "/createreport",
          children: [
            { index: true, element: <BusinessInfoPage /> },
            { path: "personalinfo", element: <PersonalInfoPage /> },
            { path: "/createreport/review", element: <ReviewReportPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
