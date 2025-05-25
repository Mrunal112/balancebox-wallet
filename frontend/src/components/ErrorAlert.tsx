import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface AlterProps {
  error: string;
  percent: number;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export default function ErrorAlert({ error, percent, setError }: AlterProps) {
  if (!error) return null;

  return (
    <div className={`transition-all duration-300 ease-in-out z-10`}>
      <div className={`absolute bottom-[${percent}%] w-full max-w-sm`}>
        <Alert className="bg-red-400 relative">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription className="text-stone-50 font-semibold">
            {error}
          </AlertDescription>

          <button
            onClick={() => setError("")}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </Alert>
      </div>
    </div>
  );
}
