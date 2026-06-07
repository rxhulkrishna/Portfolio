import { SwatchBookIcon } from "lucide-react";
import Card from "../Card";
import PillChips from "../PillChips";

function TechStackCard() {
  return (
    <Card className="flex flex-col gap-2 justify-between col-span-2">
      <div className="text-xs flex items-center gap-2 text-white/50">
        <span>
          <SwatchBookIcon size="18" />
        </span>
        <span className="fontMonospace">TECH STACK</span>
      </div>
      <div className="flex flex-col justify-start gap-2">
        <div className="flex items-center justify-start gap-2">
          <PillChips label="Javascript" />
          <PillChips label="Typescript" />
          <PillChips label="Lit" />
          <PillChips label="Tailwind CSS" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <PillChips label="React" />
          <PillChips label="HTML" />
          <PillChips label="CSS" />
          <PillChips label="CI / CD" />
          <PillChips label="Github Actions" />
        </div>
      </div>
    </Card>
  );
}

export default TechStackCard;
