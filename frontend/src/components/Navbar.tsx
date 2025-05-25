import { WalletMinimal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center text-cyan-100 px-16 py-4 bg-stone-800">
      <div className="flex items-center text-2xl font-medium cursor-pointer gap-1">
        <WalletMinimal className="text-rose-300" /> BalanceBox-Wallet
      </div>
      <div className="flex text-xl font-small cursor-pointer gap-4">
        Hello, User{" "}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
