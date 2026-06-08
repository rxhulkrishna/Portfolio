import { Download, ExternalLink, MapPin } from "lucide-react";
import Card from "../Card";
import { NavLink } from "react-router-dom";
import { heroData } from "../../data/home.json";

function HeroCard() {
  return (
    <Card className="md:row-span-2 flex flex-col gap-3 justify-between">
      <div className="text-xs px-4 py-2 bg-white/5 rounded-full flex items-center justify-center gap-2 w-max">
        <span className="size-1.5 bg-[#4e2b94] rounded-full"></span>
        Frontend Developer
      </div>
      <h1 className="text-3xl font-bold flex flex-col fontMonospace">
        Hi, I'm
        <span className="bg-linear-to-r from-[#4e2b94] to-white bg-clip-text text-transparent font-bold text-3xl">
          {heroData.name}
        </span>
      </h1>
      <p className="text-white/50 text-sm w-[90%]">{heroData.description}</p>
      <div className="flex gap-2 items-center justify-start text-xs lg:text-sm">
        <NavLink
          to={heroData.buttons[0].link}
          className="btn-primary flex items-center justify-start gap-2"
        >
          {heroData.buttons[0].label} <ExternalLink size="18" />
        </NavLink>
        <a
          href={heroData.buttons[1].link}
          className="btn-secondary flex items-center justify-start gap-2 cursor-pointer"
        >
          {heroData.buttons[1].label} <Download size="18" />
        </a>
      </div>
      <div className="text-white/50 text-sm flex items-center gap-2">
        <MapPin size="12" />
        <span>{heroData.location}</span>
      </div>
    </Card>
  );
}

export default HeroCard;
