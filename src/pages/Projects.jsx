import { ExternalLink } from "lucide-react";
import { projectsData } from "../data/home.json";

function Projects() {
  function numberFormat(num) {
    return String(num).padStart(2, "0");
  }
  return (
    <div className="flex flex-col gap-5 md:gap-8 my-5 md:mt-8 w-full">
      <div className="flex flex-col gap-5">
        <span className="text-comment">//projects</span>
        {projectsData.map((data, idx) => (
          <div className="flex flex-col gap-2 justify-between w-full">
            <div className="flex justify-between items-center">
              <span>
                {numberFormat(idx + 1)}
                <span className="text-purple-accent hover:cursor-pointer hover:text-purple-hover">
                  {" " + data.name}
                </span>
              </span>
              <a href={data.url}>
                <ExternalLink size="16" className="hover:text-purple-accent" />
              </a>
            </div>
            <span>{data.description}</span>
            <span className="lowercase">{data.techs}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-divider"></div>
    </div>
  );
}

export default Projects;
