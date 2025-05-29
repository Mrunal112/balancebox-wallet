import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-stone-200">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
