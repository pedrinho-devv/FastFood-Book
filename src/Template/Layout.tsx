import { Outlet } from "react-router-dom";
import Hero from "../Components/Hero";

const Layout = () => {
  return (
    <div>
      <Hero />
      <Outlet />
    </div>
  );
};

export default Layout;
