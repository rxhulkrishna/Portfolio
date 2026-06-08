import { Brain } from "lucide-react";
import Card from "../Card";
import PillChips from "../PillChips";
import { skillsData } from "../../data/home.json";

function SkillsCard() {
  return (
    <Card className="flex flex-col gap-2">
      <div className="text-xs flex items-center gap-2 text-white/50 mb-3">
        <span>
          <Brain size="18" />
        </span>
        <span className="fontMonospace">SKILLS</span>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2">
        {skillsData.map((data) => (
          <PillChips label={data} />
        ))}
      </div>
    </Card>
  );
}

export default SkillsCard;
