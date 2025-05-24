import { HomePage } from "@/pages/HomePage";
import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
