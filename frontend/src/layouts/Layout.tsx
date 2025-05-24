import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer>Hello From MainLayout</footer>
    </div>
  );
}
