import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  User,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  MailIcon,
  UserCog,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import $axios from "@/lib/$axios";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = $axios.post("/user/signup", {
        username,
        password,
        firstName,
        lastName,
        email,
      });
    } catch (error) {
      console.log("Login Failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-medium text-center">Sign Up</h1>

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

        <div className="flex gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserCog className="h-4 w-4 text-gray-500" />
            </div>
            <Input
              type="text"
              placeholder="First Name"
              className="pl-10 w-full"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserCog className="h-4 w-4 text-gray-500" />
            </div>
            <Input
              type="text"
              placeholder="Last Name"
              className="pl-10 w-full"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MailIcon className="h-4 w-4 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="Email"
            className="pl-10 w-full"
            onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
            <LogIn className="h-4 w-4" />
          </Button>
        )}

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-800 underline" to={"/signin"}>
            Sign In{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
