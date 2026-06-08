import { BriefcaseBusiness } from "lucide-react";
import Card from "../Card";
import { experienceData } from "../../data/home.json";

function ExperienceCard() {
  return (
    <Card className="flex flex-col gap-2 justify-between">
      <div className="text-xs flex items-center gap-2 text-white/50">
        <span>
          <BriefcaseBusiness size="18" />
        </span>
        <span className="fontMonospace">EXPERIENCE</span>
      </div>
      <div className="text-xl font-semibold flex items-center gap-2">
        {experienceData.years} Years
      </div>
      <span className="text-base text-white/50">{experienceData.title}</span>
    </Card>
  );
}

export default ExperienceCard;
