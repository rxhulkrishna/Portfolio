import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PopupMenu from "./PopupMenu";
const isActiveStyles = (isActive) => `${isActive ? "text-purple-accent" : ""}`;

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  function handleMenu() {
    setIsMenu(!isMenu);
  }
  return (
    <nav className="w-full flex justify-between items-center gap-5 relative">
      {isMenu && <PopupMenu handleMenu={handleMenu} />}
      <NavLink to="/" className="hover:text-purple-accent">
        rxhulkrishna<span className="text-purple-accent">.dev</span>
      </NavLink>
      <button
        className=" md:hidden hover:text-purple-accent p-2 cursor-pointer"
        onClick={handleMenu}
      >
        <Menu size="22" className="outline-none" />
      </button>
      <div className="hidden md:flex gap-10 items-center text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActiveStyles(isActive)} hover:text-purple-accent`
          }
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActiveStyles(isActive)} hover:text-purple-accent`
          }
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActiveStyles(isActive)} hover:text-purple-accent`
          }
        >
          projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
