import { ArrowUpRightIcon, FolderClosed } from "lucide-react";
import Card from "../Card";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <Card className="flex flex-col flex-wrap md:col-span-2 justify-between gap-3">
      <div className="text-xs rowFlex gap-2 text-white/50 justify-between">
        <span className="text-xs rowFlex gap-2 text-white/50">
          <FolderClosed size="18" />
          PROJECTS
        </span>
        <NavLink to="/projects" className="rowFlex gap-2">
          View all projects <ArrowUpRightIcon />
        </NavLink>
      </div>
      <div className="rowFlex flex-wrap justify-between gap-3">
        <div className="text-sm font-semibold flex flex-col projectCard gap-2 w-full lg:w-54">
          <h4>Portfolio</h4>
          <span className="text-xs text-white/50 font-medium">
            React • Tailwind
          </span>
        </div>
        <div className="text-sm font-semibold flex flex-col projectCard gap-2 w-full lg:w-54">
          <h4>Atmos</h4>
          <span className="text-xs text-white/50 font-medium">
            React • OpenWeather API
          </span>
        </div>
        <div className="text-sm font-semibold flex flex-col projectCard gap-2 w-full lg:w-54">
          <h4>Task Flow</h4>
          <span className="text-xs text-white/50 font-medium">
            React • Local Storage
          </span>
        </div>
      </div>
    </Card>
  );
}

export default Projects;
