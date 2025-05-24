import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface AlterProps {
  error: string;
  percent: number;
}

export default function ErrorAlert({ error, percent }: AlterProps) {
  if (!error) return null;

  return (
    <div className={`transition-all duration-300 ease-in-out z-10`}>
      <div className={`absolute bottom-[${percent}%] w-full max-w-sm`}>
        <Alert className="relative">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription className="font-semibold">{error}</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
