import type { JSX } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute(): JSX.Element | null {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
