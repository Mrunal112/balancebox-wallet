import { CircleUserRound, SendHorizonal } from "lucide-react";
import { Button } from "./ui/button";

export function User({ user }: { user: string }) {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex items-center gap-4">
        <CircleUserRound className="w-8 h-8 text-stone-800" />
        <div className="text-xl font-light hover:underline cursor-pointer">
          {user}
        </div>
      </div>
      <div>
        <Button
          className="w-full flex items-center gap-2 bg-stone-800 text-slate-50 cursor-pointer min-w-40"
          variant="outline"
        >
          Send Money <SendHorizonal />
        </Button>
      </div>
    </div>
  );
}
