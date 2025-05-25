import { HomePage } from "@/pages/HomePage";
import { lazy, Suspense } from "react";
import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

const SignUp = lazy(() => import("@/pages/SignUp"));

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <HomePage />,
  },
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
              <h1 className="text-lg font-medium text-center">Loading...</h1>
            </div>
          </div>
        }
      >
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: <SignIn />,
  },
]);

export default router;
