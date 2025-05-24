import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn, User, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-medium text-center">Sign In</h1>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-4 w-4 text-gray-500" />
          </div>
          <Input type="text" placeholder="Username" className="pl-10 w-full" />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock className="h-4 w-4 text-gray-500" />
          </div>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pl-10 pr-10 w-full"
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            )}
          </button>
        </div>

        <Button
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
        >
          Sign In
          <LogIn className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
