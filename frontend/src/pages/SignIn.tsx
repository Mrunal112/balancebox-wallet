import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn, User, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $axios from "@/lib/$axios";
import ErrorAlert from "@/components/ErrorAlert";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await $axios.post("/user/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login Failed ", error);
      let errorMessage = "An error occurred during login";

      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as {
          response?: { data?: { msg?: string } };
        };

        if (axiosError.response?.data?.msg) {
          errorMessage = axiosError.response.data.msg;
        }
      }

      setError(errorMessage);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <ErrorAlert error={error} percent={20} setError={setError} />

      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-medium text-center">Sign In</h1>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-4 w-4 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="Username"
            className="pl-10 w-full"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock className="h-4 w-4 text-gray-500" />
          </div>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pl-10 pr-10 w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            )}
          </button>
        </div>

        {loading ? (
          <Button
            disabled
            className="w-full flex items-center justify-center gap-2"
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
            disabled={!username || !password}
            onClick={handleLogin}
          >
            Sign In
            <LogIn className="h-4 w-4" />
          </Button>
        )}

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-blue-800 underline" to={"/signup"}>
            Sign Up{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

// Popup appear if dosen't get login or user dosen't exists
// Simplify the axios login
