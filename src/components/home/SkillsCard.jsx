import { Brain } from "lucide-react";
import Card from "../Card";
import PillChips from "../PillChips";

function SkillsCard() {
  return (
    <Card className="flex flex-col gap-2">
      <div className="text-xs flex items-center gap-2 text-white/50 mb-3">
        <span>
          <Brain size="18" />
        </span>
        <span className="fontMonospace">SKILLS</span>
      </div>
      <div className="flex flex-col justify-start gap-2 mb-5">
        <div className="flex items-center justify-start gap-2">
          <PillChips label="Component Architecture" />
          <PillChips label="Responsive Design" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <PillChips label="API Integration" />
          <PillChips label="Performance Optimization" />
        </div>
      </div>
    </Card>
  );
}

export default SkillsCard;
