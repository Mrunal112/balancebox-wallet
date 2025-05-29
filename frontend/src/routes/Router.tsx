import { HomePage } from "@/pages/HomePage";
import { lazy, Suspense } from "react";
import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "@/auth/PrivatePage";
import PublicRoute from "@/auth/PublicPage";
import { TransferMoney } from "@/pages/TransferMoney";
import MainLayout from "@/layouts/Layout";

const SignUp = lazy(() => import("@/pages/SignUp"));

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "transfer-money/:userid", element: <TransferMoney /> },
        ],
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: (
          <Suspense
            fallback={
              <div className="min-h-screen h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-sm">
                  <h1 className="text-lg font-medium text-center">
                    Loading...
                  </h1>
                </div>
              </div>
            }
          >
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/home",
    element: <SignIn />,
  },
]);

export default router;

// diff btw link navigate
// children routes in react
