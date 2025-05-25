import Balance from "@/components/Balance";
import Navbar from "@/components/Navbar";
import SendMoney from "@/components/SendMoney";

export function HomePage() {
  return (
    <div className="min-h-screen bg-stone-200 ">
      {/* Welcome to the HomePage  */}
      <Navbar />
      <Balance />
      <SendMoney />
    </div>
  );
}
