import { WalletMinimal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center text-cyan-100 px-16 py-4 bg-stone-800">
      <div
        className="flex items-center text-2xl font-medium cursor-pointer gap-1"
        onClick={() => {
          navigate("/");
        }}
      >
        <WalletMinimal className="text-rose-300" /> BalanceBox-Wallet
      </div>
      <div className="flex text-xl font-small cursor-pointer gap-4">
        Hello, User
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User Profile"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-stone-800 text-cyan-100 mt-3 mr-14 font-medium">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/signin");
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
