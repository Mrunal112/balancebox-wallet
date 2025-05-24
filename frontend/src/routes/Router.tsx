import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
