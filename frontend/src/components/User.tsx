import { CircleUserRound, SendHorizonal } from "lucide-react";
import { Button } from "./ui/button";

interface user {
  firstName: string;
  lastName: string;
  username: string;
}

export function User({ user }: { user: user }) {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex items-center gap-4">
        <CircleUserRound className="w-8 h-8 text-stone-800" />
        <div className="flex flex-col cursor-pointer">
          <div className="font-medium">
            {user.firstName} {user.lastName}
          </div>
          <div className="font-light hover:underline ">@{user.username}</div>
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
