import { ArrowUpRightIcon, FolderClosed } from "lucide-react";
import Card from "../Card";
import { NavLink } from "react-router-dom";
import { projectsData } from "../../data/home.json";

function Projects() {
  return (
    <Card className="flex flex-col flex-wrap lg:col-span-2 justify-between gap-3">
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
        {projectsData.map((project) => (
          <div className="text-sm font-semibold flex flex-col projectCard gap-2 w-full lg:w-54">
            <h4>{project.name}</h4>
            <span className="text-xs text-white/50 font-medium">
              {project.techs}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Projects;
