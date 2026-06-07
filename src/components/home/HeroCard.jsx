import { Download, ExternalLink, MapPin } from "lucide-react";
import Card from "../Card";
import { NavLink } from "react-router-dom";

function HeroCard() {
  return (
    <Card className="row-span-2 flex flex-col gap-3 justify-between">
      <div className="text-xs px-4 py-2 bg-white/5 rounded-full flex items-center justify-center gap-2 w-max">
        <span className="size-1.5 bg-[#4e2b94] rounded-full"></span>
        Frontend Developer
      </div>
      <h1 className="text-3xl font-bold flex flex-col fontMonospace">
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-[#4e2b94] to-white bg-clip-text text-transparent font-bold text-3xl">
          Rahul Krishna S
        </span>
      </h1>
      <p className="text-white/50 text-sm w-[90%]">
        Frontend Developer focused on building scalable and modern web
        applications. Experienced with JavaScript, TypeScript, Lit and React.
      </p>
      <div className="flex gap-2 items-center justify-start text-sm">
        <NavLink to="/projects" className="btn-primary flex items-center gap-2">
          View my work <ExternalLink size="18" />
        </NavLink>
        <button className="btn-secondary flex items-center gap-2 cursor-pointer">
          Download Resume <Download size="18" />
        </button>
      </div>
      <div className="text-white/50 text-sm flex items-center gap-2">
        <MapPin size="12" />
        <span>Bangalore, India</span>
      </div>
    </Card>
  );
}

export default HeroCard;
