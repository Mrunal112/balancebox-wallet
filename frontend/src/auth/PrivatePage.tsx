import type { JSX } from "react";
import useAuth from "./useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(): JSX.Element | null {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/signin" replace state={{ from: location }} />;
}
