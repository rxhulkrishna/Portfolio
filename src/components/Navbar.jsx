import { PanelLeft, SunDim } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const isActiveStyles = (isActive) => `${isActive ? "text-[#4e2b94]" : ""}`;
  return (
    <nav className="w-full flex justify-between items-center gap-5 ">
      <button
        type="button"
        className="border lg:hidden border-white/10 rounded-xl bg-white/[0.035] p-2 cursor-pointer"
      >
        <PanelLeft size="22" className="" />
      </button>
      <span className="fontMonospace font-semibold">{"<rxhulkrishna />"}</span>
      <div className="hidden lg:flex gap-10 items-center text-sm">
        <NavLink
          to="/"
          className={({ isActive }) => ` ${isActiveStyles(isActive)}`}
        >
          HOME
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `${isActiveStyles(isActive)}`}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => `${isActiveStyles(isActive)}`}
        >
          SKILLS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `${isActiveStyles(isActive)}`}
        >
          ABOUT
        </NavLink>
      </div>
      <button
        type="button"
        className="border border-white/10 rounded-xl bg-white/[0.035] p-2 cursor-pointer"
      >
        <SunDim size="22" className="" />
      </button>
    </nav>
  );
}

export default Navbar;
