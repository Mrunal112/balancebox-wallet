import { TrendingUp, WalletMinimal } from "lucide-react";

export default function Balance() {
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const month = allMonths[date.getMonth()];

  return (
    <div className="px-16 pt-8 text-stone-800">
      <div className="flex justify-between items-end w-full max-w-lg rounded-t-lg shadow-sm p-4 border-y-4 border-stone-800">
        <div className="flex flex-col">
          <div className="text-xl font-medium">Balance</div>
          <div>
            <div className="text-md font-light">Your Wallet Balance</div>
          </div>
        </div>
        <div className="text-5xl font-semibold">₹ 10,000</div>
      </div>
      <div className="bg-slate-50 flex items-center justify-between w-full max-w-lg rounded-b-lg shadow-sm px-4 py-3 hover:px-3 cursor-pointer hover:underline transition-all duration-300 ease-in-out">
        <div className="flex gap-2 items-center">
          <TrendingUp />
          View {month}'s Transaction
        </div>
        <div>
          <WalletMinimal />
        </div>
      </div>
    </div>
  );
}
