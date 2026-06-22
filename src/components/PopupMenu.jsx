import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

const isActiveStyles = (isActive) => `${isActive ? "text-purple-accent" : ""}`;

function PopupMenu({ handleMenu }) {
  return (
    <div className="fixed z-10 right-0 top-0 w-full p-5 flex flex-col justify-center h-screen gap-10 bg-bg md:hidden">
      <span className="text-comment">//navigate</span>
      <X
        className="absolute top-2 right-2 outline-none hover:text-purple-accent hover:cursor-pointer"
        onClick={handleMenu}
      />
      <NavLink
        to="/"
        onClick={handleMenu}
        className={({ isActive }) =>
          `${isActiveStyles(isActive)} hover:text-purple-accent text-6xl`
        }
      >
        home
      </NavLink>
      <NavLink
        to="/about"
        onClick={handleMenu}
        className={({ isActive }) =>
          `${isActiveStyles(isActive)} hover:text-purple-accent text-6xl`
        }
      >
        about
      </NavLink>
      <NavLink
        to="/projects"
        onClick={handleMenu}
        className={({ isActive }) =>
          `${isActiveStyles(isActive)} hover:text-purple-accent text-6xl`
        }
      >
        projects
      </NavLink>
    </div>
  );
}

export default PopupMenu;
