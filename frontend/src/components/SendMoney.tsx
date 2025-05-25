import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { User } from "./User";
import { useEffect, useState } from "react";
import $axios from "@/lib/$axios";
import ErrorAlert from "./ErrorAlert";

export default function SendMoney() {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await $axios.get(`/user/get-users?filter=${username}`);
        setUsers(response?.data?.users);
      } catch (error) {
        console.log("Users filter API Failed ", error);
        let errorMessage = "";

        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error
        ) {
          const axiosError = error as {
            response?: { data?: { msg?: string } };
          };

          if (axiosError.response?.data?.msg) {
            errorMessage = axiosError.response.data.msg;
          }
        }

        setError(errorMessage);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
    fetchUsers();
  }, [username]);

  return (
    <div className="px-16 pt-8">
      <ErrorAlert error={error} setError={setError} percent={20} />
      <div className="p-4 h-full min-h-[55vh] rounded-lg bg-slate-50 shadow-sm border-x-4 border-stone-800 space-y-4">
        <div className="text-xl font-medium">Send Money</div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-stone-800" />
          </div>
          <Input
            type="text"
            placeholder="Search username...."
            onChange={(e) => setUserName(e.target.value)}
            className="pl-10 w-full h-12 rounded-lg bg-slate-50"
          />
        </div>

        <div className="h-full max-h-[40vh] min-h-[40vh] rounded-lg border-2 shadow-sm overflow-y-scroll">
          {users.length > 0 &&
            users.map((user, index) => (
              <div key={index} className="p-4">
                <User user={user} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
