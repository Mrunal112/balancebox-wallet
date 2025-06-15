import { ChartBar } from "@/components/BarChart";
import { ChartPie } from "@/components/PieChart";

export function TransferDetails() {
  return (
    <div className="px-16 pt-8 text-stone-800">
      <div className="text-xl font-semibold pb-4">
        Get your Transaction Details Here
      </div>
      <div className="w-full flex">
        <div className="pr-4 w-1/2">
          <ChartBar />
        </div>
        <div className="pl-4 w-1/2 ">
          <ChartPie />
        </div>
      </div>
    </div>
  );
}
