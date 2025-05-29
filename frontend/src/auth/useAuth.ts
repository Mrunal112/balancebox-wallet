import $axios from "@/lib/$axios";
import { useCallback, useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const response = await $axios.get("/authenticate-route");

      if (response.data.valid) {
        setAuthenticated(true);
      } else {
        localStorage.removeItem("token");
        setAuthenticated(false);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return { isAuthenticated, loading, checkAuth };
}
