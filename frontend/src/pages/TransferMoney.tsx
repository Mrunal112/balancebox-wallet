import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import $axios from "@/lib/$axios";
import { IndianRupee, Check, X } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function TransferMoney() {
  const { userid, firstName, lastName } = useParams();
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");
  const [dots, setDots] = useState("");

  const transferMoney = async () => {
    const numericAmount = Number(amount);

    const body = {
      to: userid,
      amount: numericAmount,
    };

    try {
      const response = await $axios.post("/account/transfer", body);
      setMsg(response?.data?.msg);
    } catch (error) {
      console.error("Transfer failed:", error);
    } finally {
      setAmount("");

      const interval = setInterval(() => {
        setDots((prev) => {
          if (prev.length >= 3) return "";
          return prev + ".";
        });
      }, 500);

      setTimeout(() => {
        setMsg("");
        clearInterval(interval);
      }, 10000);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4">
      {msg !== "" && (
        <div className="w-full max-w-sm space-y-5 border-y-4 border-stone-800 p-16 rounded-md text-center mb-4">
          <div className="flex justify-center">
            <div
              className={`${
                msg.toLowerCase().includes("success")
                  ? "bg-green-600"
                  : "bg-red-600"
              } rounded-full flex justify-center items-center w-16 h-16 text-white font-bold`}
            >
              {msg.toLowerCase().includes("success") ? (
                <Check className="text-green-50 h-8 w-8" />
              ) : (
                <X className="text-green-50 h-8 w-8" />
              )}
            </div>
          </div>
          <div className="text-2xl text-center text-balance">{msg}</div>
          <div className="whitespace-nowrap italic font-light">
            Please wait while you're being redirected{dots}
          </div>
        </div>
      )}
      {msg == "" && (
        <div className="w-full max-w-sm space-y-5 border-y-4 border-stone-800 p-16 rounded-md">
          <div className="text-2xl font-medium text-center flex justify-center">
            <div className="bg-amber-300 rounded-full flex justify-center items-center w-16 h-16">
              {firstName?.[0] || "U"}
              {lastName?.[0]}
            </div>
          </div>
          <div className="text-2xl font-medium text-center text-balance">
            Send Money to {firstName} {lastName}
          </div>
          <div className="text-xl font-light text-center">@{userid}</div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IndianRupee className="h-4 w-4 text-gray-500" />
            </div>
            <Input
              placeholder="Enter the amount"
              type="number"
              inputMode="decimal"
              className="pl-10 w-full border-stone-800"
              value={amount}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^(\d+)(\.\d{0,2})?$/.test(value)) {
                  setAmount(value);
                }
              }}
            />
          </div>
          <Button
            disabled={!amount}
            className="w-full flex items-center justify-center gap-2 bg-stone-800"
            onClick={transferMoney}
          >
            Send Money
          </Button>
        </div>
      )}
    </div>
  );
}
