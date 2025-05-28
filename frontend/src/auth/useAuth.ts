import $axios from "@/lib/$axios";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, isLoading] = useState(true);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await $axios.get("/authenticate-token", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (response.data.valid) {
          setAuthenticated(true);
        } else {
          localStorage.removeItem("token");
          setAuthenticated(false);
        }
        isLoading(false);
      } catch (error) {
        console.log("error", error);
        isLoading(false);
        setAuthenticated(false);
      }
    };
    checkToken();
  }, []);

  return { isAuthenticated, loading };
}
